import { useEffect, useState } from 'react';
import initializeAuthenticaion from '../Firebase/firebase.init';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';

initializeAuthenticaion();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState('');
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const signWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
        console.log(result.user);
      })
      .catch((error) => {
        // Handle Errors here.
        console.log(error.message);
        setError(error.message);
      });
  };

  // handling user state changes
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        // User is signed out
        setUser({});
      }
    });
  }, []);

  // signout user
  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setUser({});
      })
      .catch((error) => {
        // An error happened.
        setError('');
      });
  };
  return {
    user,
    error,
    signWithGoogle,
    userSignOut,
  };
};

export default useFirebase;
