const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.listen(port, () => console.log('Listening at http://localhost:' + port));

app.get('/fibonacci', (req, res) => {
   res.json([
      {
         id: 1,
         body: 'Some Fibonacci goodness',
      },
      {
         id: 2,
         body: 'Some more Fibonacci goodness',
      },
      {
         id: 3,
         body: 'All of the Fibonacci goodness',
      },
   ]);
});
