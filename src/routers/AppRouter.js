import React from 'react'
import createHistory from 'history/createBrowserHistory'
import LoginPage from '../components/LoginPage'
import DashboardPage from '../components/DashboardPage'
import AddBlog from '../components/AddBlog'
import EditBlog from '../components/EditBlog'
import ReadBlog from '../components/ReadBlog'
import { Router, Route, Switch, Link, NavLink} from 'react-router-dom';
import PrivateRoute from './PrivateRoute'

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <Route path="/" component={LoginPage} exact />
                <PrivateRoute path="/dashboard" component={DashboardPage} />
                <PrivateRoute path="/create" component={AddBlog} />
                <PrivateRoute path='/edit/:id' component={EditBlog} />
                <Route path='/read/:id' component={ReadBlog} />
            </Switch>      
        </div>
    </Router>
);


export default AppRouter;