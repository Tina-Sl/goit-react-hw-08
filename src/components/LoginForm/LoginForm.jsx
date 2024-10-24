import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import { FaUnlockAlt, FaCaretRight } from "react-icons/fa";
import s from "./LoginForm.module.css";

const loginSchema = Yup.object().shape({
  email: Yup.string().email().required("email is required"),
  password: Yup.string()
    .required("password is required")
    .min(8)
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/,
      "Password must contain at least one number, one uppercase and one lowercase letter."
    ),
});

const LoginForm = () => {
  const initialValues = { email: "", password: "" };
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    dispatch(login(values));
  };

  return (
    <div className="container">
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={loginSchema}
      >
        <Form className={s.signin}>
          <h2 className={s.title}>
            <FaUnlockAlt /> &nbsp; &nbsp; Welcome back
          </h2>

          <Field
            className={s.field}
            type="email"
            name="email"
            placeholder=" &#xf0e0; &nbsp; email"
            autoComplete="on"
          />
          <ErrorMessage name="email" component="p" className={s.error} />

          <Field
            className={s.field}
            type="password"
            name="password"
            placeholder=" &#xf023; &nbsp; password"
            autoComplete="off"
          />
          <ErrorMessage name="password" component="p" className={s.error} />

          <button type="submit">
            <FaCaretRight className={s.icon} />
          </button>
          <p className={s.question}>
            are you not registered? <a href="/register">click here</a>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
