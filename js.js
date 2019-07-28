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

document.addEventListener('DOMContentLoaded',function(){
    var main_mobile = document.getElementById('main_mobile');
    var up =document.querySelector('.ra');
   

    console.log(main_mobile);

    window.addEventListener('scroll',function(){
       
            if(window.pageYOffset >100){
               if(main_mobile.style.display==='block'){
                    main_mobile.style.display='none';

               }

            }
        
    })
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