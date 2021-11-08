var ster = "";

for(var i=0; i < 5;i++){

    ster = ster + "*";
    console.log(ster);

}
console.log(ster);
for(var i=1; i < 5;i++){
    console.log(ster.substring(0,ster.length-i));
}