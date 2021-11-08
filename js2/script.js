var getal1 = prompt("Geef een eerste getal in:");
var getal2 = prompt("Geef een tweede getal in:");
var onderwijs = "VDAB";

/** LANGE NOTATIE **/
if(getal1>getal2){
    console.log(getal1 + " is groter dan " + getal2);
}else if(getal1 === getal2){
    console.log(getal1 + " is gelijk aan " + getal2);
} else{
    console.log(getal2 + " is groter dan " + getal1);
}
/** SHORTHAND NOTATIE **/
getal1>getal2 ? console.log(getal1 + " is groter dan " + getal2):console.log(getal2 + " is groter dan " + getal1);

/** MEERVOUDIGE SELECTIE**/
/** SWITCH **/
switch(onderwijs){
    case "VDAB":
        console.log("Cursus gegeven door VDAB");
        break;
    case "SYNTRA":
        console.log("Cursus gegeven door SYNTRA");
        break;
    case "CVO":
        console.log("Cursus gegeven door CVO");
        break;
    default:
        console.log("Cursus gegeven door een andere instelling");
}
