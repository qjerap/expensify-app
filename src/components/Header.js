import React from 'react';
import { connect } from 'react-redux'
import { logout, firebaseLogout } from '../store/actions/auth';

const Header = (props) => (
    <div>
        <h3>BlogMTL</h3>
        <button
        onClick={()=>{
            props.lgout()
            props.firebaseLogout()
            console.log('kek')
        }}
        >logout</button>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    
        lgout: () => dispatch(logout()),
        firebaseLogout: () => dispatch(firebaseLogout())
    
})

export default connect(null, mapDispatchToProps)(Header);