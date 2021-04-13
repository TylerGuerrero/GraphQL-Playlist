import React from 'react';
import {useQuery} from '@apollo/client';
import { getBooksQuery } from '../queries/query';

function BookList(props) {  
   const {error, loading, data} = useQuery(getBooksQuery);
   console.log(data);

   if (loading) return (<p>Loading Books...</p>);
   if (error) return (<p>Something went wrong</p>);
   
   const books = data.books.map(book => {
       return (<li key={book.id}>{book.name}</li>)
   });

    return (
        <div>
            <ul id="book-list">
                {books}
            </ul>
        </div>
    );

}

export default BookList