import P from 'prop-types';

import { useAuthContext } from '../../hooks/useAuthContext';

import { Navigate } from 'react-router-dom';

export const RequireAuth = ({ children }) => {
  const { userData } = useAuthContext();

  if (!userData.email) {
    return <Navigate to="/login" />;
  }

  return children;
};

RequireAuth.propTypes = {
  children: P.node.isRequired,
};
