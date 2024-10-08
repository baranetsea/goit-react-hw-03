import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/contactList/ContactList";
import SearchBox from "./components/searchbox/SearchBox";

const ProfileData = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

function App() {
  const [users, setUsers] = useState(() => {
    const sUsers = localStorage.getItem("name");
    const pUsers = JSON.parse(sUsers) ?? ProfileData;

    return pUsers;
  });

  useEffect(() => {
    const sUsers = JSON.stringify(users);
    localStorage.setItem("users", sUsers);
  }, [users]);

  const [filter, setFilter] = useState("");

  const findedUsers = users.filter((user) => user.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()));

  const addUser = (newUser) => {
    setUsers((PrevData) => {
      return [...PrevData, newUser];
    });
  };

  const deleteUser = (userId) => {
    const updatedUsers = users.filter((user) => user.id !== userId);
    setUsers(updatedUsers);
  };
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h2>PhoneBook</h2>

      <ContactForm addUser={addUser} users={setUsers} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList users={findedUsers} deleteUser={deleteUser} />
    </>
  );
}

export default App;
