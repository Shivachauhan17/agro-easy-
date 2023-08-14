//passport-local strategy is specifically used for authenticating users 
//based on their username and password stored in a local database.
const LocalStrategy = require('passport-local').Strategy
const mongoose = require('mongoose')
const User = require('../model/User')

//module passport passed as an argument  
module.exports = async function (passport) {
    passport.use(new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
    const data =await User.findOne({ email: email.toLowerCase() }, (err, user) => {
      User.findOne({email:email.toLowerCase()})
      .then(user=>{
        if (!user) {
          return done(null, false, { msg: `Email ${email} not found.` })
        }
        if (!user.password) {
          return done(null, false, { msg: 'Your account was registered using a sign-in provider. To enable password login, sign in using a provider, and then set a password under your user profile.' })
        }
        user.comparePassword(password, (err, isMatch) => {
          if (err) { return done(err) }
          if (isMatch) {
            return done(null, user)
          }
          return done(null, false, { msg: 'Invalid email or password.' })
      })
    })
     .catch(err=>{
      if(err){
        return done(err)
      }
     })
    
  
    passport.serializeUser((user, done) => {
      done(null, user.id)
    })
  
    passport.deserializeUser((id, done) => {
      User.findById(id, (err, user) => done(err, user))
    })
  }