/*
Schrijf een programma die het kleinste gemeen veelvoud van 2 getallen weergeeft.
 Vraag aan de gebruiker de 2 getallen
 Voorbeeld:
    o Getallen 15 en 27
o Weergave op het scherm:
    o Het kleinste gemene veelvoud van 15 en 27 is: 135 */



/*15x27 = 405

ggd(15x27) = 3

405/3 = 135*/

/**ggd**/
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
/**kgv**/
let getal3, getal4, kgv;
getal3 = parseInt(prompt("Geef getal 3 in:"));
getal4 = parseInt(prompt("Geef getal 4 in:"));
kgv = (getal3*getal4)/ggd;
console.log(kgv);




