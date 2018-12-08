import React from 'react';
import BlogListItem from './BlogListItem'
import { connect } from 'react-redux'
import blogSelector from '../store/selectors/blogSelector'


const BlogList = (props) => {


        return (

        <div className="gridCenter mg-top">
            {props.blogs < 1 && <p>It feels empty... Please add your first blog!</p>}
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