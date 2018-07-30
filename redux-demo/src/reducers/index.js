import { combineReducers } from 'redux';
import BooksReducer from "./reducer_books";

const rootReducer = combineReducers({
	books: BooksReducer // mapping of state here
});

export default rootReducer;
