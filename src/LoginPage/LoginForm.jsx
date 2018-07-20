import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './LoginPage.css';
import logo from '../img/Overstock_logo.png';

const validate = values => {
  const errors = {}
  if (!values.email) {
    errors.email = 'Required'
  }

  if (!values.password) {
     errors.password = 'Required'
  }
  return errors;
}

const renderField = ({placeholder, input, label, type, meta: { touched, error } }) => (
      <div className='form-group'>
        <label className="labelTxt">{label}</label>
        <input {...input} placeholder={placeholder} type={type}  className="form-control" />
        {touched && ((error && <span className="errorTxt">{error}</span>) )}
      </div>
)

export class LoginForm extends React.Component{

  static propTypes = {
    submitCase: PropTypes.func,
    handleSubmit: PropTypes.func,
  };

  static defaultProps = {
    submitCase: {},
  };

  constructor(){
    super()
  };

  render() {
    const { loggingIn  } = this.props;
    const { handleSubmit, pristine, submitting, reset, dirty, loginError } = this.props;
    console.log('loginError',loginError);
    const handleSubmitForm = (values) => {
      this.props.submitCase(values);
    };
    return (
        <div className="loginBoxWrap">
        <div className="loginBox">
            <div className="logoWrap">
              <img src={logo} alt="Logo" className="logoImg"/>
            </div>
            <h2>Login</h2>
            <form onSubmit={ handleSubmit(handleSubmitForm) } >
                <Field name="email" component={renderField} label="Email Address*" placeholder="Email Address"/>
                <Field name="password" type ="password" component={renderField} label="password*" placeholder="password"/>
              <div className="form-group">
                  <button className="btn btn-primary">Sign In</button>
                  {loggingIn &&
                      <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                  }
                  <Link to="/register" className="btn btn-link">Register</Link><br/>
                  {loginError && <span style={{color:'#FF0000', fontSize: `12px`}}>{loginError}</span>}
              </div>
            </form>
        </div>
        </div>
    )
}
}
const LoginFormPage = reduxForm({
  form: 'login',
  validate,
})(LoginForm);

export default LoginFormPage;