import React, {Component} from "react";
import {connect} from "react-redux";
import {selectBook} from "../actions/index";
import {bindActionCreators} from "redux";

class BookList extends Component{
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li 
                onClick = {() => this.props.selectBook(book)}
                key={book.title} className= "list-group-item">
                {book.title} 
                </li>
            );
        });
    }
    render() {
        return (
            <ul className = "list-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    }
}

function mapStateToProps(state){
    // whatever is returned will show up as props inside of booklist

    return {
        books: state.books
    };

}

// anything returned from below will end up as props on the booklist container
function mapDispatchToProps(dispatch){
    // whenever selectBook is called, result should be passed to all reducers
    return bindActionCreators({selectBook: selectBook}, dispatch);
}

// promote booklist from component to container it neeeds to know about dispatch method
// and slect book. Make it available as prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);