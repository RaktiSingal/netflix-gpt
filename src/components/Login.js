import { useRef, useState, useEffect } from "react";
import Header from "./Header";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { checkValidPassword, checkValidEmail } from "../utils/validate";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserData } from "../utils/UserSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isSignUp, handleSignUp] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passError, setPassError] = useState(false);

  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);

  const handleSaveButton = () => {
    //validate input
    const checkEmail = checkValidEmail(email.current.value);
    const checkPass = checkValidPassword(password.current.value);
    setEmailError(checkEmail);
    setPassError(checkPass);

    if (checkEmail || checkPass) return;

    // sign in or signup

    //add in firebase file and import
    // const auth = getAuth();

    if (isSignUp) {
      return createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          updateProfile(user, { displayName: fullName.current.value })
            .then(() => {
              dispatch(
                setUserData({
                  uid: auth.currentUser.uid,
                  displayName: auth.currentUser.displayName,
                  email: auth.currentUser.email,
                })
              );
              navigate("/browse");
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setPassError(`${errorCode} - ${errorMessage}`);
            });
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setPassError(`${errorCode} - ${errorMessage}`);
          // ..
        });
    }

    signInWithEmailAndPassword(
      auth,
      email.current.value,
      password.current.value
    )
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        dispatch(
          setUserData({
            uid: user.uid,
            displayName: user.displayName,
            email: user.email,
          })
        );
        navigate("/browse");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        setPassError(`${errorCode} - ${errorMessage}`);
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          setUserData({
            uid: user.uid,
            displayName: user.displayName,
            email: user.email,
          })
        );
        navigate("/browse");
        // ...
      } else {
        // User is signed out
        dispatch(setUserData(null));
        navigate("/");
      }
    });
  }, []);

  return (
    <div>
      <Header />
      <div className="w-full h-full">
        <img
          className="absolute w-full h-full"
          alt="logo"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c81956f1-5750-454c-9b3c-7a4d990d3d06/web/IN-en-20251208-TRIFECTA-perspective_d69f5f82-9a35-45d7-a7b6-9af6e0643bf5_large.jpg"
        />
      </div>
      <form className="absolute p-12 bg-black w-3/12 my-40 mx-auto right-0 left-0 opacity-85 text-white">
        <div className="font-bold text-3xl m-2">
          {!!isSignUp ? "Sign Up" : "Sign In"}
        </div>
        {!!isSignUp && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 m-2 w-full rounded-md bg-slate-800 border border-gray-400"
            ref={fullName}
            required
          />
        )}
        <input
          type="text"
          label="Email or mobile number"
          placeholder="Email or mobile number"
          className="p-4 m-2 w-full rounded-md bg-slate-800 border border-gray-400"
          ref={email}
          required
        />
        {!!emailError && (
          <p className="ml-2 mb-2 text-red-600 text-sm">{emailError}</p>
        )}
        <input
          type="password"
          placeholder="Password"
          className="p-4 m-2 w-full rounded-md bg-slate-800 border border-gray-400"
          ref={password}
          required
        />
        {!!passError && (
          <p className="ml-2 mb-2 text-red-600 text-sm">{passError}</p>
        )}
        <button
          type="button"
          className="bg-red-600 p-4 m-2 text-white w-full rounded-md"
          onClick={() => handleSaveButton()}
        >
          {!!isSignUp ? "Sign Up" : "Sign In"}
        </button>
        {!!isSignUp ? (
          <p className="m-2">
            <span className="text-gray-400">Already registered? </span>{" "}
            <span
              onClick={() => handleSignUp(false)}
              className="font-bold cursor-pointer"
            >
              Sign in now.
            </span>
          </p>
        ) : (
          <p className="m-2">
            <span className="text-gray-400">New to netflix? </span>
            <span
              onClick={() => handleSignUp(true)}
              className="font-bold cursor-pointer"
            >
              Sign up now.
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
