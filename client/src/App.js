import React, {Component} from 'react';
import BookList from './components/BookList';
import { ApolloClient } from '@apollo/client';
import { ApolloProvider } from '@apollo/client/react'

const client = new ApolloClient({
  uri: 'localhost:4000/graphql',
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
        </div>
      </ApolloProvider>
    ); 
  }
}

export default App;
