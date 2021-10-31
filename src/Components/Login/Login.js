import React from "react";
import "./Login.css";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../hooks/useAuth";
import googleImg from "../../images/google-img.png";
const Login = () => {
  const { signInWithGoogle } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_url = location.state?.from || "/myorders";
  const handleGoogleSignIn = () => {
    signInWithGoogle().then(() => {
      history.push(redirect_url);
    });
  };
  return (
    <div className="mt-5 pt-5">
      <h1 className="fw-bolder ">Please Login</h1>
      <div className="mt-4">
        <span onClick={handleGoogleSignIn} className="google-login">
          <img className="google-img" src={googleImg} alt="" />
        </span>
      </div>
    </div>
  );
};

export default Login;
