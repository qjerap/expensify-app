import React from 'react'
import { Link } from 'react-router-dom'



const BlogListItem = ({title, body, id, createdAt}, props) => (

    <Link to={`/edit/${id}`} >
    <div className="list-item">
        <h3 className="list-item__title">{title}</h3> 
        <p className="list-item__date">{createdAt}</p>
    </div>
    
  
    
    
    </Link>

);

export default BlogListItem;