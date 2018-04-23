const express = require('express')
    , bodyParser = require('body-parser')
    , axios = require('axios')
    , app = express();
require('dotenv').config();
app.use(bodyParser.json());

const { SERVER_PORT } = process.env;



app.get('/api/quote/:symbol', (req, res) => {
    // need to ensure parameter is lower case before sending to API
    let symbol = req.params.symbol.toLowerCase();
    axios.get(`https://api.iextrading.com/1.0/stock/${symbol}/batch?types=quote,logo,news`)
    .then(response => {
        res.status(200).send(response.data);
    });
});


app.listen(SERVER_PORT, () => {
    console.log(`Server listening on port ${SERVER_PORT}`)
});