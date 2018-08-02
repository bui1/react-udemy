import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchPosts} from "../actions";
import _ from "lodash";
import {Link} from "react-router-dom"; // to add or remove compoenent based on route path
// acts like an anchor tag to redirect to new link

class PostsIndex extends Component{

    // life cycle method
    componentDidMount(){
        this.props.fetchPosts();

    }

    renderPosts(){
        return _.map(this.props.posts, post => {
            return (
                <li className="list-group-item" key={post.id}> 
                    {post.title}
                </li>
            );
        });
    }
    render(){
        console.log(this.props.posts);
        return (
            <div>
                <div className= "text-xs-right">
                    <Link className="btn btn-primary" to ="/posts/new">
                        Add a Posts
                    </Link>
                </div>

                <h3> Posts Index </h3>
                <ul className= "list-group"> 
                    {this.renderPosts()}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {posts: state.posts};
}
export default connect(mapStateToProps, {fetchPosts})(PostsIndex);
// map action creator to component