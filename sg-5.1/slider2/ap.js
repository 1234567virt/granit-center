window.addEventListener("DOMContentLoaded",init);
function closeLightbox(){
    create.innerHTML="";
   txt.style.display='none';
   slider.style.display='block';
   container.style.display='block';
   create.style.display='none';
    txt.removeEventListener("click",closeLightbox);
   
  }
function createimg(){
   create=document.getElementById('bigdata');
   slider=document.getElementById('slider');
    txt=document.createElement('img');
    images=document.getElementsByClassName('my-images');
     
     txt.src=images[i].src;
     txt.style.width='400px';
     txt.style.height='400px';
     txt.style.position='absolute';
     txt.style.top='0px';
     txt.style.left='0px';
     txt.style.right='0px';
     txt.style.bottom='0px';
     txt.style.margin='auto';
   
   txt.style.display='block';
   slider.style.display='none';
   create.style.display='block';

   create.appendChild(txt);
    create.addEventListener('click',closeLightbox);
      
}
var container,
images;
position=0;
var i=0;

function init(){
    //HTMLElement

  container=document.getElementById("container");
  container.style.left="0";
 function slice(){
    var curPos=container.style.left;
    if(images.length-1>i){
     
       container.addEventListener('click',createimg);
     
    
     container.style.left=(parseInt(curPos)-200)+"px"; 
    
     setTimeout(slice,3000);
     i++;  
    }
   
    else{
i=0;
container.style.left=0;

setTimeout(slice,3000);
    }

 }
    //HTMLCollection
    images=document.getElementsByClassName('my-images');

slice();

    }