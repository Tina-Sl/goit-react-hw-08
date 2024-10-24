import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { FaUserPlus } from "react-icons/fa";
import s from "./RegistrationForm.module.css";

const registrSchema = Yup.object().shape({
  name: Yup.string()
    .required("name is required")
    .min(2, "name is too short!")
    .max(50, "name is too long!"),
  email: Yup.string().email().required("email is required"),
  password: Yup.string()
    .required("password is required")
    .min(8)
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/,
      "Password must contain at least one number, one uppercase and one lowercase letter."
    ),
});

const RegistrationForm = () => {
  const initialValues = { name: "", email: "", password: "" };

  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <div className="container">
      <h2 className={s.title}>
        <FaUserPlus /> &nbsp; &nbsp; Сreate your account
      </h2>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={registrSchema}
      >
        <Form className={s.signup}>
          <label className={s.label}>
            <span>Name:</span>
            <Field
              name="name"
              type="text"
              className={s.field}
              placeholder=" &#xf007; &nbsp; name"
              autoComplete="on"
            />
            <ErrorMessage name="name" component="p" className={s.error} />
          </label>

          <label className={s.label}>
            <span>Email:</span>
            <Field
              className={s.field}
              type="email"
              name="email"
              placeholder=" &#xf0e0; &nbsp; email"
              autoComplete="on"
            />
            <ErrorMessage name="email" component="p" className={s.error} />
          </label>

          <label className={s.label}>
            <span>Password:</span>
            <Field
              className={s.field}
              type="password"
              name="password"
              placeholder=" &#xf023; &nbsp; password"
              autoComplete="off"
            />
            <ErrorMessage name="password" component="p" className={s.error} />
          </label>

          <button type="submit" className={s.button}>
            Sign Up
          </button>
        </Form>
      </Formik>
      <p className={s.question}>
        do you have an account? <a href="/login">click here to login</a>
      </p>
    </div>
  );
};

export default RegistrationForm;
