var data = [1965, "Tim",1980,1973,"designer", "developer"];
//var data = new Array();
for(var i=0;i < data.length;i++){
    if(typeof data[i] ==="string") continue;
    console.log(data[i]);
}
/*for(var i=0;i < data.length;i++){
    if(typeof data[i] ==="string") break;
    console.log(data[i]);
}*/

