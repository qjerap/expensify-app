import React from 'react'
import { connect } from 'react-redux'
import BlogForm from './BlogForm'
import { editBlogAC, removeBlogAC } from '../store/actions/blog'
import { Link } from 'react-router-dom'

const EditBlog = (props) => {
    return (
        <div>

        <h4>Post readable at:</h4>
        <Link to={`/read/${props.blog.id}`}>here</Link>
            <BlogForm 
                blog={props.blog}
                onSubmit={(blog) => {
                      props.dispatch(editBlogAC(props.blog.id, blog))
                      props.history.push('/dashboard')                 
                }}
            />
            <button 
                onClick={
                    () => {

                        props.dispatch(removeBlogAC(props.blog.id))
                        props.history.push('/dashboard')
                    }
                }
            >Delete Blog</button>
        </div>
    );

}




const mapStateToProps = (state, props) => {

    return {
        blog: state.blogs.find((blog) => blog.id === props.match.params.id)
    }
}

export default connect(mapStateToProps)(EditBlog);