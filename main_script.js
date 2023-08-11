
window.onload = function(){
     /*
     if(localStorage.getItem("mode") != "dark-mode"){
          
          var  toggle = document.getElementById('togglemode'),
          body = document.querySelector('body')

          toggle.classList.toggle('transitions')
          body.classList.toggle('transitions')

          toggle.classList.toggle('dark-mode')
          toggle.classList.toggle('fa-moon')
          toggle.classList.toggle('fa-sun')
          body.classList.toggle('dark-mode')


          
     }
     */
    
}


function mode(){
   var  toggle = document.getElementById('togglemode'),
        body = document.querySelector('body')
   toggle.onclick = function(){
          if(toggle.classList.contains("transitions")){
               toggle.classList.toggle('transitions')
               body.classList.toggle('transitions')
          }

          toggle.classList.toggle('dark-mode')
          toggle.classList.toggle('fa-moon')
          toggle.classList.toggle('fa-sun')
          body.classList.toggle('dark-mode')


          var mode = "white-mode"
          if(toggle.classList.contains("dark-mode")){
               mode = "dark-mode"
          }
          console.log(mode)


          localStorage.setItem("mode", mode)
     
        
    }

}
function random_splash(){
     var i = Math.round(randomNumber(0,2));
     do{
          i = Math.round(randomNumber(0,2)); 
     }while(document.getElementById("img"+i))
     
     document.getElementById("imgslider").innerHTML = '<center><img id="img'+i+'" style="width: 640px; height: 360px;" src="images/splash_'+i+'.png"></center>';
}


function randomNumber(min, max) {
     return Math.random() * (max - min) + min;
 }