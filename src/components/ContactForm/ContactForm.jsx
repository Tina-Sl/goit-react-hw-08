import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

import { useDispatch } from "react-redux";
import { addContact, updateContact } from "../../redux/contacts/operations";

import s from "./ContactForm.module.css";

let verNumber = "";
//  дозволимо користувачеві вводити номер телефона без дефісів

const orderSchema = Yup.object().shape({
  name: Yup.string()
    .matches(
      /^[a-zA-Zа-щА-ЩЬьЮюЯяЇїІіЄєҐґ -]+$/,
      "Only English or Ukrainian letters, space and hyphen"
    )
    .min(3, "must be at least 3 long")
    .max(50, "must be 50 characters or less")
    .required("this field is required"),
  number: Yup.string()
    .test("phoneValid", "must be in format xxx-xx-xx or xxxxxxx", (value) =>
      isPhone(value)
    )
    .required("this field is required"),
});

const isPhone = (value) => {
  const isDigitsOnly = /^\d+$/.test(value);
  if (isDigitsOnly && value.length === 7) {
    value = value.slice(0, 3) + "-" + value.slice(3, 5) + "-" + value.slice(5);
  }
  verNumber = value;
  const regex = /^\d{3}-\d{2}-\d{2}$/;
  return regex.test(value);
};

const ContactForm = ({
  contact = { id: null, name: "", number: "" },
  onClose,
}) => {
  const dispatch = useDispatch();
  const initialValues = {
    name: contact.name,
    number: contact.number,
  };
  const isAdd = !contact.name;
  const textBtn = isAdd ? "Add contact" : "Save";

  const handleSubmit = (values, options) => {
    values.number = verNumber;
    if (isAdd) {
      dispatch(addContact(values));
    } else {
      dispatch(
        updateContact({
          id: contact.id,
          name: values.name,
          number: values.number,
        })
      );
      onClose();
    }
    options.resetForm();
  };

  return (
    <div className={s.formWrapper}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={orderSchema}
      >
        <Form className={s.formBox}>
          <label className={s.label}>
            <span>Name:</span>
            <Field
              name="name"
              type="text"
              autoComplete="off"
              className={s.input}
            />
            <ErrorMessage name="name" component="p" className={s.error} />
          </label>
          <label className={s.label}>
            <span>Number:</span>
            <Field
              name="number"
              type="text"
              autoComplete="off"
              className={s.input}
              placeholder="XXX-XX-XX or XXXXXXX (7 digits)"
            />
            <ErrorMessage name="number" component="p" className={s.error} />
          </label>
          <div className={s.btnBox}>
            <button className={s.button} type="submit">
              {textBtn}
            </button>
            {!isAdd && (
              <button
                className={s.button}
                type="button"
                onClick={() => {
                  onClose();
                }}
              >
                Cancel
              </button>
            )}
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
