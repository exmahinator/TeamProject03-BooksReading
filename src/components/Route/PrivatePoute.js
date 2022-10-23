import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../../redux/selectors';


function PrivateRoute({ children, redirect = '/' }) {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return isLoggedIn  ? children : <Navigate to={redirect} />;
}

export default PrivateRoute;