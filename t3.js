// An dieser Stelle wird das File System Module geladen
var fs = require('fs');

// Den Inhalt der Textdatei in den Speicher einlesen
//fs.readFile('xalois.txt', 'utf8', function (err, content) {
fs.writeFile('bachinger.txt', 'Das ist der Text', function (err) {
// sollte ein Error auftreten
// wird der Error ausgeworfen und die App beendet
if (err)
console.log('Error beim schreiben der Datei:', err);
else
console.log('Datei erstellt.');

});