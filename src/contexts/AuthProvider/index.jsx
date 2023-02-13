import P from 'prop-types';

import { useState } from 'react';

import { AuthContext } from './context';
import { userDefaultData } from './data';

export const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(userDefaultData);

  const login = (email, password) => {
    setUserData((prevState) => ({ ...prevState, email, password }));
  };

  const logout = () => {
    setUserData({ email: null, name: null, password: null });
  };

  const signUp = (name, email, password) => {
    setUserData({ name, email, password });
  };

  return (
    <AuthContext.Provider value={{ userData, login, logout, signUp }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: P.node.isRequired,
};
