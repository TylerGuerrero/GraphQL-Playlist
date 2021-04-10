const _ = require('lodash');
const Book = require('../models/book');
const Author = require('../models/author');

const {
    GraphQLString, 
    GraphQLObjectType, 
    GraphQLSchema, 
    GraphQLID,
    GraphQLInt,
    GraphQLList
} = require('graphql');

const BookType = new GraphQLObjectType({
    name: 'Book',
    // going to over come reference errors when you
    // have mulitple types
    // ascync function to run so you know what type your using
    // files runs from up to down so you will never know the data
    // type syncrously instead 
    // **you execute the funtion once the whole file has ran
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        genre: {type: GraphQLString},
        authorId: {type: GraphQLID},
        author: {
            type: AuthorType,
            resolve(parent, args) {
                console.log(parent);
                // return _.find(authors, {id: parent.authorId})
            }
        }
    })
});

const AuthorType = new GraphQLObjectType({
    name: 'Author',
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        age: {type: GraphQLInt},
        books: {
            type: new GraphQLList(BookType),
            resolve(parent, args) {
              //  return _.filter(books, {authorId: parent.id})
            }
        }
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
              //  return _.find(books, {id: args.id});
            }
        },
        author: {
            type: AuthorType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args) {
                // args get passed in
                // args.id will be used to query the database
                // code to get data from the database 
             //  return _.find(authors, {id: args.id})
            }
        },
        books: {
            type: new GraphQLList(BookType),
            resolve(parent, args) {
             //   return books;
            }
        },
        authors: {
            type: new GraphQLList(AuthorType),
            resolve(parent, args) {
              //  return authors;
            }
        }
    }
})

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addAuthor: {
            type: AuthorType,
            args: {
                name: {type: GraphQLString},
                age: {type: GraphQLInt},

            },
            resolve(parent, args) {
                let author = new Author({
                    name: args.name,
                    age: args.age
                });
    
                return author.save();
            }
        },
        addBook: {
            type: BookType,
            args: {
                name: {type: GraphQLString},
                genre: {type: GraphQLString},
                authorId: {type: GraphQLID}
            },
            resolve(parent, args) {
                let book = new Book({
                    name: args.name,
                    genre: args.genre,
                    authorId: args.authorId
                })

                return book.save();
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
})