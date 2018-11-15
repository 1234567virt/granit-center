window.addEventListener("DOMContentLoaded",init);

//function  SuperButtom(name){
  //  that=this;//указатель на объект кнопки
   // this.name=name;
   // this.show=function(){
     //   for(var i=0;1500>i;i++){
     //   document.body.appendChild(this.buttonE1);
    ///    }
   // }
    // this.attachEvents_=function(){
    //     this.buttonE1.addEventListener('click',this.buttomClick_);
    // }
// this.buttomClick_=function(){
//     console.log(that.name);
//     console.log(this,that);
// }
 //this.init_=function(){
   // this.buttonE1=document.createElement('div');
   //**
  // this.buttonE1.className='abc-button';
   //  var textNode=document.createTextNode(this.name);
  //   this.buttonE1.appendChild(textNode);
     
    // this.attachEvents_();//вкл событие
  //  }

// this.init_();

//}

//function range(n){
 //   var a=[];
 //   for(var i=1;i<n;i++){
 //       a.push(i);
 //   }
 //   return a;
//}
// 
function init(){
    var kesha=document.getElementById('kesha');
   // kesha.addEventListener("keyup",function(){ console.log("Бам");});
 
  var  message=document.getElementById('messagesbox');
   kesha.addEventListener('keyup',function(tuzik){
    console.log(tuzik.keyCode);
    if(tuzik.keyCode==13){
     var textElement=document.createElement('p');
     textElement.appendChild(document.createTextNode(this.value));
     
     message.appendChild(textElement);
     this.value="";
    }
   });
  // console.log(this.value);
    //keyup-отпустили
//keydown-нажали клавишу
//keypress- держим

//range(1500).filter(x => x % 2 == 1).map(x => (new SuperButtom(x)).show());
// for(var i=0;1500>i;i++){
//     if(i%2==1){
//        b=new SuperButtom(i);
//        b.show();
//     }
// }
}

