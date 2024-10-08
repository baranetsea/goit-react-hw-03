import { Field, Form, Formik } from "formik";
import { nanoid } from "nanoid";

// const inValues = {
//   name: "",
//   number: "",
//   id: nanoid(),
// };

// const addProfile = ({ onAddProfile }) => {};
// const handleSubmit = (values) => {
//   addUser({ values });
//   // form.reset();
//   console.log(values);
// };

const ContactForm = ({ addUser }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    addUser({
      name: e.target.elements.name.value,
      number: e.target.elements.number.value,
      id: nanoid(),
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" />
      <input type="text" name="number" />
      <button type="submit">Add user</button>
    </form>

    // <Formik initialValues={{ inValues }} onSubmit={handleSubmit}>
    //   <Form>
    //     <Field type="text" name="name" />
    //     <Field type="text" name="number" />
    //     <button type="submit">send</button>
    //   </Form>
    // </Formik>
  );
};

export default ContactForm;
