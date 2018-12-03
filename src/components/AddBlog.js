import React from 'react';
import BlogForm from './BlogForm'
import { addBlogAC } from '../store/actions/blog'
import { connect } from 'react-redux';

class AddBlog extends React.Component {
    constructor(props) {
        super(props)

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(blog) {
        this.props.testYO(blog)
        this.props.history.push('/dashboard')
    }

    render() {
        return (
            <div>
                <h2>Add a blog!</h2>
                <BlogForm 
                    onSubmit={this.onSubmit}
                />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({

    testYO: (blog) => dispatch(addBlogAC(blog))
})

export default connect(null, mapDispatchToProps)(AddBlog);

