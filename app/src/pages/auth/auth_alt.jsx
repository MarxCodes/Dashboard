// import React from "react";
// import { Formik, Field, Form, ErrorMessage } from "formik";
// import { useNavigate } from "react-router-dom";
// import Dashboard from "../dashboard/Dashboard";

// const withRouter = (Component) => {
//   const Wrapper = (props) => {

//     const navigate = useNavigate();
//     return (
//       <Component navigate={'/dashboard'} {...props}/>
//       )
//     }
//     return Wrapper;
// }
// // export function withNavigate(props) {
// //   // let navigate = useNavigate();
// //   return <Dashboard {...props}/>
// // }
// class SignIn extends React.Component {
//   handleSubmit(values, actions) {
//     return new Promise((resolve, reject) => {
//       //call api to login 
//       console.log(values, actions)
//       setTimeout(() => {
//         resolve();
//         this.props.navigate("/dashboard")
//       }, 2000)
//     })
//   }

//   handleValidation(values) {
//     const errors = { };

//     console.log(values)
//     if(!values.email) {
//       errors.email = "Email cannot be empty";
//     }
//     if(!values.password) {
//       errors.password = "Password cannot be empty";
//     } else if(values.password.length < 8) {
//       errors.password = "Password should be atleast 8 characters";
//     }
//     return errors;
//   }

//   render() {
//  return (    <Formik 
//     initialValues={{name: "", email: "", password: ""}}
//     validate={this.handleValidation}
//     onSubmit={this.handleSubmit}>
//       {
//         props => (
//       <Form style={{display: "flex", flexDirection: "column"}}>
//       <div className="field-wrap" style={{marginBottom: "30px"}}>
//       <Field placeholder="Name" name="name" type="text" style={{padding: "10px 20px", width:"360px"}}></Field>
//       <ErrorMessage name="name">{error =><p style={{fontWeight: "bold", color: "red"}}>{error}</p>}</ErrorMessage>
//       </div>
//       <div className="field-wrap" style={{marginBottom: "30px"}}>
//       <Field placeholder="Email" name="email" type="email" style={{padding: "10px 20px", width:"360px"}}></Field>
//       <ErrorMessage name="email">{error =><p style={{fontWeight: "bold", color: "red"}}>{error}</p>}</ErrorMessage>
//       </div>
//       <div className="field-wrap" style={{marginBottom: "30px"}}>

//       <Field placeholder="Password" name="password" type="password" style={{padding: "10px 20px", width:"360px"}}></Field>
//       <ErrorMessage name="password">
//         {error => <p style={{fontWeight: "bold", color: "red"}}>{error}</p>}
//       </ErrorMessage>
//       </div>

//       <button style={{backgroundColor: "#686DE0", padding: "10px 20px", color: "#ffffff", border: "none"}} type="submit" disabled={props.isSubmitting}>Submit</button>
//       </Form>
//           )}
    
//     </Formik>)
//   }
// }
// class Register extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.handleValidation = this.handleValidation.bind(this);
//   }
//   handleSubmit(values, actions) {
//     return new Promise((resolve, reject) => {
//       //call api to login 
//       console.log(values, actions)
//       setTimeout(() => {
//         resolve();
//         this.props.navigate("/dashboard")
//       }, 2000)
//     })
//   }

//   handleValidation(values) {
//     const errors = { };

//     console.log(values)
//     if(!values.email) {
//       errors.email = "Email cannot be empty";
//     }
//     if(!values.password) {
//       errors.password = "Password cannot be empty";
//     } else if(values.password.length < 8) {
//       errors.password = "Password should be atleast 8 characters";
//     }
//     return errors;
//   }

//   render() {
//     return (
//       <Formik 
//       initialValues={{name: "", email: "", password: ""}}
//       validate={this.handleValidation}
//       onSubmit={this.handleSubmit}>
//         {
//           props => (
//         <Form style={{display: "flex", flexDirection: "column"}}>
//         <div className="field-wrap" style={{marginBottom: "30px"}}>
//           <Field placeholder="Name" name="name" type="text" style={{padding: "10px 20px", width:"360px"}}></Field>
//           <ErrorMessage name="name">{error =><p style={{fontWeight: "bold", color: "red"}}>{error}</p>}</ErrorMessage>
//         </div>
//         <div className="field-wrap" style={{marginBottom: "30px"}}>
//         <Field placeholder="Email" name="email" type="email" style={{padding: "10px 20px", width:"360px"}}></Field>
//         <ErrorMessage name="email">{error =><p style={{fontWeight: "bold", color: "red"}}>{error}</p>}</ErrorMessage>
//         </div>
//         <div className="field-wrap" style={{marginBottom: "30px"}}>

//         <Field placeholder="Password" name="password" type="password" style={{padding: "10px 20px", width:"360px"}}></Field>
//         <ErrorMessage name="password">
//           {error => <p style={{fontWeight: "bold", color: "red"}}>{error}</p>}
//         </ErrorMessage>
//         </div>

//         <button style={{backgroundColor: "#686DE0", padding: "10px 20px", color: "#ffffff", border: "none"}} type="submit" disabled={props.isSubmitting}>Submit</button>
//         </Form>
//             )}
      
//       </Formik>
//     )
//   }
// }
// class Auth extends React.Component {



 


//   render() {

//     return (
//       <div className="wrapper" style={{
//         display: "flex",
//         flexDirection: "row",
//         backgroundColor: "#2F3542",
//         height: "100vh",
//         paddingTop: "25%",
//         justifyContent: "space-evenly",
        
//       }}>
//       <div className="text-container"
//       style={{padding: ""}}>


//       <h1 style={{color: "#ffffff"}}>Login to unlock your <br />
//         <span style={{color: "#686DE0"}}>online dashboard</span>
//       </h1>
//       </div>
//       <div className="form-container">
//       <Register/>

//             </div>
//         </div>
//     )
//   }

// }

// export default withRouter(Auth);

// //utilise isSubmitting -- to disable button when pressed\
// // setSubmitting -- set form state if failed
// // isValid if form input is valid
// // isValidating indicates if form is being validated -- useful for async req
//   // resetForm can reset form
// //