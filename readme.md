https://www.youtube.com/watch?v=fIZxZk_szWw

npm init -y
npm i express apollo-server-express dotenv graphql mongoose
npm i nodemon

node index.js

---------------------
Check http://localhost:3000/grapql/ -> Query your Server

in -- operation text area -- ->
        
        query{
          hello
        }

-- click Run button --

Check in -- Response  text area--- to view results
---------------------

Check too http://localhost:3000/ Then view 'Welcome to my API'
Check too http://localhost:3000/private Then view 'Not found page'


---------GRAPHQL---------
Queries -> queries
Mutations -> update, delete, insert
Types ->

--------- MUTATIONS -------
-- execute in APOLLO SERVER SANBOX to insert task--

mutation {
  createTask(
    title: "hello world 2",
    description: "my new task 2") {    
    id
    title
    description
  }
}

-- execute in APOLLO SERVER SANBOX to get specific all tasks--
query {
  getAllTasks {
    id
    title
    description
  }
}

-- execute in APOLLO SERVER SANBOX to get specific task--
query{
  getTask(id: "64a79119b23b349b30929990") {
    id
    title
    description
  }
}

-- execute in APOLLO SERVER SANBOX to delete task--
mutation{
  deleteTask(id:"64a79119b23b349b30929990")
}

-- execute in APOLLO SERVER SANBOX to UPDATE task--
mutation{
  updateTask(id: "64a790e4b23b349b3092998e"
  task: {
    title: "tarea actualizada",
    description: "MI NUEVA TAREA"
  }
  ) {
    id
    title
    description
  }
}