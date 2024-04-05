import "./App.css";
import Routes from "./routes";
import Sidebar from "./components/sidebar";
import NavBar from "./components/navBar";
import React from "react";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="content-wrapper">
        <Sidebar />
        <div className="dashboard-pages">
          <Routes />
        </div>
      </div>
    </div>
  );
}

export default App;
