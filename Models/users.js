const mongoose = require ('mongoose')
const bcrypt = require ('bcrypt')
const Schema = mongoose.Schema

//Setup Salt Rounds
const SALT_ROUNDS = 6;



const usersSchema = new mongoose.Schema ({ 
    username: {
    type: String,
    required: true,
    lowercase: true,
    unique: true
    },
    password: String,
    },
    {timestamps: true}
    
    {BOOK LISTS:[{}, {}]} ??
    })

    //This is pre-middleware also known as a "Mongoose Hook"
userSchema.pre('save', function(next){
    // I don't quite recall what "function(next)" is for but "next" should be to move onto the next middleware
    const user (this)
    // Using "this" your user is scoped to this instantiation
    if (!user.isModified('password')) return next()
    // If user password has not been modified then move onto the "next" step?
    // Since we've moved past the "if" statement we now want to save the informaiton becuase we can assume the user is        new?
    
    //Now use bcrypt to hash the password. The .hash method takes (data, Salt Rounds, callback function)
    //Remember that the callback function is to say "what happens"
    bcrypt.hash(user.password, SALT_ROUNDS, function(err, hash) {
    //Since this is a "promise" I must handle my errors.
    if (err) return next (err) //If an error exists just move onto the next middleware?
    //Without an error we continue with the Hasing process
    user.password = hash
    next()
    }
})