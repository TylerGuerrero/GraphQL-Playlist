const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');

// init express server
const app = express();

// creates a graphql http express server
app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server running on Port: ${PORT}`);
})