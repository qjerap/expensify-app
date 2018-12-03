import React from 'react';
import BlogListItem from './BlogListItem'
import { connect } from 'react-redux'
import blogSelector from '../store/selectors/blogSelector'


const BlogList = (props) => {


        return (

        <div>
            {props.blogs < 1 && <p>No blog</p>}
            {
                props.blogs.map((blog) => 

                (<BlogListItem 
                    key={blog.id}
                    {...blog}
                />)
                
                )
            }
        </div>
    );
}

// const mapStateToProps = (state) => {
//     return {

//         blogs: state.blogs
//     }
// }

const mapStateToProps = (state) => {
    return {
        blogs: blogSelector(state.blogs, state.filters)
    }
}

export default connect(mapStateToProps)(BlogList);