import React, {Component} from 'react';

class BookList extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        return (
            <div>
                <ul id="book-list">
                    <li>Book name</li>
                </ul>
            </div>
        );
    }
}

export default BookList;