import React from 'react';
import BlogForm from './BlogForm'
import { firebaseAddBlogAC } from '../store/actions/blog'
import { connect } from 'react-redux';

class AddBlog extends React.Component {
    constructor(props) {
        super(props)

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(blog) {
        this.props.firebaseAddBlogAC(blog)
        this.props.history.push('/dashboard')
    }

    render() {
        return (
            <div className="wrapper gridCenter">
                <h2>Create new blog</h2>
                <BlogForm 
                    onSubmit={this.onSubmit}
                />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({

    firebaseAddBlogAC: (blog) => dispatch(firebaseAddBlogAC(blog))
})

export default connect(null, mapDispatchToProps)(AddBlog);

