const { connect } = require('mongoose');

const connectDB = async () => {
    try {
        await connect('mongodb://localhost/taskdb');        
        console.log('Mongodb connected');
    } catch (ex) {
        console.error(ex);
    }
}

module.exports = {connectDB};