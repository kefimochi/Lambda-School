// import React from "react";
// import "./App.css";
// import { useState, useEffect } from "react";

// const Form = props => {
//   const [user, setUser] = useState({ name: "", email: "", role: "" });
//   let userCount = 0;
//   const handleChange = event => {
//     setUser({ ...user, [event.target.name]: event.target.value });
//   };

//   const handleSubmit = event => {
//     event.preventDefault();
//     props.setUsersArray([...props.usersArray, user]);
//     console.log("users array", props.usersArray);
//     console.log(user.name);
//     console.log(user.email);
//     console.log(user.role);
//   };

//   return (
//     <div className="App">
//       <form onSubmit={event => handleSubmit(event)}>
//         <label>
//           Name:
//           <input
//             type="text"
//             name="name"
//             value={user.name}
//             onChange={event => handleChange(event)}
//           />
//         </label>
//         <label>
//           Email:
//           <input
//             type="text"
//             name="email"
//             value={user.email}
//             onChange={event => handleChange(event)}
//           />
//         </label>
//         <label>
//           Role:
//           <input
//             type="text"
//             name="role"
//             value={user.role}
//             onChange={event => handleChange(event)}
//           />
//         </label>
//         <button>Submit!</button>
//       </form>
//     </div>
//   );
// };

// export default Form;

import React from "react";
import * as Yup from "yup";
import { withFormik, Form, Field } from "formik";
import axios from "axios";

function LoginForm({ values, errors, touched, isSubmitting }) {
  return (
    <Form>
      <div>
        {touched.name && errors.name && <p>{errors.name}</p>}
        <Field type="name" name="name" placeholder="Full name" />
      </div>
      <div>
        {touched.email && errors.email && <p>{errors.email}</p>}
        <Field type="email" name="email" placeholder="Email" />
      </div>
      <div>
        {touched.password && errors.password && <p>{errors.password}</p>}
        <Field type="password" name="password" placeholder="Password" />
      </div>
      <label>
        <Field type="checkbox" name="terms" checked={values.terms} />
        Accept Terms of Service
      </label>
      <button disabled={isSubmitting}>Submit</button>
    </Form>
  );
}

const FormFormik = withFormik({
  mapPropsToValues({ name, email, password, terms }) {
    return {
      name: name || "",
      email: email || "",
      password: password || "",
      terms: terms || false
    };
  },
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email("Email not valid")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be 6 characters or longer")
      .required("Password is required"),
    terms: Yup.bool()
      .oneOf(
        [true],
        "You must read terms of service and click the checkbox in order to proceed"
      )
      .required("Pls check it")
  }),
  handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
    if (values.email === "alreadytaken@atb.dev") {
      setErrors({ email: "That email is already taken" });
    } else {
      axios
        .post("https://reqres.in/api/users", values)
        .then(res => {
          console.log(res); // Data was created successfully and logs to console
          resetForm();
          setSubmitting(false);
        })
        .catch(err => {
          console.log(err); // There was an error creating the data and logs to console
          setSubmitting(false);
        });
    }
  }
})(LoginForm);

export default FormFormik;
