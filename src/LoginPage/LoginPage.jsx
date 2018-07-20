import React from 'react';
import * as userAction from '../actions/userAction';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import LoginForm from './LoginForm';
import _find from 'lodash/find';

export class LoginPage extends React.Component{
  constructor(){
    super();
  }

  submit = (values) => {
     // console.log('values', values);
    fetch(`http://localhost:3000/users`)
    .then(res => res.json())
    .then(response => this.successCall(response, values))
    .catch(err => this.props.actions.loginError(err))
  }

  successCall = (response, values) => {
        let user =_find(response, {'email': values.email, 'password': values.password});
          if(user){
              this.props.actions.loginUser(user);
              localStorage.setItem('user', user);
              window.location.assign('/'); // why we are using window.location method if you want use react-router browserHistory method we need webpack implementation
          } else {
              this.props.actions.loginError('User not found');
          }
  }
 
  render() {
      console.info('this.props', this.props);
      const { loginError =''} = this.props.users || [];
    return (
        <React.Fragment>
        <LoginForm
         submitCase={this.submit}
         loginError={loginError}
        />
        </React.Fragment>
    )
  }
}
const mapStateToProps = state => {
    return {
        users: state.users
    };
}
const matchDispatchToProps = dispatch => ({
  actions: bindActionCreators(Object.assign(
      userAction,
  ), dispatch),
});

export default connect(mapStateToProps, matchDispatchToProps)(LoginPage);