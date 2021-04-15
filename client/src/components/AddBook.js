import { useQuery, useMutation } from '@apollo/client';
import { getAuthorQuery, addBookMutation, getBooksQuery } from '../queries/query';
import { useState } from 'react';

const displayAuthors = (loading, data) => {
    if (loading) {
        return (<option disabled>Loading authors...</option>);
    } else {
        return data.authors.map(author => {
            return (<option key={author.id} value={author.id}>
                        {author.name}
                    </option>)
        })
    }
}

  function AddBook(props) {
    const [addBookMut] = useMutation(addBookMutation);

    const handleSubmit = (e) => {
        e.preventDefault();
        addBookMut({
          variables: {
            name: name,
            genre: genre,
            authorId: authorId
          },
          refetchQueries: [{query: getBooksQuery}]
        })
    }

    const [name, setName] = useState("");
    const [genre, setGenre] = useState("");
    const [authorId, setAuthorId] = useState("");

    const {loading, error, data} = useQuery(getAuthorQuery);
    if (error) return (<p>There is an Error!!!</p>);
   
    return (
        <form id="add-book" onSubmit={handleSubmit}>
          
          <div className="field">
            <label>Book name:</label>
            <input type="text" name="book" value={name}
            onChange={(e) => setName(e.target.value)}/>
          </div>
          
          <div className="field">
            <label>Genre:</label>
            <input type="text" name="genre" value={genre}
            onChange={(e) => setGenre(e.target.value)}/>
          </div>

          <div className="field">
            <label>Author:</label>
            <select
            name="authorId" 
            value={authorId} 
            onChange={(e) => setAuthorId(e.target.value)}>
                {displayAuthors(loading, data)}
            </select>
          </div>

          <button>+</button>
      </form>
    );
}

export default AddBook;