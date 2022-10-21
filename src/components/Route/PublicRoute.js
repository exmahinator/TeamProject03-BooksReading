import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../../redux/selectors';


export function PublicRoute({ children, redirect = '/', restricted = false }) {
  const isLoggedIn = useSelector(getIsLoggedIn);
// публичный ограниченный маршрут 
  return isLoggedIn && restricted ? <Navigate to={redirect} /> : children;
}

export default PublicRoute;