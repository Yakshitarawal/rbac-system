const mockApi = {
    users: [{ id: 1, name: "Neha" }],
    roles: [{ id: 1, name: "Admin" }],
    permissions: [{ id: 1, name: "Read" }, { id: 2, name: "Write" }],
  
    getUsers: async () => mockApi.users,
    addUser: async (user) => {
      const newUser = { id: Date.now(), ...user };
      mockApi.users.push(newUser);
      return newUser;
    },
    deleteUser: async (id) => {
      mockApi.users = mockApi.users.filter((user) => user.id !== id);
    },
    getRoles: async () => mockApi.roles,
    addRole: async (role) => {
      const newRole = { id: Date.now(), ...role };
      mockApi.roles.push(newRole);
      return newRole;
    },
    deleteRole: async (id) => {
      mockApi.roles = mockApi.roles.filter((role) => role.id !== id);
    },
    getPermissions: async () => mockApi.permissions,
  };
  
  export default mockApi;
  