import React from 'react';
import { connect } from 'react-redux'
import { logout, firebaseLogout } from '../store/actions/auth';
import { Link } from 'react-router-dom'

const Header = (props) => (
    <nav>
        <div className="nav">
            <a href="#" className="nav__logo text-pop-up-br">Blog&Share</a>
            <Link to='/dashboard' className="nav__link">Dashboard</Link>
            <a href="#" className="nav__logout"
                    onClick={
                        ()=>{
                        props.lgout()
                        props.firebaseLogout()
                        console.log('kek')}
                    }
            >logout</a>          
        </div>
    </nav>
);

const mapDispatchToProps = (dispatch) => ({
    
        lgout: () => dispatch(logout()),
        firebaseLogout: () => dispatch(firebaseLogout())
    
})

export default connect(null, mapDispatchToProps)(Header);