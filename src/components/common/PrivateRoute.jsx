import {useAuth} from '../../context/AuthContext';
import {Navigate, Outlet} from 'react-router-dom';

const PrivateRoute = () => {
  const {isAuthenticated} = useAuth();

  return isAuthenticated ? <Outlet /> : <Navigate to='/' replace />;
};

export default PrivateRoute;
