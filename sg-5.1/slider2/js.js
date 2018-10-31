window.addEventListener("DOMContentLoaded",init);

function createimg(){
  
    txt=document.createElement('img');
    // txt.className='bigdata';
     txt.src=images[i].src;
     txt.style.width='400px';
     
     txt.style.height='400px';
     txt.style.position='absolute';
     txt.style.top='0px';
     txt.style.left='0px';
     txt.style.right='0px';
     txt.style.bottom='0px';
   txt.style.margin='auto';
    document.body.appendChild(txt);
      
}
function slice(){
    var curPos=container.style.left;
    if(images.length>i){
     
       container.addEventListener('click',createimg);
    
     container.style.left=(parseInt(curPos)-200)+"px"; 
    
     setTimeout(slice,3000);
     i++;  
    }
   
    else{
i=1;
container.style.left=0;
setTimeout(slice,3000);
    }

 }
var container,
images;
position=0;
var i=0;
var create;
var bigdata;
function init(){
    //HTMLElement

  container=document.getElementById("container");
  container.style.left="0";
//   bigdata=document.getElementsByClassName("bigdata");
    //HTMLCollection
    images=document.getElementsByClassName('my-images');
    images[i].addEventListener('click',function(){
slice();

  });
  }
