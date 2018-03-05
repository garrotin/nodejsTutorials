/**
 * Created by chadroberts on 3/1/18.
 */

'use string';
const fs = require('fs');
fs.watch('target.txt', () => console.log('File Changed!'));
console.log('Now watching target.txt for changes....');

