var cursisten = ["Tom", "Tim","Bart","Els"];
document.writeln(cursisten[1]);
document.writeln(cursisten.length);
cursisten[0] = "Jelle";
document.writeln(cursisten);

cursisten.push("Marieke");
document.writeln(cursisten);

cursisten.unshift("Thomas");
document.writeln(cursisten);

cursisten.pop();
document.writeln(cursisten);

cursisten.shift();
document.writeln(cursisten);

document.writeln(cursisten.indexOf("Tim"));

document.writeln(cursisten.reverse());
document.writeln(cursisten);
document.writeln(cursisten.slice(1,3));

document.writeln(cursisten.sort());
document.writeln(cursisten);
document.writeln(cursisten.splice(2,2));

document.writeln(cursisten.toString());
document.writeln(cursisten[0]);

