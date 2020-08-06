import React, { Component, useState } from 'react';
import './App.scss';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Project from './Components/Project';
import Contact from './Components/Contact';
import { Switch, Route, Router, useLocation } from 'react-router-dom';
import {motion, AnimatePresence} from 'framer-motion'

function App() {
  const location = useLocation();

  const [navWidth, setNavWidth] = useState('long')


  return (
    

    <div className="App">
      <nav style={{flexBasis: (navWidth == 'long') ? '50%' : '300px'}}>
        <Navbar navWidth={navWidth} setNavWidth={setNavWidth}/>
      </nav>
      <div className="main">
          <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.key}>
            <Route exact path="/" render={() => {
              setNavWidth('long')
              return <Home/>
            }
            }/>
              
            <Route exact path="/about" render={() => {
              setNavWidth('short')
              return <About/>
            }
            }/>
            <Route exact path="/project" render={() => {
              setNavWidth('short')
              return <Project/>
            }
            }/>
            <Route exact path="/contact" render={() => {
              setNavWidth('short')
              return <Contact/>
            }
            }/>
          </Switch>
        </AnimatePresence>
      </div >

    </div>
  );
}

export default App;
