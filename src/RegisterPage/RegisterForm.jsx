import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import '../LoginPage/LoginPage.css';
import logo from '../img/Overstock_logo.png';

const validate = (values) => {
    console.info('values, props', values);
    const errors = {}
    if (!values.name) {
      errors.name = 'Required'
    } else if (values.name.length < 2) {
      errors.name = 'Minimum be 2 characters or more'
    }
    if (!values.email) {
      errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address'
    }
    if (!values.password) {
        errors.password = 'Required'
    } else if (values.password.length < 6) {
        errors.password = 'Minimum be 6 characters or more'
    }
  
    if(values.password && !values.confirmPassword){
      errors.confirmPassword = 'Required'
    } else if (values.password !== values.confirmPassword){
      errors.confirmPassword = 'Please Enter Correct Password'
    }
  
    return errors
  }

  const renderField = ({info, infoText, placeholder, input, label, type, meta: { touched, error } }) => (
    <div className='form-group'>
      <label className="labelTxt">{label}</label>
      <input {...input} placeholder={placeholder} type={type}  className="form-control" />
      {info && <span style={{color:'#ffc107', fontSize: `12px`}}>{infoText}</span>}
      {touched && ((error && <span className="errorTxt">{error}</span>) )}
    </div>
)

export class RegisterForm extends React.Component{

    static propTypes = {
        submitCase: PropTypes.func,
        handleSubmit: PropTypes.func,
    };

    static defaultProps = {
        submitCase: {},
    };

    // constructor(){
    //   super()
    // }
    render() {
    // const { registering  } = this.props;
    // const { handleSubmit, submitting, reset, dirty, pristine } = this.props;
    const { handleSubmit, submitting, reset } = this.props;
    const handleSubmitForm = (values) => {
        this.props.submitCase(values);
    };
    return (
      <div className="loginBoxWrap">
      <div className="loginBox">
          <div className="logoWrap">
            <img src={logo} alt="Logo" className="logoImg"/>
          </div>
          <h2>Create Account</h2>
            <form onSubmit={handleSubmit(handleSubmitForm)} >
            <Field name="name" placeholder="Your name" component={renderField} label="Your name*" />
            <Field name="email" component={renderField} label="Email Address*" placeholder="Email Address"/>
            <Field name="password" type ="password" component={renderField} label="password*" placeholder="At least 6 characters" info={true} infoText={"Passwords must be at least 6 characters"}/>
            <Field name="confirmPassword" type ="password" component={renderField} label="password again*" placeholder="password"/>
            <div className="form-group">
                <button type="submit" disabled={submitting} className="btn btn-primary">Register</button>
                <Link to="/login" className="btn btn-link" onClick={reset}>Cancel</Link>
            </div>
        </form>
        </div> 
        </div> 
      )
    }
  }
  
  const RegisterPagaForm = reduxForm({
    form: 'RegisterForm',
    validate
  })(RegisterForm);
  
  export default RegisterPagaForm;