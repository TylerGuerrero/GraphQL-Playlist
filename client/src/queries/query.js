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

export {
    getAuthorQuery,
    getBooksQuery
};