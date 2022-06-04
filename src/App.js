import "./App.css";
import { Fragment } from "react";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Loader from "./components/loader/Loader";
import Home from "./Pages/Home";
import { MissionAndTeam } from "./Pages/MissionAndTeam";
import { Support } from "./Pages/Support";
import { TopPlayers } from "./Pages/TopPlayer";
import { Athletic } from "./Pages/Athletic";
import  Art  from "./Pages/Art";
import Entertainment from "./Pages/Entertainment";

function App() {
  return (
    <Fragment>
     
          <Header />
          
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/MissionAndTeam">
            <MissionAndTeam />
          </Route>

          <Route path="/Support">
            <Support />
          </Route>

          <Route path="/TopPlayers">
            <TopPlayers />
          </Route>

          <Route path="/Athletic">
            <Athletic />
          </Route>
              
          <Route path="/Art">
            <Art />
          </Route>
          
          <Route path="/Entertainment">
            <Entertainment />
          </Route>

          <Footer />
          <Loader />
      
    </Fragment>
  );
}

export default App;
