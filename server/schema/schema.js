const {graphql, GraphQLString, GraphQLObjectType, GraphQLSchema} = require('graphql');
const _ = require('lodash');

// dummy data
var books = [
    { name: 'Name of the Wind', genre: 'Fantasy', id: '1' },
    { name: 'The Final Empire', genre: 'Fantasy', id: '2' },
    { name: 'The Long Earth', genre: 'Sci-Fi', id: '3' },
];

const BookType = new GraphQLObjectType({
    name: 'Book',
    // going to over come reference errors when you
    // have mulitple types
    fields: () => ({
        id: {type: GraphQLString},
        name: {type: GraphQLString},
        genre: {type: GraphQLString}
    })
});

// The entry point to the graph from the UI
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType,
            args: {id: {type: GraphQLString}},
            resolve(parent, args) {
                // args get passed in
                // args.id will be used to query the database to get data
                // code to get data from db / other source
                return _.find(books, {id: args.id});
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})