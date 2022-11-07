// import React, { useState } from "react";
// import { Formik, Field, Form, ErrorMessage, FormikProps, FormikErrors } from "formik";
// import { useNavigate } from "react-router-dom";
// import Dashboard from "../dashboard/Dashboard";

// interface FormValues {
//   email: string,
//   password: string
// }

// interface OtherProps {
//   message: string
// }

// // const Login = (props) => {
// //   let [authenticated, setAuthenticted] = useState(localStorage.getItem)
// // }

// // const handleSubmit = ((values: any, actions: any)) => {

// // }

// const validate = (values: FormValues) => {
//   let errors: FormikErrors<FormValues> = {};
//   if(!values.email) {
//     errors.email = "Email cannot be empty";
//   }
//   if(!values.password) {
//     errors.password = "Password cannot be empty";
//   } else if(values.password.length < 8) {
//     errors.password = "Password should be atleast 8 characters";
//   }
//   return errors;
// }