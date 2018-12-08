import React from 'react'
import moment from 'moment'

class BlogForm extends React.Component {
    constructor(props) {
        super(props)

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            title: props.blog ? props.blog.title : '',
            body: props.blog ? props.blog.body : '',
            error: ''
        }
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });    
    }

    onSubmit(e) {
        e.preventDefault();
        if(!this.state.title || !this.state.body) {
            this.setState(() => ({
                error: 'Please provide a title and content for your blog!'
            }))
        } else {
            this.setState(() => ({ error: '' }))
            this.props.onSubmit({
                title: this.state.title,
                body: this.state.body,
                createdAt: moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
            })
        }
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form 
                className="blog-form"
                onSubmit={this.onSubmit}>
                    <input 
                    className="blog-form__title"
                        type="text"
                        placeholder="Title"
                        name="title"
                        value={this.state.title}
                        autoFocus
                        onChange={this.onChange}
                    />
                    <textarea
                        className="blog-form__body" 
                        type="textarea"
                        placeholder="..."
                        name="body"
                        value={this.state.body}
                        onChange={this.onChange}
                    />
                    <button
                    className="blog-form__button" 
                    >Save Post</button>  
                </form>
            </div>
        );
    }
}

export default BlogForm;
