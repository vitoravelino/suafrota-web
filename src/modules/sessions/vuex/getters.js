export default {
  currentUser: ({ user }) => user,

  availableCustomers: ({ user }) => user.available_customers,
};
