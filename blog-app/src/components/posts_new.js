import React, {Component} from "react";
import {Field, reduxForm} from "redux-form";

class PostsNew extends Component{
    renderField(field){
        return (
            <div className = "form-group">
                <label>{field.label}</label>
                <input className = "form-control"
                    //onChange
                    //onBlur
                    //onFocus
                    type = "text"
                    {...field.input}
                />
                {field.meta.error}
            </div>
        );
    }

    onSubmit(values){
        console.log(values);
    }
    
    render(){
        const {handleSubmit} = this.props;

        return (
            // field doesn't know how to render, only knows how to interact with redux form
            // jsx figures out how to render it
            // each form component has a field to treat as a seperate component

            // redux handles submit then we have our custom callback function
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field  
                    label = "Title for New Post"
                    name = "title" // name and validate key must be ===
                    component = {this.renderField}
                />
                <Field  
                    label = "Categories"
                    name = "categories"
                    component = {this.renderField}
                />
                <Field  
                    label = "Post Content"
                    name = "content"
                    component = {this.renderField}
                />
                <button type="submit" className="btn btn-primary"> Submit </button> 
            </form>
        );
    }
}

function validate(values){
    /// when user clicks enter or submit
    const errors = {};

    // validate the inputs from the values object inputted into the form
    if(!values.title){
        errors.title = "Enter a title!";
    }

    if (!values.categories){
        errors.categories = "Enter some categories";
    }

    if (!values.content){
        errors.content = "Enter some content please";
    }

    return errors;

}

// form property is unique
export default reduxForm({
    validate,
    form: "PostsNewForm"
})(PostsNew);