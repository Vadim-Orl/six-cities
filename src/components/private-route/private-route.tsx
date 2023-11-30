import {Navigate} from "react-router-dom";

type PrivateRouteProps = {
  children: JSX.Element;
}

export const PrivateRoute = ({ children} : PrivateRouteProps) => {
  const isAuthenticated = true;
      
  if (isAuthenticated ) {
    return children
  }
    
  return <Navigate to="/" />
}