import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AppNavbar from "./components/AppNavbar";
import { Container } from "reactstrap";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppNavbar></AppNavbar>
        <Container></Container>
      </div>
    </Provider>
  );
}

export default App;
