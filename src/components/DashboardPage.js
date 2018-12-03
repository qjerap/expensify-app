import React from 'react'
import BlogFilter from './BlogFilter'
import BlogList from './BlogList'
import { Link } from 'react-router-dom'

const DashboardPage = () => (

    <div>
        <BlogFilter />
        <Link to='/Create'>Add Post</Link>
        <BlogList />
    </div>
);

export default DashboardPage;