import { useState } from "react";
import { UserTable } from "./components/UserTable";
import { v4 as uuid } from "uuid";
import AddUserForm from "./components/AddUserForm";
import EditUserForm from "./components/EditUserForm";

const userData = [
  { id: uuid(), name: "maykel", username: "chachito" },
  { id: uuid(), name: "oliver", username: "oliverato" },
  { id: uuid(), name: "josue", username: "el camaron domido" },
];

function App() {
  //state
  const [users, setUsers] = useState(userData);
  const [editing, setEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    id: null,
    name: "",
    username: "",
  });
  //agregar nuevo usuario
  const addUser = (user) => {
    user.id = uuid();
    setUsers([...users, user]);
  };

  //eliminar usuarios
  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  //editar usuario
  const editUser = (user) => {
    setEditing(true);
    setCurrentUser({
      id: user.id,
      name: user.name,
      username: user.username,
    });
  };
  //actualizar usuario
  const udateUser = (id, updateUser) => {
    setEditing(false);
    setUsers(users.map((user) => (user.id === id ? updateUser : user)));
  };

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <div>
              <h2>Edit user</h2>
              <EditUserForm currentUser={currentUser} udateUser={udateUser} />
            </div>
          ) : (
            <div>
              <h2>add user</h2>
              <AddUserForm addUser={addUser} />
            </div>
          )}
        </div>
        <div className="flex-large">
          <h2>view users</h2>
          <UserTable
            users={users}
            deleteUser={deleteUser}
            editUser={editUser}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
