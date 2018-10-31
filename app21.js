// var i=0;
// while(i<5){

// i++;
// console.log(i);
// }
// var age=prompt("Сколько вам лет");
// if(age<15){
//     console.log(" воспрещен");
// }
// else if(age<18){
//     console.log("Мозоли не натри");
// }
// else{
//     console.log("Вход воспрещен");
// }
// var car="Audi";
// switch(car){
//     case "BMW":
//     console.log("Джихад мобиль");
//     break;
//     case "Audi":
//     console.log("Отлична тачка");
//     break;
//     default:
//     console.log("Мобиль на 5");

// // }
// function abc(x,y,z){
//     return x*y*z;
  
// }
// //Вызов
// var result=abc(10,15,20);
// // Вызов

// console.log(result);
// function result(x,y)
// {
//     for (i=x;i<=y;i++){
//        return i;
//     }
// }
// // console.log(result(1,9));
// function result(a,b){
//     for(i=a;i<b;i++){
//         if(i%3==0){
//             console.log(i);
//         }
//         else{
//             alert(i+"Не");
//         }
//     }
// }

// function myFunc()
//     {
//         console.log("Вызваниа функция 1") ; 
//         myFunc2();
//    }


// function myFunc2()
//     {
//         console.log("Вызваниа функция 2") ; 
      
//    }

// function a(c){
//     console.log("Привет из А");
//     c();
// }
// var b=function(){
//     console.log("Привет из В!");
// }
// a(b);
// Асинхроное выполнения кода
// function kesha(){
//     console.log("hello kesha!!!");
// }
// setTimeout(kesha,3000);
// console.log("hello Gena!!!");
// var i=1;
// function myFunc(){//Рекурс
//     console.log(i);
//     if(i<=100){
//     i++;
//     setTimeout(myFunc,400)
// }
// }
// myFunc();
// setTimeout(function(){console.log("hello")},3030)
// document.write("<h3>\"Загаловок\"</h3>")
function rects(wids,heig){
    var str="<div style=\"width:"+wids+"px; height:"+heig+"px; background:red;\"";
    document.write(str);
}
//rects(100,200);
function result() {
    for(var i=0;i<=200;i++){
    var rad =Math.random(50,150)*100;
  var rad=Math.ceil(rad);
  var colorrandom =Math.random(100,200)*1000;
  var colorrandom=Math.ceil(colorrandom);
  colors= colorrandom+""+colorrandom+""+colorrandom-i;
  
  colors=rad+""+rad+""+rad-i;
  

 
        var str="<div style=\"width:"+rad+"px; height:"+rad+"px;border-radius:"+rad+"px ;background:#"+colors+";\"";
document.write(str+"></div>");    
}

    
    console.log(colorrandom);

}
result();