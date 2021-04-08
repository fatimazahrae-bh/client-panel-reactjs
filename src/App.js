import logo from './logo.svg';
import React, { Component } from 'react';
import Contacts from './components/contacts/Contacts';
import { Provider } from './components/context'
import './App.css';
import Navbar from './components/navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';



function App() {
   
  let name = "bahadou fatima zahrae"; 
  let num1 = 12;
  let num2 =  5;

  return (
    <Provider>
    <div className="App">
      <Navbar title="Contacts list"/>
      <Contacts/>
      {/* <Contact name="bahadou badr" tel="0654328976" email="badr@gmail.com"/>
      <Contact name="bahadou fatima zahrae" tel="0656439811" email="fati@gmail.com"/>
      <Contact name="bahadou amine" tel="060655418971" email="amine@gmail.com"/> */} 
    </div>
    </Provider>
  );
}

export default App;
