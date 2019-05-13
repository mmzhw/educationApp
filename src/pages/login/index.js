import React, { Component } from 'react';
import { connect } from 'dva';

@connect(({ login }) => ({ login }))
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        console.log(this.props);
        return (
            <div>我是登录页面</div>
        );
    }
}

export default Login;

