import css from "./ContactList.module.css";
import Contact from "../contact/Contact";

const ContactList = ({ users }, deleteUser) => {
  return (
    <ul className={css.ul}>
      {users.map((user) => {
        return (
          <li className={css.li} key={user.id}>
            <Contact deleteUser={deleteUser} name={user.name} number={user.number} id={user.id} />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
