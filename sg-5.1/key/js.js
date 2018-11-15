window.addEventListener("DOMContentLoaded",init);
function randoms(){
    this.massiv=[];
for(var i=0;i<2;i++){
        this.random=Math.round(Math.random(1,2)*100);
        this.massiv.push(this.random);
    }
   return massiv;
}
function positionshot(massiv){
    var massiv=massiv;
    var sheet=document.getElementById('shot');
    sheet.style.left=`${massiv[0]}px`;
    sheet.style.top=`${massiv[1]}px`;
}
function headshot(massiv){
this.massiv=massiv;
var sheet=document.getElementById('shot');
this.massiv2=[];
this.massiv2.push(Math.round(parseInt(sheik.style.left)));
this.massiv2.push(Math.round(parseInt(sheik.style.top)));


if(massiv[0]==massiv2[0] && massiv[1]==massiv[1])
{
  sheet.style.display='none';
  
//console.log('1');
}
else{
    console.log(massiv2);
}
}