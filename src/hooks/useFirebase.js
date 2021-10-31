import initializeFirebaseAuthentication from "../Firebase/firebase.init";
import {
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signOut,
  signInWithPopup,
} from "firebase/auth";
import { useEffect, useState } from "react";
initializeFirebaseAuthentication();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  // sign in with google
  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };
  //    if the state changed
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);

  // logout user
  const logout = () => {
    signOut(auth).then(() => {
      setUser({});
    });
  };
  return {
    logout,
    user,
    signInWithGoogle,
  };
};

export default useFirebase;
