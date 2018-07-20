import React from 'react';
import * as userAction from '../actions/userAction';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import RegisterForm from './RegisterForm';
// import { Redirect  } from 'react-router-dom';
// import { browserHistory } from 'react-router';

export class RegisterPage extends React.Component{
  // constructor(){
  //   super()
  // }
  submit = (values) => {
    console.info('values', values);
    fetch('http://localhost:3000/users',{
      method: 'post',
      headers:{'Accept': 'application/json',
      'Content-Type': 'application/json'},
      body: JSON.stringify(values)
    })
    .then(res => res.json())
    .then(res => this.Createaccount(res))
    .catch(err => this.props.actions.addUserError(err))
  }
  Createaccount = (res) =>{ 
    this.props.actions.addUser(res);
    window.location.assign('/login');
  }
  render() {
    console.info('props', this.props.users);
    const { registerSuccess = false } = this.props.users;
    return (
        <RegisterForm
         submitCase={this.submit}
        />
    )
  }
}

const mapStateToProps = state => {
   return {
     users: state.users
   }
}

const matchDispatchToProps = dispatch => ({
  actions: bindActionCreators(Object.assign(
      userAction,
  ), dispatch),
});

export default connect(mapStateToProps, matchDispatchToProps) (RegisterPage);