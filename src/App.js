import "./App.css";
import Movie from "./Movie";
import axios from "axios";
import react from "react";
import { useState, useEffect } from "react";

function App() {
  return (
    <div className="App">
      <Movie />
    </div>
  );
}

export default App;
