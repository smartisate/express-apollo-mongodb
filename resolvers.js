const Task = require('./models/Task')

const resolvers = {
    Query: {
        hello: () => 'Hello World',
        getAllTasks: async () => {
            const tasks = await Task.find();
            return tasks
        },
        getTask: async (_, args) => {
            const task = await Task.findById(args.id);
            return task;
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
        },
        async deleteTask(_, {id}){
            await Task.findByIdAndDelete(id);
            return "Task deleted";
        },
        async updateTask(_, {task, id}){
            const taskUpdated = await Task.findByIdAndUpdate(id, task, {
                $set: task
            },
            {new:true});

            console.log(taskUpdated, id);
            return taskUpdated
        }
    }
}

module.exports = { resolvers };