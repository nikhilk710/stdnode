const express = require('express');
const bodyParser = require('body-parser');
const cors= require('cors');
const helmet = require('helmet');
const morgan = require('morgan'); 
const res = require('express/lib/response');
const app = express();


app.use(helmet());


app.use(bodyParser.json());

app.use(cors());

app.use(morgan ('combined'));

app.get('/', (req, res) => {

res.send('api is working');

});

app.post('/bfhl', (req,res)=>{


    //const req1 =  [7,18,21,2];
//console.log(req1);
    let numbersOnly = (val) => {
        if (typeof(val) === 'number') {      // replace number with string to get only string values in an array.
          return val;
        }
      }

      let alphabetsOnly = (val) => {
        if (typeof(val) === 'string') {      // replace number with string to get only string values in an array.
          return val;
        }
      }


        var numbers = req.body.filter(numbersOnly);
        var alphabets = req.body.filter(alphabetsOnly);
    console.log(numbers);

    var dataObj = { 
        "is_success" : true,
        "user_id" : "john_doe_17091999",
        "email" : "jhn@xyz.com",
        "roll_number": "ABCD123",
        "number" : numbers,
        "alphabets" : alphabets
    }

    res.send(dataObj);
});



app.listen (3001 ,() => {
    console.log('listening on port 3001');
});