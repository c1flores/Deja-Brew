import React, { createContext, useContext } from "react";
import { useProductReducer } from "./reducers";

// Create our theme context using React.CreateContext()
const StoreContext = createContext();
const { Provider } = StoreContext;

// Creating our theme provider. Accepts an argument of "props"..
const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useProductReducer({
    drinks: [],
    cart: [],
    cartOpen: false,
    categories: [],
    currentCategory: "",
  });

  // The provider component will wrap all other components inside of it that need access to our global state
  return <Provider value={[state, dispatch]} {...props} />;
};

// Create a custom hook that allows easy access to our ThemeContext values
const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
