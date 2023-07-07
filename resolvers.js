const Task = require('./models/Task')

const resolvers = {
    Query: {
        hello: () => 'Hello World',
        getAllTasks: async () => {
            const tasks = await Task.find();
            return tasks
        }
    },
    Mutation: {
        createTask: async (_, args) => {

            //console.log({parent, args, context, info});
            const {title, description} = args;
            const newTask = new Task({title, description});
            await newTask.save();
            console.log(newTask);

            return newTask;
        }
    }
}

module.exports = { resolvers };