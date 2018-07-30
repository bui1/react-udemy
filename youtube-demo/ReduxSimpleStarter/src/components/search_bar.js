import React, {Component} from "react";

// fucntional component
// const SearchBar = () => {
//     return <input/>;
// }

// class based component
class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state = {term : ""};
    }
//  every time our input changes, set our state to its new value
    render() { 
        return (
        <div className = "search-bar"> 
            <input 
            value = {this.state.term}
            onChange = {event => this.onInputChange(event.target.value)}/>
        </div>
        );
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;