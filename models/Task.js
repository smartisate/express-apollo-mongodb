const {Schema, model} = require('mongoose');

const taskSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: String
});

module.exports = model("Task", taskSchema);