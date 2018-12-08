import React from 'react'
import { connect } from 'react-redux'
import { firebaseLogin } from '../store/actions/auth'

const LoginPage = (props) => {

    return (

        <div className="wrapper login">
            <h1>BLOG&SHARE</h1>
            <p>Fatest way to blog and share your thoughts</p>
            <button onClick={props.firebaseLogin}>Sign in with google</button>
        </div>
    );
}



const mapDispatchToProps = (dispatch) => {
    return {
        firebaseLogin: () => dispatch(firebaseLogin())
    }
}

export default connect(null, mapDispatchToProps)(LoginPage);