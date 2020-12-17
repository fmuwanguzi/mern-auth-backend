const passport = require('passport');

require('dotenv').config();

// A passport strategy for authenticating with a JSON web token 
// This allows us to authenticate end points using a token
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const options = {};
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
//JWT_SECRET is inside of our environment.
options.secretOrKey = process.env.JWT_SECRET;


module.exports = (passport) => {
    passport.use(new JwtStrategy(options, (jwt_payload, done)=>{
        //have a user that we're going to find by the if in the payload
        //when we ge ta user back, we will check to see if user is in database
    }))
}
