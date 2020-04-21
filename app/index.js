const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.listen(port, () => console.log('Listening at http://localhost:' + port));

app.get('/fibonacci', (req, res) => {
   let number = +req.query.number //convert req.query.number from string to number

   if(number <= 5 || number >= 100){
      res.json({error: "please provide a number between 5 and 100"})
      return
   }
  
   let fibonacci = number
   //calculate the fibonacci goodness
   
   res.json({result: fibonacci})


});
