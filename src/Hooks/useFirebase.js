import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  GithubAuthProvider,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Registration/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const auth = getAuth();
  // Login By Google
  const signInUsingGoogle = () => {
    setIsLoading(true);
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider).catch((error) => {
      setError(error.message);
    });
  };
  // Login By GitHub

  const githubProvider = new GithubAuthProvider();
  const signInUsingGithub = () => {
    setIsLoading(true);
    return signInWithPopup(auth, githubProvider).catch((error) => {
      setError(error.message);
    });
  };
  // SignUp by Email And Password

  // Login By Email And Password

  // Log Out
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, []);
  return {
    user,
    isLoading,
    setIsLoading,
    setError,
    signInUsingGoogle,
    signInUsingGithub,
    logOut,
  };
};

export default useFirebase;
