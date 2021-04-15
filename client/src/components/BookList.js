import React from 'react';
import { useQuery } from '@apollo/client';
import { getBooksQuery } from '../queries/query';
import BookDetails from './BookDetails';
import { useState } from 'react'

function BookList(props) {
   const [selected, setSelected] = useState(null);

   const {error, loading, data} = useQuery(getBooksQuery);

   if (loading) return (<p>Loading Books...</p>);
   if (error) return (<p>Something went wrong</p>);
   
   const books = data.books.map(book => {
       return (
                <li key={book.id}
                    onClick={(e) => {setSelected(book.id)}}>
                    {book.name}
                </li>
            )
   });

    return (
        <div>
            <ul id="book-list">
                {books}
            </ul>
            <BookDetails bookId={selected}/>
        </div>
    );

}

export default BookList