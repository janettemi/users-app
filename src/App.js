import React,{ useState } from "react";
import AddUsers from "./Component/User/AddUser";
import UsersList from "./Component/User/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName,uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList, 
        {name: uName, age: uAge ,id: Math.random().toString()}
      ];
    });
  }

  return (
    <div>
      <AddUsers onAddUser={addUserHandler}></AddUsers>
      <UsersList users={usersList}></UsersList>
    </div>
  );
}

export default App;
