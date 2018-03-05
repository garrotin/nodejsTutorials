/**
 * Created by chadroberts on 3/1/18.
 */
'use strict';

const fs = require('fs');
fs.writeFile('target.txt', 'hello world', (err) => {
    if(err){
        throw err;
    }
    console.log('File Saved!');
});


