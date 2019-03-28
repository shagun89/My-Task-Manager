const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser : true,
    useCreateIndex : true
})



// const me = new User({
//     name : 'Shaggy',
//     email : 'shaggy89@gmail.com',
//     age : 22,
//     password : 'shagpassword'
// })

// me.save().then(() => {                                  // save returns a promise
//     console.log(me)
// }).catch((error) => {
//     console.log('Error!!', error)
// })



// const job = new Tasks ({
//     description : "  Finish node   "
// })

// job.save().then(() => {
//     console.log(job)
// }).catch((error) => {
//     console.log('Error!!' + error)
// })