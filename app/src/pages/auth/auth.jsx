import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import Dashboard from "../dashboard/Dashboard";
import axios from "axios";
import moment from 'moment';

const withRouter = (Component) => {
  const Wrapper = (props) => {

    const navigate = useNavigate();
    return (
      <Component navigate={navigate} {...props}/>
      )
    }
    return Wrapper;
}

class Auth extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleValidation = this.handleValidation.bind(this);
  }
  setLocalStorage(resObj) {
    const expires = moment().add(1, 'days');
    localStorage.setItem('token', `Bearer ${resObj.token}`);
    localStorage.setItem('expires', JSON.stringify(expires.valueOf()));
    localStorage.setItem('name', resObj.user.name);
  }

  async handleSubmit(values, actions) {
    const url = 'https://react-dash-ts-11-22.herokuapp.com/api/v1/auth/register';
    try {

      let response = await axios.post(url, { 
        email: values.email,
        password: values.password,
        name: values.name
      }, 
      {headers: { 'Content-Type': 'application/json'}})
      this.props.navigate("/dashboard");
      this.setLocalStorage(response.data)
    } catch(err) {
      console.error(err);
    }
  }

  handleValidation(values) {
    const errors = { };
    if(!values.email) {
      errors.email = "Email cannot be empty";
    }
    if(!values.password) {
      errors.password = "Password cannot be empty";
    } else if(values.password.length < 8) {
      errors.password = "Password should be atleast 8 characters";
    }
    return errors;
  }


  render() {

    return (
      <div className="wrapper" style={{
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#2F3542",
        height: "100vh",
        paddingTop: "25%",
        justifyContent: "space-evenly",
        
      }}>
      <div className="text-container"
      style={{padding: ""}}>


      <h1 style={{color: "#ffffff"}}>Login to unlock your <br />
        <span style={{color: "#686DE0"}}>online dashboard</span>
      </h1>
      </div>
      <div className="form-container">

      <Formik 
      initialValues={{email: "", password: "", name: ""}}
      validate={this.handleValidation}
      onSubmit={this.handleSubmit}>
        {
          props => (
        <Form style={{display: "flex", flexDirection: "column"}}>
                  <div className="field-wrap" style={{marginBottom: "30px"}}>
        <Field placeholder="Name" name="name" type="text" style={{padding: "10px 20px", width:"360px"}}></Field>
        <ErrorMessage name="name">{error =><p style={{fontWeight: "bold", color: "red"}}>{error}</p>}</ErrorMessage>
        </div>
        <div className="field-wrap" style={{marginBottom: "30px"}}>
        <Field placeholder="Email" name="email" type="email" style={{padding: "10px 20px", width:"360px"}}></Field>
        <ErrorMessage name="email">{error =><p style={{fontWeight: "bold", color: "red"}}>{error}</p>}</ErrorMessage>
        </div>
        <div className="field-wrap" style={{marginBottom: "30px"}}>

        <Field placeholder="Password" name="password" type="password" style={{padding: "10px 20px", width:"360px"}}></Field>
        <ErrorMessage name="password">
          {error => <p style={{fontWeight: "bold", color: "red"}}>{error}</p>}
        </ErrorMessage>
        </div>

        <button style={{backgroundColor: "#686DE0", padding: "10px 20px", color: "#ffffff", border: "none"}} type="submit" disabled={props.isSubmitting}>Submit</button>
        </Form>
            )}
      
      </Formik>
            </div>
        </div>
    )
  }

}

export default withRouter(Auth);

//utilise isSubmitting -- to disable button when pressed\
// setSubmitting -- set form state if failed
// isValid if form input is valid
// isValidating indicates if form is being validated -- useful for async req
  // resetForm can reset form
//