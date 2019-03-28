
const { MongoClient, ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectID()


MongoClient.connect(connectionURL, { useNewUrlParser : true}, (error, client) => {
        if(error)
            return console.log('Unable to connect to database')
        
        const db = client.db(databaseName)



        // db.collection('users').insertOne({
        //     _id : id,
        //     name : 'Yash',
        //     age : 21
        // }, (error, result) => {
        //     if(error)
        //         return console.log('Unable to insert user')
        //     console.log(result.ops)
        // })

        // db.collection('tasks').insertMany([
        //     {
        //         description : 'Dry cleaning',
        //         completed : true
        //     },
        //     {
        //         description : 'Cook food',
        //         completed : false
        //     },
        //     {
        //         description : 'Clean garage',
        //         completed : false
        //     }
        // ], (error, result) => {
        //     if(error)
        //         return console.log('Unable to insert task')
        //     console.log(result.ops)
        // })

        // _id : new ObjectID('5c97820daede12738a484b2f')
        // db.collection('users').findOne({name: 'Yash'}, (error, user) => {
        //     if(error)
        //         return console.log('Unable to fetch user')
        //     console.log(user)
        // })

        // db.collection('tasks').find({completed : false}).toArray((error, task) => {
        //     console.log(task)
        // })

        // db.collection('tasks').find({completed : false}).count((error, cnt) => {
        //     console.log(cnt)

        // db.collection('users').updateOne({
        //     _id : new ObjectID("5c9779867391586e978f4a21")
        // }, {
        //     // $set : {name: 'Shaggy'},
        //     $inc : {age : 1}
        // }).then((result) => {
        //     console.log(result)
        // }).catch((error) => {
        //     console.log(error)
        // })
        
        // db.collection('tasks').updateMany({
        //     completed : false
        // }, {
        //     $set : {completed : true}
        // }).then((result) => {
        //     console.log(result)
        // }).catch((error) => {
        //     console.log(error)
        // })

        // db.collection('users').deleteMany({
        //     age : 22
        // }).then((result) => {
        //     console.log(result)
        // }).catch((error) => {
        //     console.log(error)
        // })
})