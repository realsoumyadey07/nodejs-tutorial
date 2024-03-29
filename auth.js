import passport from 'passport';
import localStrategy from 'passport-local'; 
import Person from "./models/person.js";


passport.use(new localStrategy(async (username, password, done)=>{
    try {
      console.log(username, password);
      const user = await Person.findOne({username});
      if (!user){
        return done(null, false, {message: 'Incorrect username'});  
      }
      const isPasswordMatched = user.comparePassword(password);
      if(isPasswordMatched){
        return done(null, user);
      }else{
        return done(null, false, {message: 'Password is incorrect'});
      }
    } catch (error) {
      done(error);
    }
  }))

  export default passport;