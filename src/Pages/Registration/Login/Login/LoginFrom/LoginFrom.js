import { getAuth, signInWithEmailAndPassword } from "@firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginBanner from "../LoginBanner/LoginBanner";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../../../../Hooks/useAuth";

const LoginFrom = () => {
  const { signInUsingGoogle } = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const location = useLocation();
  const history = useHistory();
  const auth = getAuth();

  const redirect_uri = location.state?.from || "/home";

  const hanldeEmail = (e) => {
    setEmail(e.target.value);
  };

  const hanldePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    console.log(email, password);
    processLogin(email, password);
  };

  const processLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        history.push(redirect_uri);
        const user = result.user;
        console.log(user);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div>
      <LoginBanner></LoginBanner>
      <div className="container">
        <div className="row">
          <div className="w-50 md-w-75 mx-auto shadow my-5 rounded">
            <h3 className="text-center my-3">Enter An Account</h3>
            <div className="w-75 md-w-85 mx-auto my-5">
              <form onSubmit={handleRegistration} className="">
                {/* <div className="mb-3"> */}
                <div className="form-floating mb-3">
                  <input
                    onBlur={hanldeEmail}
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label for="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    onBlur={hanldePassword}
                    type="password"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                  />
                  <label for="floatingPassword">Password</label>
                </div>
                <div className="row mb-3 text-danger">{error}</div>
                <div className="text-center my-3">
                  <button type="submit" className="btn btns btn_Blue">
                    Submit
                  </button>
                </div>
                <p>
                  Forget Password? <Link>Click Here</Link>
                </p>
                <p>
                  Don't have an account? <Link to="/signup">Sing up</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginFrom;
