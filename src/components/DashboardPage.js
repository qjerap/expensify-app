import React from 'react'
import BlogFilter from './BlogFilter'
import BlogList from './BlogList'
import { Link } from 'react-router-dom'

const DashboardPage = () => (

    <div className="wrapper">
        
            <BlogFilter />
    
        <BlogList />
    </div>
);

export default DashboardPage;