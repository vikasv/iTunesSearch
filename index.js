'use strict';

const express = require('express');
const app = express();

app.use('/static', express.static(`${__dirname}/static`));

app.get('/', require('./src/pages/home'));


app.listen(3000, () => console.log('Server listening to port 3000'));