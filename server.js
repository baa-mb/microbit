// express und http Module importieren. Sie sind dazu da, die HTML-Dateien
// aus dem Ordner "public" zu veröffentlichen.

const os = require('os');
var freemem = os.freemem();

var microbit = require('microbit-web-bluetooth');
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var port = 3000;

// Mit diesem Kommando starten wir den Webserver.
server.listen(port, function () {
    // Wir geben einen Hinweis aus, dass der Webserer läuft.
    console.log('Webserver läuft und hört auf Port %d %d %s', port,freemem,os.hostname());
    console.log(os.hostname(), port,freemem,__dirname);
    //alert(2);
});

// Hier teilen wir express mit, dass die öffentlichen HTML-Dateien
// im Ordner "public" zu finden sind.
app.use(express.static(__dirname + '/public'));

// Fertig. Wir haben unseren ersten, eigenen Webserver programmiert :-)

