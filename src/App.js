import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Slider from "./components/Slider";
import Products from "./components/Products";
import Recomandation from "./components/Recomandation";
import Newslatter from "./components/Newslatter";
import Footer from "./components/Footer";
import Landing from "./screen/Landing";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./screen/About";
import Signin from "./screen/Signin";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    //add local storage
    localStorage.getItem("logedIn") === "false" &&
      localStorage.setItem("logedIn", false);
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />}>
            {/* <Route index element={<Home />} />
            <Route path="teams" element={<Teams />}>
            <Route path=":teamId" element={<Team />} />
            <Route path="new" element={<NewTeamForm />} />
            <Route index element={<LeagueStandings />} />
          </Route> */}
          </Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/signin" element={<Signin />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
