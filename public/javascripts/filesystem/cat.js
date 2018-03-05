/**
 * Created by chadroberts on 3/1/18.
 */
'use strict';
require('fs').createReadStream(process.argv[2]).pipe(process.stdout);