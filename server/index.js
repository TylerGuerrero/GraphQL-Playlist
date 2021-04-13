const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const config = require('./config/database');
const cors = require('cors');

// init express server
const app = express();

// allow cross-origin requests
app.use(cors()); 

mongoose.connect(config.database, {useNewUrlParser: true, useUnifiedTopology: true} )
.catch(err => console.log(err));

mongoose.connection.on('error', (err) => {
    console.log(err);
});

mongoose.connection.once('open', () => {
    console.log('MongoDB Connected');
})

// creates a graphql http express server
app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}))

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server running on Port: ${PORT}`);
})