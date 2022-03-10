import React from "react";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import { isCheckLogin } from "../../utils/cookie";

function RequireAuth({ children }) {
  const cookie = document.cookie?.split(";");
  const isLogin = isCheckLogin(cookie);
  return isLogin ? children : <Navigate to="/" />;
}

RequireAuth.propTypes = {
  children: PropTypes.element.isRequired,
};

export default RequireAuth;
