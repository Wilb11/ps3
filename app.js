const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

// Setup body-parser middleware to handle form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Setup view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Import and use the ps3 router
// const ps3Router = require('.routes/ps3.js');
const ps3Router = require('C:/Users/Wilbert Limson/Desktop/CS412PS2/ps3.js');

app.use('/ps3.js', ps3Router);

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});

  
