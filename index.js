const express = require('express');
const { graphqlHTTP } = require('express-graphql');

// init server
const app = express();


// creates a graphql http server
app.use('/graphql', graphqlHTTP({

}));

const PORT = process.env.PORT || 4000;
app.listen(() => {
    console.log(`Server running on Port: ${PORT}`);
})