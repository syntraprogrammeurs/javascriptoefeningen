let tafel = parseInt(prompt("Geef de tafel in:"));
let eindGetal = parseInt(prompt("Geef een eindgetal in:"));
var resultaat = "";
var counter = 0;
for(let i=1;i <= eindGetal;i++){
    resultaat += tafel + " x " +  i  + " = " + tafel*i + ", ";
    counter++;
    if((counter == 3) || ((counter < 3) && (i==eindGetal))){
        console.log(resultaat.substr(0, resultaat.length-2));
        counter = 0;
        resultaat = "";
    }

    //1 x 1 = 1  tafel x i = ?
   // 1 x 2 = 2
    //1 x 3 = 3
}
