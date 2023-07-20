
window.onload = function(){
     if(localStorage.getItem("mode") == "dark-mode"){
          
          var  toggle = document.getElementById('togglemode'),
          body = document.querySelector('body')

          toggle.classList.toggle('transitions')
          body.classList.toggle('transitions')

          toggle.classList.toggle('dark-mode')
          toggle.classList.toggle('fa-moon')
          toggle.classList.toggle('fa-sun')
          body.classList.toggle('dark-mode')


          
     }
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
