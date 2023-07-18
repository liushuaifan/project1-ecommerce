import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function AuthLayout() {
  const { isAuthenticated, user } = useSelector(state => state.user);

  const location = useLocation();

//if use token not mathch, go to error page
  // if(user.)

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location.pathname }} />;
  }

  return <Outlet />;
}
