import { ErrorMessage, Field, Form, Formik } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import css from "./ContactForm.module.css";

const phoneNumberRegex = /^\d{3}-\d{3}-\d{4}$/;

const AddProfileValidation = Yup.object({
  name: Yup.string()
    .min(3, "Name must be min 3 characters")
    .max(50, "Name must be max 50 characters")
    .required("Name is required"),
  number: Yup.string().required("Phone is required").matches(phoneNumberRegex, "Phone number format is  xxx-xxx-xxxx"),
});

const initialValues = {
  name: "",
  number: "",
  id: nanoid(),
};

const ContactForm = ({ addUser }) => {
  const handleSubmit = (values, actions) => {
    addUser(values);
    actions.resetForm();

    // addUser({
    //   name: e.target.elements.name.value,
    //   number: e.target.elements.number.value,
    //   id: nanoid(),
    // });
  };
  return (
    // <form className={css.form} onSubmit={handleSubmit}>
    //   <input type="text" name="name" />
    //   <input type="text" name="number" />
    //   <button type="submit">Add user</button>
    // </form>

    <Formik validationSchema={AddProfileValidation} initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={css.form}>
        <label className={css.label}>
          <span className={css.span}>Name:</span>
          <Field type="text" name="name" placeholder="Ivan Ivanov" />
          <ErrorMessage className={css.error} name="name" component="span" />{" "}
        </label>
        <label className={css.label}>
          <span className={css.span}>Number:</span>
          <Field type="text" name="number" placeholder="xxx-xxx-xxxx" />
          <ErrorMessage className={css.error} name="number" component="span" />
        </label>
        <button className={css.button} type="submit">
          Add user
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
