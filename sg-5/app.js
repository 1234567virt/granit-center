window.addEventListener("DOMContentLoaded",init);
function buttomClick(name){
    console.log(name);
}
function init(){
    var button=document.getElementById('abc-button');
    button.addEventListener("click",function(){ 
        buttomClick("Кеша");
    }
);
}