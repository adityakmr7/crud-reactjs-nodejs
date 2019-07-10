const express = require('express');
const mongoose = require('mongoose');


const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const article = require('./Routes/article');


//logging package
 app.use(morgan('dev'));


const conn = mongoose.connect('mongodb://localhost:27017/article', {
    useNewUrlParser: true,
    useCreateIndex: true
});
if (!conn) {
    console.log('Error with database');
} else {
    console.log('Database Connected');
}

// //CORS
app.use((req,res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Header',
        'Origin, X-Requested-With, ' +
        'Content-Type,Accept');
    if(req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods',
            'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({})
    }
    next();
});

/*
*   Body-Parser Init
* */
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());


/*
* Routes
* */

app.use('/api', article);


const PORT = 8080;
app.listen(PORT, () => console.log(`Port is on ${PORT}`));