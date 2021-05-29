//Reference for Login/Logout

//import React, { createContext, useReducer, useContext } from "react";
// const StoreContext = createContext();
// const { Provider } = StoreContext;

// const initialState = {
//   isAuthenticated: false,
//   user: null,
// };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "LOGIN":
//       localStorage.setItem("user", JSON.stringify(action.payload.user));
//       return {
//         ...state,
//         isAuthenticated: true,
//         user: action.payload.user,
//       };
//     case "LOGOUT":
//       localStorage.clear();
//       return {
//         ...state,
//         isAuthenticated: false,
//         user: null,
//       };
//     default:
//       return state;
//   }
// };

// const StoreProvider = ({ value = [], ...props }) => {
//   const [state, dispatch] = React.useReducer(reducer, initialState);
//   return <Provider value={[state, dispatch]} {...props} />;
// };
// const useStoreContext = () => {
//   return useContext(StoreContext);
// };

// export { StoreProvider, useStoreContext };
