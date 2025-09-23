import { useReducer } from "react";
const initialState = {
  user: { name: "best", email: "gf@.com", password: "1234" },
  loading: false,
  error: null,
};
/**
 * Handles authentication related actions.
 * @param {object} state - Current state of the application.
 * @param {object} action - Action being processed.
 * @returns {object} - New state of the application.
 */
function authReducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case "SIGN_IN":
      return {
        user: payload,
        loading: false,
        error: null,
      };

    case "SIGN_IN_ERROR":
      return {
        user: null,
        loading: false,
        error: payload.errorMessage,
      };

    case "SIGN_UP":
      return {
        user: payload,
        loading: false,
        error: null,
      };

    case "SIGN_UP_ERROR":
      return {
        user: null,
        loading: false,
        error: payload.errorMessage,
      };

    default:
      return state;
  }
}
/**
 * Returns an array of functions to interact with the authentication reducer.
 * @returns {array} - An array containing the state, dispatch function, and two functions to sign in and log in.
 */
function useAuthReducer() {
  const [authState, authDispatch] = useReducer(authReducer, initialState);

  const handleSignIn = async (userName, userEmail, userPassword) => {
    authDispatch({
      type: "SIGN_UP",
      payload: { userName, userEmail, userPassword },
    });
  };

  const handleLogIn = async (email, password) => {
    authDispatch({ type: "SIGN_IN", payload: { email, password } });
  };

  return [authState, authDispatch, handleSignIn, handleLogIn];
}
export default useAuthReducer;
