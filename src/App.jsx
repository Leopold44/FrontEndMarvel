import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Character from "./components/Character";
import Comics from "./components/Comics";
import Favoris from "./components/Favoris";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Character/:id" element={<Character />}></Route>
        <Route path="/comics" element={<Comics />}></Route>
        <Route path="/favorite" element={<Favoris />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
