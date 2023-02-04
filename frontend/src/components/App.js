import React, { Component } from "react";
import { createRoot } from "react-dom/client";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./pagecomponents/Header";
import PuppiesAndDogs from "./pages/PuppiesAndDogs";
import PetPage from "./pages/PetPage";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Login from "./pages/Login";

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const darkTheme = createTheme({
      palette: {
        mode: "dark",
      },
    });

    return (
      <ThemeProvider theme={darkTheme}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="puppies-and-dogs-for-sale" element={<PuppiesAndDogs />} />
          <Route path="detail" element={<PetPage />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </Router>
      </ThemeProvider>
    );
  }
}
const appDiv = document.getElementById("app");

const root = createRoot(appDiv);
root.render(<App tab="home" />);
