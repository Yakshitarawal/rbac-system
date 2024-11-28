import React, { useState, useEffect } from "react";
import "./UserManagement.css";

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [newUserName, setNewUserName] = useState(""); // State for input field

  // Simulate initial API call
  useEffect(() => {
    const initialUsers = [
      { id: 1, name: "Neha" },
      { id: 2, name: "Rohan" },
    ];
    setUsers(initialUsers);
  }, []);

  // Function to add a new user
  const handleAddUser = () => {
    if (!newUserName.trim()) {
      alert("User name cannot be empty!");
      return;
    }
    const newUser = {
      id: users.length + 1, // Generate a new unique ID
      name: newUserName,
    };
    setUsers([...users, newUser]); 
    setNewUserName(""); // Clear the input field
  };

  return (
    <div className="user-management">
      <h2>User Management</h2>
      <img
        src="../pic/images.jpg/600x300"
        alt="User Management Illustration"
        className="management-image"
      />
      <div className="add-user-form">
        <input
          type="text"
          placeholder="Enter user name"
          value={newUserName}
          onChange={(e) => setNewUserName(e.target.value)}
        />
        <button onClick={handleAddUser}>Add User</button>
      </div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name}
            <button
              onClick={() =>
                setUsers(users.filter((existingUser) => existingUser.id !== user.id))
              }
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserManagement;
