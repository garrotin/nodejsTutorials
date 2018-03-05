/**
 * Created by chadroberts on 3/1/18.
 */

'use string';
const fs = require('fs');
const filename = process.argv[2];
if(!filename){
    throw Error('A file to watch must be specified');
}
fs.watch(filename, () => console.log(`File ${filename} Changed!`));
console.log(`Now watching ${filename} for changes....`);
