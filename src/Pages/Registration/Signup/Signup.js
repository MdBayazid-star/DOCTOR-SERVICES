import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import { useHistory, useLocation } from "react-router";
import LoginBanner from "../Login/Login/LoginBanner/LoginBanner";
import "./Signup.css";
import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from "@firebase/auth";

const Signup = () => {
  const { signInUsingGoogle, signInUsingGithub } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/home";
  const handleLogin = () => {
    signInUsingGoogle().then((result) => {
      history.push(redirect_uri);
    });
  };
  // Sign by GitHub
  const handleGithubLogin = () => {
    signInUsingGithub().then((result) => {
      history.push(redirect_uri);
    });
  };
  // Sign Up By Email And Password
  const auth = getAuth();
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const hanldeEmail = (e) => {
    setEmail(e.target.value);
  };
  const hanldePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleRegistration = (e) => {
    e.preventDefault();
    console.log(email, password);
    if (password.length < 6) {
      setError("Password Must be at least 6 characters long.");
      return;
    }
    if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
      setError("Password Must contain 2 upper case");
      return;
    }
    registerNewUser(email, password);
  };
  const registerNewUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        history.push(redirect_uri);
        const user = result.user;
        console.log(user);
        setError("");
        setUserName();
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  const setUserName = () => {
    updateProfile(auth.currentUser, { displayName: name })
      .then((result) => {})
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage);
      })
      .finally(() => setIsLoading(false));
  };
  return (
    <div>
      <LoginBanner></LoginBanner>
      <div>
        <div className="container">
          <div className="row">
            <div className="w-50 md-w-75  mx-auto shadow my-5 rounded">
              <h3 className="text-center my-3">Create An Account</h3>
              <div className="w-75 md-w-85  mx-auto my-5">
                <div className="form-floating mb-3">
                  <input
                    onBlur={handleNameChange}
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInput">User Name</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    onBlur={hanldeEmail}
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    onBlur={hanldePassword}
                    type="password"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                  />
                  <label htmlFor="floatingPassword">Password</label>
                </div>
                <div className="row mb-3 text-danger">{error}</div>
                <div className="text-center my-3">
                  <Link to="">
                    <button
                      onClick={handleRegistration}
                      className="btn btns btn_Blue"
                    >
                      Sign Up
                    </button>
                  </Link>
                </div>
                <p>
                  Already Have a Account? <Link to="login">Sing In</Link>
                </p>
              </div>
              <hr />
              <div className="my-3  text-center">
                <div className="row d-flex justify-content-center align-items-center">
                  <div className="col-lg-6 col-md-12 col-sm-12 ">
                    <button
                      onClick={handleLogin}
                      className="btn btns btn_Outline-Blue border_blue me-3 smMe"
                    >
                      <i className="fab fa-google"></i> Google SingIn
                    </button>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <button
                      className="btn btns btn_Outline-Blue border_blue"
                      onClick={handleGithubLogin}
                    >
                      <i className="fab fa-github"></i> Github SingIn
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
