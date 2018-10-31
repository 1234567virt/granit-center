// function exit()

// { var exit=confirm("Exit"); 
// if(exit){ window.close();
// }
// }
//exit();
// var name=prompt('Как вас зовут');
// console.log(name);
// var element=document.createElement("span");
// var mytext=document.createTextNode("My текст");
// element.appendChild(mytext);
// document.body.appendChild(element);
// function fibo(x){
//     this.x=x;
//  var massiv=[1,2];
// for(var n=2;n<this.x;n++){
//     massiv.splice(n,0,massiv[massiv.length-1]+massiv[massiv.length-2]);
//  }
//  return massiv;
// }
// function txt(x,z)
// {
// this.init_=function(){
//     this.table=document.createElement("table");
//     for(var t=1;t<=x;t++)
//     {
//         var tr=document.createElement('tr');
       
//       for(var e=1;e<=z;e++)
//        {
//          var td=document.createElement('td');
//          td.appendChild(document.createTextNode(`${t}x${e}=${t*e}`));
//          tr.appendChild(td);
//        }
    
//     this.table.appendChild(tr);
//     }
//     }
//    this.show=function()
//   { 
//   document.body.appendChild(this.table);
//   }
   

// this.init_();
// }

// txte=new txt(10,5);
// txte.show();
// var superGena=document.getElementById("gena");
//var abc=document.getElementsByClassName("abc");
// var newTeg=document.createElement("span");
// var newText=document.createTextNode("свап");
// newTeg.appendChild(newText);
// superGena.appendChild(newTeg);
// console.log(superGena.children);
// console.log(superGena.childNodes);
// for(var i=0; i<abc.length;i++){
// // console.log(abc[i].innerText);
// // Элемент массива HTMLCollection
// abc[i].style.color="white";
// }
//map из объекта массива(Array)
// HTMLCollection.prototype.map=Array.prototype.map;
// abc.map(x=>console.log(x.innerText))
// function kv(x,y,color){
//     this.x=x;
//     this.y=y;
//     this.color=color;
//     this.show=function(){
//         this.newTeg=document.createElement('div');
//         this.newTeg.id='idTeg';
//         document.body.appendChild(this.newTeg);
//         teg=document.getElementById('idTeg');
//         teg.style.background=this.color;
//         teg.style.width=`${this.x}px`;
//         teg.style.height=`${this.y}px`;
     
//     }
// }
// // kv=new kv(100,200,'green');
// // kv.show();
// function circl(id,radius,color){
//     this.id=id;
//     this.radius=radius;
//     this.color=color;
//     this.show=f=>{
//        this.circ=document.getElementById(this.id);
//      this.circ.style.borderRadius=`${this.radius}px`;
//         this.circ.style.background=this.color;
//     }
// }
// // circl=new circl('gena',100,'green');
// // circl.show();
// function treyg(heigt,widht,color){
//     this.color=color;
//     this.heigt=heigt;
//     this.widt=widht;
//     this.show=function(){
        
//         this.tr=document.createElement('div');
//         document.body.appendChild(this.tr);
//         //this.tr.style.height=`${this.heigt}px`;
//         // this.tr.style.widht=`${this.widt}px`;
//         this.tr.style.border=`${this.heigt}px solid transparent`;
       
//         this.tr.style.borderBottom=`${this.widt}px solid green`;
        
//         // this.tr.style.background=this.color;
//     }
//     this.setDirection=function(direction){
//         switch(direction){
//             case 'up':
//             break;
//             case 'right':
//             this.tr.style.transform='rotate(90deg)';
//             break;
//             case 'down':
//             this.tr.style.transform='rotate(180deg)';
//             break;
//             case 'left':
//             this.tr.style.transform='rotate(-91deg)';
//             break;
//         }
//     }
// }
// treyg=new treyg(700,500,'red');
// treyg.show();

// treyg.setDirection('down');
//
var flag=0;
function generatorColor(){
    return '#'+Math.floor(Math.random()*16222715).toString(16);
}
function boxClick(){
  
if(flag==0){
    this.style.backgroundColor='black';
}
if(flag==1){
this.style.borderRadius='10px';
}
if(flag==2){
    this.style.background="linear-gradient(red,orange)";
    }
if(flag==3){
this.style.boxShadow='0 0 10px gray';
}
if(flag==4){
    this.style.borderRadius='50%';
    }
else{

}

flag++;
}
var box=document.getElementById('block');
//подписка на событие
box.addEventListener('click',boxClick);