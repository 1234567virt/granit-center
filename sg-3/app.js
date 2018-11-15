// function pr(x,y){
//     this.x=x;
//     this.y=y;
//     this.visio=function(){
//         var visios=`<div style='width:${this.x}px;height:${this.y}px;background-color:green'></div>`
//     document.write(visios);
//     }
// }

// function circl(rad){
//     this.radius=rad;
//     this.circle=function(){
//         var visios=`<div style='width:${this.radius}px;height:${this.radius}px;background-color:green;border-radius:${this.radius}px'></div>`
//     document.write(visios);
//     }
// }
// function treug(x,y){
//     this.x=x;
//     this.y=y;
   
//     this.treugs=function(){
//         var visios=`<div style='border:${this.x}px solid transparent;border-bottom:${this.y}px solid black;'></div>`;
//         document.write(visios);  
// }
// }
// pr=new treug(100,500);
// pr.treugs();
// function pr(x,y,z,g){
//     this.x=x;
//     this.y=y;
//     this.z=z;
//     this.g=g;
// this.show=function(){
//     var vis=`<div><h1>${this.}</h1>`
// }
// }
// function crug(x){
//     this.x.
// }
// function aprogres(st,d){
//     this.st=st;
//     this.d=d;
//     this.result=function(){
//         var itog=0;
//     for(var i=0;i<this.st;i++){
//         itog=itog+this.d;
//         document.write(itog);
//     }
// }
// }
// progress=new aprogres(11,3);
// progress.result();
// function Bird(){
// this.whatIsYourName=function(){
//     console.log(`меня зовут ${this.name}`);
// }
// }
// // Расширение конструктора
// Bird.prototype.setName=function(n){
//     this.name=n;
// }


// Parrot.prototype=new Bird();
// function Parrot(){
//     this.canParrot=true;
// }
// var kesha=new Parrot();
// kesha.setName("Кеша");
// console.log(kesha);
// kesha.whatIsYourName();
// function ml(aname,kg,age){
// this.aname=aname;
// this.kg=kg;
// this.age=age;
// this.show=function(){console.log(`Вес:${kg},Возраст${this.age},Имя:${this.aname}`);
// }
// }

// function Dog(zvukk){
// this.midi=zvukk;
// this.hifi=function(){console.log(`голос:${this.midi}`);
// }
// }
// Dog.prototype=new ml("Бобик",11,8);

// function Cat(xet){
//     this.xet=xet;
//     this.hi=function(){console.log(`Цель:${this.xet}`);
//     }
//     }
//    Cat.prototype=new ml("Волик",11,8);


//                var Dogs=new Dog("Гав");
//                Dogs.show();
             
//                Dogs.hifi();

//                var Cats=new Cat("Ловля");
//                Cats.show();
             
//                Cats.hi();
// class Tovar{
//     constructor(name,price,manufacture){
//         this.name=name;
//         this.price=price;
//         this.manufacture=manufacture;
//     }
  
// }
// //var kesha=new Tovar("Кеша",1000,"china");
// class SoftTovar extends Tovar{
//     constructor(name,price,manufacture){
//         super(name,price,manufacture);
//         this.isMankey=true;
//     }
//     setWeight(yes){
//         this.weight=yes;
//     }
// }
// var kesha=new SoftTovar("Плюшевый мишка",1000,"China");
// kesha.setWeight("100 г.");
// console.log(kesha);
// function ABC(){
//     return 5;
// }
// var a=ABC();
//////////////////////////
// array=[];
//array=new Array();

//Massiv
//  var array1=[1,2,3,4,5];
// // var str=array1.join(";");//Склеиваня
// // console.log(str);

// //////////////////
// // func={};
// // func=new Object();
// ////////////////////////
// //Формирования нового  массива array2 на основе старого array  с 1 по 3 индексы  
// // var array2=array2.slice(1,3);
// // console.log(array2);
// ////////////////////////////////
// var array3=array1.splice(0,1);//[1]
// //array [2,3,4,5]
// console.log(array1);;
// array1.splice(0,0,123,345);//параметр 1-с каким индексом работать ,параметр 2-удаления ноль элементов,параметр 3-добавленые элементы
//[012,345,2,3,4,5]
// var n1=1;
// var itog=1;
// var massiv=[];
// for(var n=0;n<1000;n++){
// //var n2=itog+itog;
// var itog=itog+n1;
//  var n1=itog-n1;


// massiv.splice(n,0,itog);
// }

//console.log(massiv);
// function fibo(){
//   var massiv=[1,2];
//   var massiv2=[];
//   // itog=0;
//   this.it=f=>{

//     for(var n=2;n<100;n++){

//      // this.it=massiv[massiv.length-1]+massiv[massiv.length-2];
  
//     massiv.splice(n,0,massiv[massiv.length-1]+massiv[massiv.length-2]);
//    //massiv.push(massiv[massiv.length-1]+massiv[massiv.length-2]);
     
//     }
    
//     massiv2=massiv.filter(x=>{ return x>500 && x%2!=0});
//     return massiv2; 
// } 
// }
// fibo=new fibo();
// console.log(fibo.it());

// }
// f=new fibo();
// console.log(f.it());
/////////////////////////////////////////////////////////////////////////////////////////
// function generateColor(){
//   return "#" + Math.floor(Math.random() * 16777215).toString(16);
// }
// function circle(radius,margin){
//   this.radius=radius;
//   this.margin=margin;
//   //var array=[];
//   c='.';
//     this.show=f=>{
//     for(var i=0;i<this.radius;i++){
//       c=c+'.';
//  this.color=generateColor();
//       if(i<50){
//       this.margin=this.margin-2;
//     }
  
//     document.write(` <div style='margin-right:${this.margin}px;margin-top:-10px;margin-left:${this.margin}px;color:${this.color};'>${c}</div>`);

//     }
  
 
    
//   }
// }
// circ=new circle(100,500);
// circ.show();
////////////////////////////////////////////////////////////////////////////////////////////////////////////////console.log('------------------------------------');
// function fibo(){
//  arr=[1,2];
 
//  var n2;

 

//   this.fibo=f=>{
//   for(var i=2;i<100;i++){

//     if(1000>n2){
//    radius=random();
//     color=generateColor();
//     document.write(`<div style="border-radius:${radius}px;width:${n2}px;background-color:${color};height:${radius}px;padding:15px">${n2}</div>`);

//      setTimeout(fibo(),3000);
//   }
// n2=arr[arr.length-1]+arr[arr.length-2];
//   arr.push(n2);
// }
// return arr;
//   }

// }




//////////////////////////////////////////////////////////////////////////
// function random(){
//   radius=Math.random()*100;
//   radius=parseInt(radius); 
//   return radius;
// }
//  function fi(arr){
//    arr=this.arr;
//   arr.push(arr[arr.length-1]+arr[arr.length-2]);
  
//  }
// arr=[1,2];
// n2=1;
// function fibo(){

//   if(10000>n2){
   
//   fi(arr);
  
//        radius=random();
//       color=generateColor();
//       console.log(arr);

//   setTimeout(fibo,3000);
//   }
// }

// fibo();
// function circle(){
//   radius=Math.random()*100;
//   radius=parseInt(radius);
//   //fibo=fibo.add();
//   color=generateColor();
//   this.circ=function(){
//     document.write(`<div style="border-radius:${radius}px;width:${radius}px;background-color:${color};height:${radius}px"></div>`);
//   }
// }

//////////////////////////////////////////////////////////////////////////////
