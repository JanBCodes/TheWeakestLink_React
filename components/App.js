import React from 'react';

import {} from '../assets/css/App.css'

import Footer from './Footer';

import WelcomePage from '../pages/WelcomePage'
import SelectAvatarPage from '../pages/SelectAvatarPage'
import ConfirmAvatarPage from '../pages/ConfirmAvatarPage'
import GamePlayPage from '../pages/GamePlayPage'
import SummaryPage from '../pages/SummaryPage'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


const App = () => {


// context


  return (
    <>
      <main id="main">
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
      </main>
      <Footer/>
    </>
  )
}

export default App;

