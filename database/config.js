const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

const dbConnection = async() => {

    try {
        await mongoose.connect(process.env.DB_CNN);
        console.log('DB On line')
        
    } catch (error) {
        console.log(error);
        throw new Error('Error initializing DB');
    }
};

module.exports = {
    dbConnection
}