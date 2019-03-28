const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Tasks = require('./models/task')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
const bcrypt = require('bcryptjs')


const app = express()
const port = process.env.PORT


// app.use((req, res, next) => {
//     if(req.method === "GET")
//         res.status(503).send('Site under mantainence!!')
//     else
//         next()
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

const jwt = require('jsonwebtoken')

// const multer = require('multer')

// const upload = multer({
//     dest : 'images',
//     limits : {
//         fileSize : 1000000
//     },
//     fileFilter(req, file, cb) {
//         if(!file.originalname.match(/\.(doc|docx)$/)){
//             return cb(new Error('Please upload a word document'))
//         }

//         cb(undefined, true)
//     }
// })

// app.post('/upload', upload.single('upload'), (req, res) => {
//     res.send()
// }, (error, req, res, next) => {
//     res.status(400).send({error : error.message})
// })


app.listen(port, () => {
    console.log('Server is up running on port ' + port)
})



// const main = async () => {
//     // const task = await Tasks.findById('5c2e505a3253e18a43e612e6')
//     // await task.populate('owner').execPopulate()
//     // console.log(task.owner)

//     const user = await User.findById('5c9bb114ac415c440565c30f')
//     await user.populate('tasks').execPopulate()
//     console.log(user.tasks)
// }

// main()