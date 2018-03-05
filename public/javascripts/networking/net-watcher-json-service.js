/**
 * Created by chadroberts on 3/5/18.
 */
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
//connection.write(`Now watching ${filename} for changes ...\n`);
connection.write(JSON.stringify({type: 'watching', file: filename}) + '\n');
//watcher setup
const watcher = fs.watch(filename, () => connection.write(JSON.stringify({type: 'changed', timestamp: Date.now()}) + '\n'));

//cleanup
connection.on('close', () => {
    console.log('Subscriber Disconnected');
watcher.close();
});
}).listen(60300, () => console.log('Listening for Subscribers...'));