import './App.css';
import React, {Fragment} from 'react'
import Navbar from './components/Navbar'
import Head from './components/Head'
import Profile from './components/Profile'
import Education from './components/Education'

const App = () => {
  return (
    <Fragment>
      <Navbar/>
      <Head/>
      <Profile/>
      <Education/>
    </Fragment>
  );
}

export default App;
