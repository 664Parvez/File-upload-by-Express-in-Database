const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/file_data')
.then(() => {
    console.log('Database connection successful');
})
.catch((err) => {
    console.log("Database connection failed" + err);
    process.exit(1)
})