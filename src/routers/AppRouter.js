import React from 'react';
import Header from '../components/Header';
import DashboardPage from '../components/DashboardPage';
import AddBlog from '../components/AddBlog'
import EditBlog from '../components/EditBlog'
import ReadBlog from '../components/ReadBlog'
import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';


const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/dashboard" component={DashboardPage} exact />
                <Route path="/create" component={AddBlog} />
                <Route path='/edit/:id' component={EditBlog} />
                <Route path='/read/:id' component={ReadBlog} />
            </Switch>      
        </div>
    </BrowserRouter>
);


export default AppRouter;