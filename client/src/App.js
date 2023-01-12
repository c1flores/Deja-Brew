import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
import { StoreProvider } from "./utils/GlobalState";

import Home from "./pages/Home";
// import Menu from './pages/Menu';
// import MyOrder from './pages/MyOrder';
// import History from './pages/History';
import SignupForm from "./pages/SignUp";
import LoginForm from "./pages/Login";
// import NoMatch from "./pages/NoMatch";
// import Success from "./pages/Success";

// import FooterStrap from './components/Footer'
import NavBar from "./components/Nav";

const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem("id_token");
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : "",
      },
    });
  },
  uri: "http://localhost:3001/graphql",
});

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <StoreProvider>
          <NavBar />
          <Routes>
            <Route exact path="/" component={<Home />}></Route>
            {/* <Route exact path="/menu" component={<Menu/>}></Route> */}
            <Route exact path="/login" component={<LoginForm />}></Route>
            <Route exact path="/signup" component={<SignupForm />}></Route>
          </Routes>
          {/*<FooterStrap />*/}
        </StoreProvider>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
