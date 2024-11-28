import React, { useState } from 'react';
import './PermissionsManagement.css';

const PermissionsManagement = () => {
  const [permissions, setPermissions] = useState([
    { id: 1, name: 'View Dashboard', level: 'Read-Only' },
    { id: 2, name: 'Manage Users', level: 'Read and Write' },
  ]);

  const [newPermission, setNewPermission] = useState({
    name: '',
    level: 'Read-Only',
  });

  const handleAddPermission = () => {
    if (newPermission.name.trim() === '') return;
    setPermissions([
      ...permissions,
      { id: Date.now(), name: newPermission.name, level: newPermission.level },
    ]);
    setNewPermission({ name: '', level: 'Read-Only' });
  };

  const handleDeletePermission = (id) => {
    setPermissions(permissions.filter((permission) => permission.id !== id));
  };

  return (
    <div className="permissions-management">
      <h2>Manage Permissions</h2>

      {/* Add Permission Form */}
      <div className="add-permission-form">
        <input
          type="text"
          placeholder="Permission Name"
          value={newPermission.name}
          onChange={(e) =>
            setNewPermission({ ...newPermission, name: e.target.value })
          }
        />
        <select
          value={newPermission.level}
          onChange={(e) =>
            setNewPermission({ ...newPermission, level: e.target.value })
          }
        >
          <option value="Read-Only">Read-Only</option>
          <option value="Read and Write">Read and Write</option>
        </select>
        <button onClick={handleAddPermission}>Add Permission</button>
      </div>

      {/* Permissions Table */}
      <table className="permissions-table">
        <thead>
          <tr>
            <th>Permission Name</th>
            <th>Access Level</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {permissions.map((permission) => (
            <tr key={permission.id}>
              <td>{permission.name}</td>
              <td>{permission.level}</td>
              <td>
                <button
                  className="delete-button"
                  onClick={() => handleDeletePermission(permission.id)}
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

export default PermissionsManagement;
