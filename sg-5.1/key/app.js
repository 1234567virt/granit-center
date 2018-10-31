window.addEventListener("DOMContentLoaded",init);
function keycode(id){
  
    this.id=id.keyCode;
    this.go=function (){
        switch(this.id){
           case 37:
           sheik.style.left=(parseInt(sheik.style.left)-50)+'px';
           break;
           case 38:  
           sheik.style.top= (parseInt(sheik.style.top)-50)+'px';
           break;
           case 39:
           sheik.style.left=(parseInt(sheik.style.left)+50)+'px';  
           break;
           case 40:
           sheik.style.top=(parseInt(sheik.style.top)+50)+'px'; 
           break;
        }
    }
}

function init(){
  //  var sharp=document.getElementById('sharp');
   var sheik=document.getElementById('sheik');
   
   function csc(sheik){
   var tchk=document.getElementById('tchk');
   var  gets=tchk.getBoundingClientRect();
   if( parseInt(sheik.style.top)==gets.top && parseInt(sheik.style.left)==gets.left){
       sheik.style.background='white';
   }
}
    csc(sheik);
sheik.style.left=0;
sheik.style.top=0;

window.addEventListener('keyup',function(sharp){
keys=new keycode(sharp);
keys.go();

});
}
