function timeot(){
    var doc=document.getElementById("fon");
    doc.style.opacity=".7px";
    doc.style.background="silver";
    doc.style.position="absolute";
    doc.style.transition="all 3s";     

}
function timeotover(){
    var doc=document.getElementById("fon");
   
    doc.style.background="white";
    doc.style.position="relative";
    doc.style.transition="all 3s";     

}
setTimeout(timeot,3001);
setTimeout(timeotover,5000);