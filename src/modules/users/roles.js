const roles = {
  admin: 'Administrador',
  manager: 'Gerente',
  user: 'Usuário',
};

const assignable = {
  admin: ['admin', 'manager', 'user'],
  manager: ['manager', 'user'],
  user: ['user'],
};

/**
 * [rolesFor description]
 * @param  {[type]} role [description]
 * @return {[type]}      [description]
 */
function rolesFor(role) {
  const assignableRoles = assignable[role];
  const outputRoles = {};

  assignableRoles.forEach((key) => {
    outputRoles[key] = roles[key];
  });

  return outputRoles;
}

/**
 * [name description]
 * @param  {[type]} role [description]
 * @return {[type]}      [description]
 */
function name(role) {
  return roles[role];
}

export default {
  name,
  for: rolesFor,
};
