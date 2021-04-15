import { getBookQuery } from '../queries/query';
import { useQuery } from '@apollo/client';

const displayBookDetails = (loading, error, data) => {
    if (error) return (<h1>Oh NOOOOOOO Error </h1>);
    if (loading) return (<p>Loading ...</p>)

    if (data.book) {
        return (
            <div id="book-details">
                <h2>{data.book.name}</h2>
                <p>{data.book.id}</p>
                <p>{data.book.genre}</p>
                <p>{data.book.author.name}</p>
                <p>{data.book.author.age}</p>
                <p>{data.book.author.id}</p>

                <ul className="other-books">
                    {data.book.author.books.map((book) => {
                        return (
                                <li key={book.id}>
                                    {book.name}
                                </li>)})
                    }
                </ul>
            </div>
        );
    } else {
        return (<p> No data :( </p>)
    }
}

function BookDetails({ bookId }) {
    const { loading, error, data } = useQuery(getBookQuery, {
            variables: {
                id: bookId
            }
        });

    return (
        <div id="book-details">
            {displayBookDetails(loading, error, data)}
        </div>
    );
}

export default BookDetails;