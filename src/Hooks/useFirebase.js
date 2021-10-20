import { useEffect, useState } from 'react';
import initializeAuthenticaion from '../Firebase/firebase.init';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GithubAuthProvider,
  updateProfile,
} from 'firebase/auth';

initializeAuthenticaion();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();
  // Google Sign in
  const signWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // handle github sign in

  const signWithGitHub = () => {
    signInWithPopup(auth, gitHubProvider)
      .then((result) => {
        // console.log(result.user);
        setUser(result.user);
      })
      // Handle Errors here.
      .catch((error) => {
        // console.log(error.message);
        setError(error.message);
      });
  };

  // handle registraion
  const handleRegistraion = (email, password, name) => {
    if (password.length < 6) {
      setError('Password must be 6 character long');
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setUserName(name);
        setError('');
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };

  // user update profile
  const setUserName = (name) => {
    updateProfile(auth.currentUser, { displayName: name }).then((result) => {});
  };

  // user signIn with email and password

  const userEmailPasswordLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
    // .then((result) => {
    //   // Signed in
    //   setUser(result.user);
    //   setError('');
    // })
    // .catch((error) => {
    //   console.log(error.message);
    //   setError(error.message);
    // });
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
      setIsLoading(false);
    });
  }, [auth]);

  // signout user
  const userSignOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setUser({});
      })
      .catch((error) => {
        // An error happened.
        setError('');
      })
      .finally(() => setIsLoading(false));
  };
  return {
    user,
    error,
    isLoading,
    signWithGoogle,
    userSignOut,
    handleRegistraion,
    userEmailPasswordLogin,
    signWithGitHub,
    setError,
    setUser,
  };
};

export default useFirebase;
