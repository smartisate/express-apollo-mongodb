const {gql} = require('apollo-server-express')

const typeDefs = gql`

    type Task {
        id: ID
        title: String,
        description: String
    }

    type Query {
        hello:String,
        getAllTasks: [Task]
    }

    type Mutation {
        createTask(title: String, description: String): Task
    }
`

module.exports = {typeDefs}