const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('public'));

app.get('/', function(req, res) {
    res.send('Hello World!');
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, function(){

    console.log('Server is running on port ::${PORT}');
});
