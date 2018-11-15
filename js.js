var arr=[2,5,3];
arr.map(function(y){
    for(var x=1;3>x;x++){
 if(y>arr[x]){
arr.splice(x,0,y);
 }
    }
}
);

console.log(arr);