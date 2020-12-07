const express = require('express');
const bodyParser = require('body-parser');

const user = require('./routes/userRoutes') // Imports routes for the products
const app = express();

// Set up mongoose connection
const mongoose = require('mongoose');

let dev_db_url = 'mongodb+srv://romeo:romeodb@cluster0.zk4co.mongodb.net/<dbname>?retryWrites=true&w=majority';

// let dev_db_url = 'mongodb://someuser:abcd1234@ds123619.mlab.com:23619/productstutorial';
const mongoDB = process.env.MONGODB_URI || dev_db_url;

mongoose.connect(mongoDB, {
    useNewUrlParser: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
})
    .then(() => console.log('DB Connected!'))
    .catch(err => {
        console.log(err.message);
    });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', user);

let port = 1230;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});