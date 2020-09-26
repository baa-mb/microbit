// An dieser Stelle wird das File System Module geladen
var fs = require('fs');

// Den Inhalt der Textdatei in den Speicher einlesen
//fs.readFile('xalois.txt', 'utf8', function (err, content) {
fs.readFile('alois.txt', 'utf8', function (err, content) {

// sollte ein Error auftreten
// wird der Error ausgeworfen und die App beendet
if (err) throw err;

console.log('Das ist der Inhalt der Textdatei:', content);

});