import React from "react";
// add any needed imports here
import { useSelector } from "react-redux";

function Users() {

  const users = useSelector((state) => state.users);
  const userCount = useSelector((state) => state.users.length)

  return (
    <div>
      <ul>
        Users!
        {users.map(user => <li key={user.username}>Username: {user.username} Hometown: {user.hometown}</li>)}
      </ul>
      Total Users: {userCount}
    </div>
  );
}

export default Users;
