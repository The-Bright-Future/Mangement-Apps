import React, { createContext, useState } from 'react';
export const AuthContext = createContext();

const Contex = ({ children }) => {
  const [user, setUser] = useState('account');

  // const account = {
  //   displayName: 'Shihab',
  //   email: 'shihab@gmail.com',
  //   photoURL: '/assets/images/avatars/avatar_default.jpg',
  // };

  const logOut = () => {
    setUser(null);
  };

  const authInfo = {
    user,
    setUser,
  };

  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default Contex;
