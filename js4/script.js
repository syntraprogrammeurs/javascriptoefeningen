/** ITERATIES **/
/** WHILE LOOP **/
/*
while(conditie){
    code
}*/
var i = 0;
var txt = "";
while(i <= 10){
    // console.log(i);
    txt = txt + i + ",";
    i++;
}
//console.log(txt.length-1);
console.log(txt.substring(0,txt.length-1));
document.getElementById("resultaat").innerHTML =txt.substring(0,txt.length-1);
/*for(var i=0;i <=10;i++){
    console.log(i);
}*/
