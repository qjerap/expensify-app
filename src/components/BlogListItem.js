import React from 'react'
import { Link } from 'react-router-dom'



const BlogListItem = ({title, body, id, createdAt}, props) => (

    <div>

    
    <Link to={`/edit/${id}`}>
        <h3>{title}</h3> 
    </Link>
    {createdAt}
    
    
    </div>

);

export default BlogListItem;