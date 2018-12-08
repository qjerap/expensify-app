import React from 'react'
import { connect } from 'react-redux'
import BlogForm from './BlogForm'
import { firebaseEditBlogAC, firebaseRemoveBlogAC } from '../store/actions/blog'
import { Link } from 'react-router-dom'

const EditBlog = (props) => {
    return (
        <div className="wrapper gridCenter">
        <div>
        <span>Read and Share your blog at: </span>
        <Link to={`/read/${props.blog.id}`}>here</Link>
        </div>
        
            <BlogForm 
                blog={props.blog}
                onSubmit={(blog) => {
                      props.dispatch(firebaseEditBlogAC(props.blog.id, blog))
                      props.history.push('/dashboard')                 
                }}
            />
            <button className="blog-form__button"
                onClick={
                    () => {

                        props.dispatch(firebaseRemoveBlogAC(props.blog.id))
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