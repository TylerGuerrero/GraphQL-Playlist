import React, {Component} from 'react';
import { ApolloClient , InMemoryCache} from '@apollo/client';
import { ApolloProvider } from '@apollo/client/react'
import BookList from './components/BookList';
import AddBook from './components/AddBook';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache : new InMemoryCache()
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  
  render () {
    return (
      <ApolloProvider client={client}>
        <div id ="main">
          <h1>Tylers Reading list</h1>
          <BookList/>
          <AddBook/>
        </div>
      </ApolloProvider>
    ); 
  }
}

export default App;
