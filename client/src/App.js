import React, {Component} from 'react';
import BookList from './components/BookList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  
  render () {
    return (
      <div id ="main">
        <h1>Tylers Reading list</h1>
        <BookList/>
      </div>
    ); 
  }
}

export default App;
