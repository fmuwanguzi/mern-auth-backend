require('dotenv').config();

// A passport strategy for authenticating with a JSON web token 
// This allows us to authenticate end points using a token
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose');

const User = require('../models/User');


const options = {};
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
//JWT_SECRET is inside of our environment.
options.secretOrKey = process.env.JWT_SECRET;


module.exports = (passport) => {
    passport.use(new JwtStrategy(options, (jwt_payload, done) => {
        //have a user that we're going to find by the id in the payload
        //when we get a user back, we will check to see if user is in database.
        User.findById(jwt_payload.id)
        .then(user => {
            //jwt_payload is an object literal that contains decoded JWT payload
            //done is a callback that has an error first as an argument done(error,user, info)
            if (user){
                //if a user is found, return null (for error) and the user
                return done(null, user);
            } else {
                //no user was found
                return done(null, false);
            }
        })
        .catch(error => console.log(error));
    }))
}
