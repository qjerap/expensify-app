import React from 'react'
import { connect } from 'react-redux'

const ReadBlog = (props) => {

    let {title, body, createdAt} = props.blog

    return (
        <div className="wrapper gridCenter">
            <h1>{title}</h1>
            <p>{body}</p>
            <p>{createdAt}</p>
        </div>
    );
}

const mapStateToProps = (state, props) => {
    return {
        blog: state.blogs.find((blog) => blog.id === props.match.params.id)
    }
}

export default connect(mapStateToProps)(ReadBlog);