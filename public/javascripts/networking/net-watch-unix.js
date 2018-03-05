/**
 * Created by chadroberts on 3/5/18.
 */
'use strict'
const fs = require('fs');
const net = require('net');
const filename = process.argv[2];

if(!filename){
    throw Error('Error: No filename specified');
}

net.createServer(connection => {
    //Reporting
    console.log('Subscriber connected');
connection.write(`Now watching ${filename} for changes ...\n`);
//watcher setup
const watcher = fs.watch(filename, () => connection.write(`File changed ${new Date()}\n`));

//cleanup
connection.on('close', () => {
    console.log('Subscriber Disconnected');
    console.log('simple message');
watcher.close();
});
}).listen('/tmp/watcher.sock', () => console.log('Listening for Subscribers...'));