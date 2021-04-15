import { gql } from '@apollo/client';

const getAuthorQuery = gql`
    {
        authors {
            name
            id
        }
    }
`;

const getBooksQuery = gql`
    {
        books {
            name
            id
        }
    }
`

const getBookQuery = gql`
        query($id: ID!) {
            book(id: $id) {
                id
                name
                genre
                author {
                    id
                    name
                    age
                    books {
                        name
                        id
                    }
                }
            }
        }
    
`;

// $ are for query inputs, ! means non-null
const addBookMutation = gql`
    mutation($name: String!, $genre: String!, $authorId: ID!) {
        addBook(name: $name, genre: $genre, authorId: $authorId) {
            name
            id
        }
    }
`;

export {
    getAuthorQuery,
    getBooksQuery,
    addBookMutation,
    getBookQuery
};