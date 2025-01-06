import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';
import Mainsection from './components/mainsection';
import { useState, useEffect } from 'react';
import Editfrm from './components/editfrm';

// DATA FROM LOCALSTORAGE 
let localStordata;
if (localStorage.getItem('skilldata') == null) {
  localStordata = [
    {
      skills: 'python',
      proficiency: 'beginner'
    }
  ];
} else {
  localStordata = JSON.parse(localStorage.getItem('skilldata'));
}



function App() {
  //open the form which is used to edit the user info
  const [isFormVisible, setIsFormVisible] = useState(false);
  // SET DATA TO LOCALSTORAGE 
  let [data, Setdata] = useState([localStordata]);
  useEffect(() => {
    localStorage.setItem('skilldata', JSON.stringify(data))
  }, [data]);
  // Function to toggle the form visibility
  const handleClick = () => {
    setIsFormVisible(!isFormVisible);
    // console.log('xyz');  // Logs when button is clicked
  };


  return (
    <>
      <Header />
      <Mainsection data={data} handleClick={handleClick} />
      {isFormVisible && <Editfrm />}
    </>
  );
}

export default App;



