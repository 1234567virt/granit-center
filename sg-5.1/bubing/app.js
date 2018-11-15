window.addEventListener("DOMContentLoaded",init);

function init(){
    var a=document.getElementById('a');
    a.addEventListener('click',function(tuzik){
        tuzik.stopPropagation();//stop всплытия события
        console.log("Мы кликнули a");
    });

    var b=document.getElementById('b');
  
    b.addEventListener('click',function(tuzik){
        tuzik.stopPropagation();//stop всплытия события
        console.log("Мы кликнули b");
    });
    var c=document.getElementById('c');
    c.addEventListener('click',function(tuzik){
        tuzik.stopPropagation();//stop всплытия события
        console.log("Мы кликнули c");
    });
}