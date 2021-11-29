/*
Schrijf een programma die het kleinste gemeen veelvoud van 2 getallen weergeeft.
 Vraag aan de gebruiker de 2 getallen
 Voorbeeld:
    o Getallen 15 en 27
o Weergave op het scherm:
    o Het kleinste gemene veelvoud van 15 en 27 is: 135 */


/*
 Schrijf een programma die de grootst gemene deler van 2 getallen op het scherm
schrijft.
 Vraag aan de gebruiker de 2 getallen
 Voorbeeld:
    o Getallen 75 en 105
o Grootste gemene deler is 15
o Weergave op het scherm:
    o De grootste gemene deler van 105 en 75 is: 15 */

/**functions**/


/**PROGRAMMA**/
let getal1, getal2, kleinste, teller, grootste, ggd;

getal1 = parseInt(prompt("Geef getal 1 in:"));
getal2 = parseInt(prompt("Geef getal 2 in:"));

if(getal1 <= getal2){
    kleinste = getal1;
    grootste = getal2;
}else{
    kleinste = getal2;
    grootste = getal1;
}

for(teller=1;teller <= kleinste; teller++){
    if((grootste % teller== 0) && (kleinste % teller == 0)){
        ggd = teller;
    }
}
console.log(ggd);


