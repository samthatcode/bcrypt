'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const fccTesting = require('./freeCodeCamp/fcctesting.js');
const app = express();
fccTesting(app);

const saltRounds = 12;
const myPlaintextPassword = 'sUperpassw0rd!';
const someOtherPlaintextPassword = 'pass123';

const bcrypt = require('bcrypt');

//START_SYNC
// Hash a password synchronously
var hash = bcrypt.hashSync(myPlaintextPassword, saltRounds);
console.log('Hashed Password (Sync):', hash);

// Compare a plaintext password with the sync hash
var result = bcrypt.compareSync(myPlaintextPassword, hash);
console.log('Password Match (Sync):', result); // true
//END_SYNC

app.listen(process.env.PORT || 3000, () => {});
