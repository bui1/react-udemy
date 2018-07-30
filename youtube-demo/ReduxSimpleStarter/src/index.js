import React, {Component} from "react";
import _ from "lodash";
import ReactDOM from "react-dom";
import SearchBar from "./components/search_bar";
import YTsearch from "youtube-api-search";
import VideoList from "./components/video_list";
import VideoDetail from"./components/video_detail";

const API_KEY = "";

// create a new component. It should produce some HTML
class App extends Component {
    constructor(props){
        super(props);
        this.state = { 
            videos: [],
            selectedVideo: null
        };

        this.videoSearch("surfboards");
    }

    videoSearch(term){
        YTsearch({key: API_KEY, term: term}, (videos) => {
            this.setState({
                videos: videos, // videos:videos == {videos} in es6
                selectedVideo: videos[0]
            }); 
        });
    }

    render(){ // passing prop videos to videolist
        const videoSearch = _.debounce((term) => { this.videoSearch(term)}, 300); // call after 3 seconds
        return (
            <div>
                <SearchBar onSearchTermChange = {videoSearch}/>
                <VideoDetail video = {this.state.selectedVideo}/>
                <VideoList 
                    onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
                    videos= {this.state.videos}/>
            </div>
        ); // JSX
    }
} 

// take this component's generated HTML and put in on the page(in the dom)

ReactDOM.render(< App/>, document.querySelector(".container")); // must instantiate it instead of passing in the App class
// then render app to the container(root) tag

