import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Navigation from './layout/navbar/Navbar'
import Footer from './layout/footer/Footer'

import Index from './pages/index/Index'
import CoastersList from './pages/coastersList/CoastersList'
import CoasterDetails from './pages/coasterDetails/CoasterDetails'

import './App.css'



function App() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route path="/" exact render={() => <Index />} />
        <Route path="/coasters" exact render={() => <CoastersList />} />
        <Route path="/coasters/details/:coaster_id" render={props => <CoasterDetails {...props} />} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
