const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.send('Haldo!');
  });

  app.get('/echo', (req, res) => {
    const responseText = `Here are some details of your request:
      Base URL: ${req.baseUrl}
      Host: ${req.hostname}
      Path: ${req.path}
      Method: ${req.method}
      Url: ${req.originalUrl}
      Params: ${req.params}
    `;
    res.send(responseText);
  });


  app.get('/greetings', (req, res) => {
    //1. get values from the request
    const name = req.query.name;
    const race = req.query.race;
  
    //2. validate the values
    if(!name) {
      //3. name was not provided
      return res.status(400).send('Please provide a name');
    }
  
    if(!race) {
      //3. race was not provided
      return res.status(400).send('Please provide a race');
    }
  
    //4. and 5. both name and race are valid so do the processing.
    const greeting = `Hail and well met, ${name} the ${race}! welcome to our kingdom.`;
  
    //6. send the response 
    res.send(greeting);
  });





  app.get('/sum', (req, res) => {
    //1. get values from the request
    const a = req.query.a;
    const b = req.query.b;

    const aNum = Number(a);
    const bNum = Number(b);
  
    //2. validate the values
    if(!a) {
      //3. A was not provided
      return res.status(400).send('Please provide the first number');
    }
  
    if(!b) {
      //3. B was not provided
      return res.status(400).send('Please provide the second number');
    }
  
    //4. and 5. both a and b are valid so do the processing.
    const answer = `${a} + ${b} = ${aNum + bNum }`;
  
    //6. send the response 
    res.send(answer);
  });



  app.get('/cipher', (req, res) => {
    //1. get values from the request
    const text = req.query.text;
    const shift = req.query.shift;

    const charArray = text.split('');
    
    let arrayChar = [];
    
    // 2. validate the values
    if(!text) {
      //3. A was not provided
      return res.status(400).send('Please provide the text');
    }
  
    if(!shift) {
      //3. B was not provided
      return res.status(400).send('Please provide shift number');
    }
    
    // for (i = 0; i = charArray.length - 1; i++) {
    //    arrayChar.push(charArray[i].charCodeAt(0))
    // }
    //4. and 5. both a and b are valid so do the processing.
    // const answer = `${a} + ${b} = ${aNum + bNum }`;
  
    //6. send the response 
    res.send(shift);
  });




  app.get('/queryViewer', (req, res) => {
    console.log(req.query);
    res.end(); //do not send any data back to the client
  });

  app.get('/burgers', (req, res) => {
    res.send('We have juicy cheese burgers!');
  });

  app.get('/pizza', (req, res) => {
    res.send('Order some Za');
});

  app.get('/pizza/pepperoni', (req, res) => {
      res.send('your pizza is on the way');
  });

  app.get('/pizza/pineapple', (req, res) => {
      res.send('delivious');
  });

app.listen(8000, () => {
console.log('Express server is listening on port 8000!');
});