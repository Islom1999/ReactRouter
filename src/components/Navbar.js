import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link, NavLink} from "react-router-dom";
import {} from 'reactstrap';

const Navbars = (props) => {
    let a = props.isLogin;
  
  const [islogin, setIsLogin] = useState(a);
  const isloginFunc = () => setIsLogin(!islogin);


  return (
    <div>
        <div className="navbar">
            <div className="container">
                <ul>
                    <li><NavLink className='navlink' to='/' activeStyle={{backgroundColor:'blue', color: 'wheat'}} exact strict>Bosh Sahifa</NavLink></li>
                    <li><NavLink className='navlink' to='/products' activeStyle={{backgroundColor:'blue', color: 'wheat'}} exact strict>Maxsulotlar</NavLink></li>
                    <li><NavLink className='navlink' to='/about' activeStyle={{backgroundColor:'blue', color: 'wheat'}} exact strict>Biz Haqimizda</NavLink></li>
                    <li><NavLink className='navlink' to='/login' activeStyle={{backgroundColor:'blue', color: 'wheat'}} exact strict>Ro'yhatdan O'tish</NavLink></li>
                    <li><NavLink className='navlink' to='/sign' activeStyle={{backgroundColor:'blue', color: 'wheat'}} exact strict>Kirish</NavLink></li>
                    {islogin ? 
                            <li><NavLink className='navlink' to='/account' activeStyle={{backgroundColor:'blue', color: 'wheat'}} exact strict>Profile</NavLink></li>
                            : ''}
                </ul>
            </div>
        </div>
    </div>
  );
}

export default Navbars;