

const image_array = [[0]]


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

function setup_splash(str, amount, id){
     var arr = image_array[id];
     arr[0] = 0;
     arr[1] = str;
     arr[2] = true;
     var image_order = [];
     for(i = 0; i < amount; i++){
          image_order[i] = i;
     }
     
     image_order = shuffle_array(image_order);
     
     for(i = 0; i < amount; i++){
          arr[i+3] = image_order[i];
     }
     
     image_array[id] = arr;


}
function get_splash(str, amount,id,rearrange){

     var arr = image_array[id]
     var current = arr[0]+1;
     if(arr[2] == undefined){
          setup_splash(str, amount, id)
     }
     if(current >= arr.length-3){
          if(rearrange){
               setup_splash(str, amount, id)
          }

          current = 0;
     }
     
     
     var str = arr[1];
     

     arr[0] = current;
     var img = arr[current+3]
     
     document.getElementById("imgslider").innerHTML = '<img data-aos="flip-up" id="img.'+id+"."+current+'" src="images/'+str+img+'.png">';

     image_array[id] = arr;
}

function shuffle_array(array) {
     for (let i = array.length - 1; i > 0; i--) {
         const j = Math.floor(Math.random() * (i + 1));
         [array[i], array[j]] = [array[j], array[i]];
     }

     return array;
 }




function randomNumber(min, max) {
     return Math.random() * (max - min) + min;
 }







 