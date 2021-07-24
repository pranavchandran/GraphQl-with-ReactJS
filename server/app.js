const express = require('express');
const graphqlHTTP = require('express-graphql').graphqlHTTP;
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const cors = require('cors');
// Create an express app
const app = express();

app.use(cors());

// connect to mongoose using Atlas
mongoose.connect('mongodb+srv://pranav:test@123@cluster0.5znz3.mongodb.net/Ninja?retryWrites=true&w=majority',
                { useNewUrlParser: true, useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connection.once('open', () => {
    console.log('Mongoose connected to MongoDB!');
});


// Set the port
const port = 4000;
// middleware
app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true,
  pretty: true,
  }));


// listen the port
app.listen(port, () => {
  console.log(`🚀 Server is running at http://localhost:${port}`);
});