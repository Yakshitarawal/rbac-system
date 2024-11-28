import React, { useState } from 'react';
import './RoleManagement.css';

const RoleManagement = () => {
  const [roles, setRoles] = useState([
    { id: 1, name: 'Admin', permissions: 'Full Access' },
    { id: 2, name: 'Editor', permissions: 'Edit and Publish' },
  ]);

  const [newRole, setNewRole] = useState({
    name: '',
    permissions: 'Read-Only',
  });

  const handleAddRole = () => {
    if (newRole.name.trim() === '') return;
    setRoles([
      ...roles,
      { id: Date.now(), name: newRole.name, permissions: newRole.permissions },
    ]);
    setNewRole({ name: '', permissions: 'Read-Only' });
  };

  const handleDeleteRole = (id) => {
    setRoles(roles.filter((role) => role.id !== id));
  };

  return (
    <div className="role-management">
      <h2>Manage Roles</h2>

      {/* Add Role Form */}
      <div className="add-role-form">
        <input
          type="text"
          placeholder="Role Name"
          value={newRole.name}
          onChange={(e) =>
            setNewRole({ ...newRole, name: e.target.value })
          }
        />
        <select
          value={newRole.permissions}
          onChange={(e) =>
            setNewRole({ ...newRole, permissions: e.target.value })
          }
        >
          <option value="Read-Only">Read-Only</option>
          <option value="Edit and Publish">Edit and Publish</option>
          <option value="Full Access">Full Access</option>
        </select>
        <button onClick={handleAddRole}>Add Role</button>
      </div>

      {/* Roles Table */}
      <table className="roles-table">
        <thead>
          <tr>
            <th>Role Name</th>
            <th>Permissions</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {roles.map((role) => (
            <tr key={role.id}>
              <td>{role.name}</td>
              <td>{role.permissions}</td>
              <td>
                <button
                  className="delete-button"
                  onClick={() => handleDeleteRole(role.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RoleManagement;
