// var str="<h1>Загаловок</h1>";
// var str2="<h2>Загаловок</h2>";
// document.write(str);
// document.write(str2);
// function abc(){
// var str="<div style='width:50px;height:50px'></div>";
// document.write(str);
// }
// abc();
// function kv(width,height,colors){
//     var str="<div style='width:"+width+"px;height:"+height+"px;background-color:"+colors+"'></div>";
//     document.write(str);
// }
//kv(200,90,"red");
// ECMAScript 2015

function generateColor(){
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}
function circle(){
   var  small=Math.random()*100+50;
     small=Math.ceil(small);
    colors=generateColor();
     diametr=small*2;
    var str=`<div style="width:${diametr}px;height:${diametr}px;background-color:${colors};border-radius:${small}px;"></div>`;
    document.write(str);
    setTimeout(circle,1000);
}
//ECMA(200,150,"silver")
// var i=0;
// function showCircle(){
    
//     if(i<20){
//         i++;
// setTimeout(circle,1000);
//     }
// }
//kv(200,150,"red");

////////////////

//Ассинхронный вывод

//setTimeout(function(){kv(200,150,"red");},5000);
//showCircle()

///////////////////

// Анонимные функции

// (function(){console.log("Hello");})
// //Вызов функции
// ();
// (function(name){console.log(`Hello${name}`);})("Кеша");

// setTimeout(function(){console.log("hello wis timeout")},1000);

// функциональное приложение
// var a=function(){console.log("Привет из A");}
// a();
// //Объекты
// var empty={};
// var movie ={
//     name:"Отряд самоубийц",//свойство объекта
//     year:2016//свойство объекта
// };
// console.log(movie);//все свойство объекта
// console.log(movie.year);//свойство объекта year
// console.log(movie["year"]);//свойство объекта year
// var myObject={};
// myObject["myprop"]=5;//myprop - свойство объекта
// myObject.myprop2=10;//myprop2- свойства объекта
// console.log(myObject);
//this -это указатель на тек. объект
// var kesha={
//     name:"Kеша",
//     whatIsYouName:function(){
//         console.log(`Меня зовут;${this.name}`);
//     },

// skolkoTebeLet:function(){
//     console.log(`Мне ${this.vozrast} лет`);
// }
// };
// // kesha.whatIsYouName();
// kesha.whatIsYouName();
// kesha.setAge=function (age){
//     this.vozrast=age;
// }
// kesha.setAge(18);
// kesha.skolkoTebeLet();
// console.log(window);
// //оборачивание
// &function(){
//     var i = "Тузик";
// }
 var citi=["Москва","Анапа","Созоново","Сочи"];
// console.log("Количество",citi.length);
// console.log(citi[0]);
// console.log(citi[3]);
// console.log(citi[5]);
// console.log(citi[2]);
// //Добавление
// citi.push("Саратов");

// console.log(citi);
// var massiv=[];

// for(var ch=50; ch<=150;ch++){
//     if(ch%2!=0){
// massiv.push(ch);

// console.log("Нечетное", massiv);
//     }
//     else{
//         console.log("Четное",ch);
//     }

// } Палиндромы
// function Palindrom(num){
// var oldNum=num;
// var newNum=0;
// while(num>0){
//     newNum=newNum * 10 +num % 10;
// num=parseInt(num / 10);
// }
// if(oldNum==newNum){
//     return true;
// }
// else{
//     return false;
// }
// }
// var Nums=[];
// for(var i=1;i<1000;i++){
//     if(Palindrom(i)){
//     Nums.push(i);
//     }
// }//Перебор масива с помощью функции
// citi.map(function(tuzik){console.log(tuzik)});
// // Стрелочные функции в map
// // f-это каждый элемент массива
// citi.map(f=>console.log(f));
// document.map(f=>console.log(f));
function oldFunction(num){
    if(num %2  !=0){
        return true;
    }
    return false;
}
// var number1=[1,2,3,4,5,6,7,8];
// var number2=number1.map(f=>f * f);
// var number3=number2.filter(oldFunction);
function range(count){
    var array=[];
    for(var ch=0; ch<count;ch++){
    array.push(ch);
    }
    return array;
}

// console.log(range(100).filter(oldFunction)); Функции конструкторы New
function Bird(n)
{
    this.name=n;
    this.whatIsYourName=function(){
        console.log(`Меня зовут ${this.name}`)
    }
}

var kesha= new Bird("Кеша");
var dany=new Bird("Даня");
// console.log(kesha);
// console.log(dany);
//kesha.whatIsYourName("Кеша");

function shows(x,y){
this.x=x;
this.y=y;
this.color=generateColor();
this.show=function(){
var kv=`<div style='width:${this.x}px;height:${this.y}px;background-color:${this.color}'></div>`;
document.write(kv);
}
}
 var pr=new shows(200,100);
 //pr.show();
 function shows3d(x,y,z,d){
     this.z=z;
     this.d=d;
     this.x=x;
     this.y=y;
     this.color=generateColor();
     this.show3d=function(){
         var d3=`<div style='width:${this.x}px;height:${this.y}px;background-color:red;transform:skew(${this.z}deg,${this.d}deg);border:1px solid black;
         '></div><div style='width:${this.x}px;height:${this.y}px;border:1px solid black;transform:skew(${this.z}deg,${this.d}deg)'></div><div style='width:${this.x}px;height:${this.y}px;background-color:red;transform:skew(${this.z}deg,${this.d}deg);margin-top:-10px;border:1px solid black'></div>`;
         document.write(d3);
        }
 }
// var lp=new shows(200,100);
// lp.show();
// range(200).map(function(){
//     dv=new shows(200,50);
//     dv.show();
// })
range(200).map(x=>new shows(100,200)).map(x=>x.show());
