import React from "react";

import './css/App.css';
import './css/props.css';
import './css/uifont.css';

//screen
import Header from "./screens/header";
import Sidebar from "./screens/sidebar";

function App() {
  return (
    <div className="App flex">
      
      <Sidebar/>  
    </div>
  );
}

export default App;
