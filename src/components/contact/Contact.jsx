import css from "./Contact.module.css";

const Contact = ({ name, number, id, deleteUser }) => {
  return (
    <div className={css.div}>
      <p>👤 {name}</p>
      <p>☎️ {number}</p>
      <button type="button" onClick={() => deleteUser(id)}>
        🗑 Delete
      </button>
    </div>
  );
};

export default Contact;
