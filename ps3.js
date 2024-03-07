const express = require('express');
const router = express.Router();

// Route using GET that returns a fixed string
router.get('/fixedString', (req, res) => {
  res.render('response', { string: 'Hey now' });
});

// Route using POST that returns a string and its length
router.post('/stringLength', (req, res) => {
  const { string } = req.body;
  res.render('response', { string, length: string.length });
});

// Route using GET that reads its input parameter from the URL
router.get('/names/:name', (req, res) => {
  const { name } = req.params;
  res.render('response', { name });
});

// After all other route definitions
router.get('*', (req, res) => {
    res.status(404).send('Page not found');
});

module.exports = router;
