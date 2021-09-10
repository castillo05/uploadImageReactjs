import logo from "./logo.svg";
import "./App.css";
import { React, useEffect, useState, useCallback } from "react";
import TarjetaFruta from "./components/TarjetaFruta";
import FormImage from './components/FormImage'
import SaveStorage from './components/SaveStorage'

function App() {
  return (
    <div className="App">

       <FormImage></FormImage>
        <SaveStorage></SaveStorage>
    </div>
  );
}

export default App;
