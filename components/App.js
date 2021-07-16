import React from 'react';

import {} from '../assets/css/App.css';
import { useState } from 'react';

import Footer from './Footer';

import WelcomePage from '../pages/WelcomePage';
import SelectAvatarPage from '../pages/SelectAvatarPage';
import ConfirmAvatarPage from '../pages/ConfirmAvatarPage';
import GamePlayPage from '../pages/GamePlayPage';
import SummaryPage from '../pages/SummaryPage';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// import MusicContext from '../context/MusicContext';
import RulesContext from '../context/RulesContext';
import ModalContext from '../context/ModalContext';


const App = () => {

  const [rulesStatus, setRulesStatus] = useState({status: false});
  const [modalStatus, setModalStatus] = useState({status: false});

  return (
    <>

    
      <main id="main">

      <RulesContext.Provider value={{rulesStatus, setRulesStatus}}>
      <ModalContext.Provider value={{modalStatus, setModalStatus}}>

        <Router>
          <Switch>

            <Route exact path="/">
              <WelcomePage/>
            </Route>


            <Route path="/selectPlayer">
              <SelectAvatarPage/>
            </Route>

            <Route path="/confirmPlayer">
              <ConfirmAvatarPage/>
            </Route>

            <Route path="/playGame">
              <GamePlayPage/>
            </Route>

            <Route path="/summary">
              <SummaryPage/>
            </Route>     

          </Switch>   
        </Router>       



        </ModalContext.Provider>
        </RulesContext.Provider>

      </main>
      <Footer/>
    </>
  )
}

export default App;

