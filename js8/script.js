var cursisten = ["Tom", "Tim", "Els", "Bart"];

for(var teller = 0;teller < cursisten.length;teller++){
    document.getElementById("cursisten").innerHTML += "<li>"+ cursisten[teller] +"</li>";

}