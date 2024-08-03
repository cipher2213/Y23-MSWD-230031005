import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Courses from './components/Courses';
import Faculty from './components/Faculty';
import Students from './components/Student';


import './App.css'; 

function App() {
  return (
    <div className="App">
      <Header />
      <Courses />
      <Faculty />
      <Students />
      
      <Footer />
    </div>
  );
}


export default App;
