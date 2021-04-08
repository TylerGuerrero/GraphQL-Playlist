const {
    GraphQLString, 
    GraphQLObjectType, 
    GraphQLSchema, 
    GraphQLID,
    GraphQLInt
} = require('graphql');
const _ = require('lodash');

// dummy data books
var books = [
    { name: 'Name of the Wind', genre: 'Fantasy', id: '1' },
    { name: 'The Final Empire', genre: 'Fantasy', id: '2' },
    { name: 'The Long Earth', genre: 'Sci-Fi', id: '3' },
];

// dummy data authors
var authors = [
    { name: 'Patrick Rothfuss', age: 44, id: '1' },
    { name: 'Brandon Sanderson', age: 42, id: '2' },
    { name: 'Terry Pratchett', age: 66, id: '3' }
];

const BookType = new GraphQLObjectType({
    name: 'Book',
    // going to over come reference errors when you
    // have mulitple types
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        genre: {type: GraphQLString}
    })
});


const AuthorType = new GraphQLObjectType({
    name: 'Author',
    fields: () => ({
        id: {type: GraphQLString},
        name: {type: GraphQLString},
        age: {type: GraphQLInt}
    })
});

// The entry point to the graph from the UI
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args) {
                // args get passed in
                // args.id will be used to query the database to get data
                // code to get data from db / other source
                console.log(typeof(args.id)); // is type string
                return _.find(books, {id: args.id});
            }
        },
        author: {
            type: AuthorType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args) {
                // args get passed in
                // args.id will be used to query the database
                // code to get data from the database 
               return _.find(authors, {id: args.id})
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})