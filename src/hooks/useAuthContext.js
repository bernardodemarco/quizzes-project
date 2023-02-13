import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider/context';

export const useAuthContext = () => {
  return useContext(AuthContext);
};
