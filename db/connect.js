const mongoose = require('mongoose')

const connectString = 'mongodb+srv://tasks:tasks@cluster0.w7zsm.mongodb.net/TASK-MANAGER?retryWrites=true&w=majority'


const connectDB = (url) =>{
    return mongoose.connect(connectString)
    .then(() =>console.log('CONNECTED TO THE DB...'))
    .catch((err) => console.log(err))

}

module.exports = connectDB
