/*DECLARATIE VAN VARIABELEN*/
var voorNaam = "Tom";
var familieNaam= "Vanhoutte";
var functie = "Docent";
var geboorteJaar = 1973;
var gehuwd = true;
/*MODULE CODERING*/
console.log(voorNaam);
console.log(typeof(voorNaam));
console.log(typeof(geboorteJaar));
console.log(typeof(gehuwd));
/*SAMENVOEGEN*/
console.log(voorNaam, familieNaam);
console.log(voorNaam + " " + familieNaam + " is een " + functie);
console.log(voorNaam.concat(" ", familieNaam).toUpperCase());
console.log(functie.length);

let str = "leraar";
console.log(`${str} ${str.length}`);
console.log(str + " " + str.length);

/*var mijnNaam = prompt("Geef uw naam in:");
console.log(mijnNaam);*/
/*var getal1 = parseInt(prompt("Geef getal 1 in"));
var getal2 = parseInt(prompt("Geef getal 2 in"));
console.log(isNaN(getal1));
console.log(getal1 + getal2);*/

var x = 5;
//x = x + 1;
x+=1;
x++;
console.log(x);

var y = 6;
x= x + y;
x+=y;

/*OPERATOREN LOGISCHE
* && of AND = resultaat true als beide waar zijn
* || of OR = resultaat true als EEN VAN BEIDE OF BEIDE waar is.
* ! tegengestelde
* != verschillend van
*
*
* */
console.log(1 === "1"); //false
console.log(1 == "1"); //true

