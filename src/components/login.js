import React from 'react';
import { connect } from 'react-redux';
import { login } from '../actions'; //index file then no need to specify the file

const Login = props => {
    return (
        <div>
            <p>Welcome back {props.user} </p>
            <button onClick={() => props.login('soyoneeh')}>Login</button>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        user: state.user.username
    }
}

export default connect(mapStateToProps, {
    login: login
})(Login);