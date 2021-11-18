import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbars from './components/Navbar';
import Sections from './components/Sections'
import {} from 'reactstrap';


export default function App(){
  let [stateUser, setStateUser] = useState([{FISH: 'admin', login:'admin', parol:'admin', isLogin: true}]);
  let isLoginProfile = stateUser.map((item,index)=>{return item.isLogin})
  let loginVar = true;

  const loginFunc = () => {

  }
  
    return (
      <Router>
        <Navbars isLogin={loginVar}  loginFunc = {loginFunc} stateUser={stateUser} setStateUser={setStateUser}/>
        <Sections />
        
      </Router>
    )
}

