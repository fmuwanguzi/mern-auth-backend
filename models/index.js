const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true
})

//Mongoose connection object
const db = mongoose.connection;

//set up an event listener that will fire once the connection opens to the DB
//log to the terminal what host and port we are on.
db.once('open', () => {
    console.log(`connect to MongoDB at ${db.host}: ${db.port}`)
});

db.on('error', (error)=>{
    console.log(`Database error\n ${error}`)
});

module.exports.User = require('./User')
module.exports = User;