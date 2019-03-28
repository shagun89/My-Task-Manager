
const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Tasks = require('./task')

const UserSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        trim : true
    },
    email : {
        type : String,
        required : true,
        unique : true,
        trim : true,
        lowercase : true,
        validate(value) {
            if(!validator.isEmail(value))
                throw new Error('Email is invalid')
        }
    },
    age : {
        type : Number,
        default : 0, 
        validate(value) {
            if(value < -1)
                throw new Error('Age should be greater than 0')
        }
    },
    password : {
        type : String,
        trim : true,
        minlength : 7,
        validate(value) {
            if(value.toLowerCase().includes('password'))
                throw new Error('Your password should not contain "password" as its substring!')
        }
    },
    tokens: [{
        token : {
            type : String,
            required : true
        }
    }],
    avatar : {
        type : Buffer
    }
}, {
    timestamps : true
}) 

UserSchema.virtual('tasks', {
    ref: 'Tasks',
    localField : '_id',
    foreignField : 'owner'
})

UserSchema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({email})

    if(!user)
        throw new Error('No such user exists!!')

    const isMatch = await bcrypt.compare(password, user.password)
    if(!isMatch)
        throw new Error('Unable to login!!')
    
    return user
}

UserSchema.methods.generateAuthToken = async function () {
    const user = this
    const token  = jwt.sign({ _id : user._id.toString()}, process.env.JWT_SECRET)

    user.tokens = user.tokens.concat({token})
    await user.save()
    return token
}

UserSchema.methods.toJSON = function () {
    const user = this
    const userObject = user.toObject()

    delete userObject.password
    delete userObject.tokens
    delete userObject.avatar

    return userObject
}

UserSchema.pre('save', async function(next) {
    const user = this
    
    if(user.isModified('password'))
        user.password = await bcrypt.hash(user.password, 8)
    next()
})

UserSchema.pre('remove', async function(next) {
    const user = this
    await Tasks.deleteMany({owner : user._id})
    next()
})

const User = mongoose.model('User', UserSchema)



module.exports = User