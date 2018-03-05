/**
 * Created by chadroberts on 3/1/18.
 */

'use strict';
const fs = require('fs');
fs.readFile('target.txt', (err, data) => {
    if(err){
        throw err;
    }
    console.log(data.toString());
});