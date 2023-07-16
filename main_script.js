function mode(){
   var  toggle = document.getElementById('togglemode'),
        body = document.querySelector('body')
   toggle.onclick = function(){
        toggle.classList.toggle('dark-mode')
        body.classList.toggle('dark-mode')
    }

}