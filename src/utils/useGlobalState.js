import React, { createContext, useReducer, useContext } from "react";
import PropTypes from "prop-types";

/* Action Types */
const UPDATE_SIGN_UP_DATA = "UPDATE_SIGN_UP_DATA";

/* Define a context and a reducer for updating the context */
const GlobalStateContext = createContext();

const initialState = {
  signUpData: {},
};

const globalStateReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_SIGN_UP_DATA:
      return {
        ...state,
        signUpData: {
          ...state.signUpData,
          ...action.payload,
        },
      };

    default:
      return state;
  }
};

/* Export a component to provide the context to its children. This is used in our _app.js file */

export const GlobalStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    globalStateReducer,
    initialState,
  );

  return (
    <GlobalStateContext.Provider value={[state, dispatch]}>
      {children}
    </GlobalStateContext.Provider>
  );
};

GlobalStateProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element]),
};

/*
Default export is a hook that provides a simple API for updating the global state.
This also allows us to keep all of this state logic in this one file
*/

const useGlobalState = () => {
  const [state, dispatch] = useContext(GlobalStateContext);

  const updateSignUpData = (payload) => {
    dispatch({
      type: UPDATE_SIGN_UP_DATA,
      payload,
    });
  };

  return {
    updateSignUpData,
    signUpData: { ...state.signUpData },
  };
};

export default useGlobalState;
