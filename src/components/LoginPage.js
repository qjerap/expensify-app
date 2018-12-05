import React from 'react'
import { connect } from 'react-redux'
import { firebaseLogin } from '../store/actions/auth'

const LoginPage = (props) => {

    return (

        <div>
            <button onClick={props.firebaseLogin}>Login</button>
        </div>
    );
}



const mapDispatchToProps = (dispatch) => {
    return {
        firebaseLogin: () => dispatch(firebaseLogin())
    }
}

export default connect(null, mapDispatchToProps)(LoginPage);