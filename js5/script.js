/*BUILT IN FUNCTIONS*/
var txt = "Wij ZIJN full stack developers";
document.writeln(txt.toUpperCase());
document.writeln(txt.toLowerCase());
document.writeln(txt.charAt(5));
document.writeln(txt.substring(4,5));
document.writeln(txt.substr(4,5));
var i = 0;
var res = "";
while(i < txt.length){
    if(i%2==0){
        res = res + txt.substring(i,i+1).toUpperCase();
    }else{
        res = res + txt.substring(i,i+1).toLowerCase();
    }
    i++;
}
document.writeln(res);
document.writeln(txt.indexOf('x'));
document.writeln(txt.lastIndexOf('e'));
document.writeln(txt.replace('e', 'a'));

/*console.time("response in");
alert("Click to continue");
console.timeEnd("response in");
alert("one more time please");
console.timeEnd("response in");*/

var elements = document.getElementsByTagName('*');
console.time('Loop time');
for(var i=0; i < 15000;i++){
    for(var j=0,length = elements.length; j < length; j++){
        // nothing t to do ...
    }
}
console.timeEnd('Loop time');

