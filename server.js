//imports
require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const passport = require('passport');
//const bodyparser = require('body-parser')


//after passport is required the function is ran
require('./config/passport')(passport);

//API
const users = require('./api/users');

//PORT
const PORT = process.env.PORT || 8000;

// Middleware
app.use(cors());
//app.use(bodyparser.urlencoded({ extended: false }))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Passport Middleware
app.use(passport.initialize());

app.get('/', (req,res)=>{
    res.status(200).json ({ message: 'Smile you are being watched by the backend enginnering team' })
});

app.use('/api/users', users);

//listen
app.listen(PORT, () => {
    console.log(`Backend server is listening 😤 on port: ${PORT}`)
})