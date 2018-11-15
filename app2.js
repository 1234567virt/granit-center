
//idfision('id1');
// var glelement=document.getElementById('sng');
// var glelement2=document.getElementById('sng2');
//var element=document.getElementById('myShowBlock');
//var visible = true;

function showFun(id) {
    this.id=id;
    var element=document.getElementById(this.id);
    if(element.style.display=='none'){
element.style.display='inline-block';

if(element.id=='id2'){
this.im=document.createElement("img");
this.im.src='1.jpg';


element.appendChild(this.im);
document.images[0].style.border='1px solid red';
document.images[0].style.marginBottom='-5px';

}

}
else{
    element.style.display='none';
   element.innerHTML='';
}

    
}

function finds(id){
if(id==1){
    document.images[0].src='2.jpg';
}
else{
    document.images[0].src='1.jpg';
}
}