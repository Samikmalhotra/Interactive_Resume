import './App.css';
import React, {Fragment} from 'react'
import Navbar from './components/Navbar'
import Head from './components/Head'
import Profile from './components/Profile'
import Education from './components/Education'
import Skills from './components/Skills'
import Achievements from './components/Achievements'

const App = () => {
  return (
    <Fragment>
      <Navbar/>
      <Head/>
      <Profile/>
      <Education/>
      <Skills/>
      <Achievements/>
    </Fragment>
  );
}

export default App;
