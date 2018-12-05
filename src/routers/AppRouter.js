import React from 'react'
import createHistory from 'history/createBrowserHistory'
import LoginPage from '../components/LoginPage'
import Header from '../components/Header'
import DashboardPage from '../components/DashboardPage'
import AddBlog from '../components/AddBlog'
import EditBlog from '../components/EditBlog'
import ReadBlog from '../components/ReadBlog'
import { Router, Route, Switch, Link, NavLink} from 'react-router-dom';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={LoginPage} exact />
                <Route path="/dashboard" component={DashboardPage} />
                <Route path="/create" component={AddBlog} />
                <Route path='/edit/:id' component={EditBlog} />
                <Route path='/read/:id' component={ReadBlog} />
            </Switch>      
        </div>
    </Router>
);


export default AppRouter;