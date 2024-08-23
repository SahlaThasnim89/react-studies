
import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import ToDo from './components/ToDo/ToDo';
import About from './components/about/about';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
      <Route path='/' Component={ToDo}/>
      <Route path='/about' Component={About}/>
      </Routes>
    </Router>
  );
}

export default App;
