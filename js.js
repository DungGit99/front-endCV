document.addEventListener('DOMContentLoaded',function(){
    var nut=document.getElementsByClassName('declick');
    var nd = document.getElementsByClassName('view');
    for(var i=0; i<nut.length;i++){
        nut[i].onclick=function(){
            for(var j=0; j<nut.length;j++){
                nut[j].classList.remove('active');              
            }
            this.classList.add('active');
            var ndhienra=this.getAttribute('data-thamso');
            var phatuhienra=document.getElementById(ndhienra);
            for (var i = 0; i < nd.length; i++) {
                nd[i].classList.remove('ra');
            }
           phatuhienra.classList.add('ra');
        }
    }
},false)
var srollUp ='duoi100';
document.addEventListener('DOMContentLoaded',function(){
    var main_mobile = document.getElementById('main_mobile');
    var up =document.querySelector('.ra');
    var scroll=document.querySelector('.scroll');

    window.addEventListener('scroll',function(){
       
            if(window.pageYOffset >100){
               if(main_mobile.style.display==='block'){
                    main_mobile.style.display='none';

               }

            }
            ///
            if(window.pageYOffset >100){
                if(srollUp =='duoi100'){
                    srollUp = 'tren100';
                    scroll.classList.add('scrollBlock');
                }
            }else if(window.pageYOffset <100){
                if(srollUp =='tren100'){
                    srollUp='duoi100';
                    scroll.classList.remove('scrollBlock');
                }
            }
        
    });
    // click scroll

    //Truy xuất icon
    scroll.onclick = function(){
        var chieucaoht = self.pageYOffset;
        // lấy chiều cao hiện tại của trang
       
        
        var set = chieucaoht;
        var run = setInterval(function(){
            chieucaoht = chieucaoht - 0.05*set;
            window.scrollTo(0,chieucaoht);    
            if(chieucaoht <= 0){
                clearInterval(run);
            }        
        },20) // cuộn chuột đến vị trí ban đầu sau 0.015s
    }

})

function myFunction(){
    var main_mobile = document.getElementById('main_mobile');
    var up =document.querySelector('.ra');

    if (main_mobile.style.display === "block") {
        main_mobile.style.display = "none";
        up.classList.remove('up');
      } else {
        main_mobile.style.display = "block";
        up.classList.add('up');
      }
}
