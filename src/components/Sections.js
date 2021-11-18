import React, { useState, useRef } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import {} from 'reactstrap';



export default function App(props){
  let [stateUser, setStateUser] = useState([{FISH: 'admin', login:'admin', parol:'admin', isLogin: true}]);

  let isLoginProfile = useRef(false);

  let setFISH = useRef(null);
  let setlogin = useRef(null);
  let setpassword = useRef(null);


  // page route components
  const home = () => {
    return(
      <div className='page-in'>
        home
      </div>
    )
  }
  const products = () => {
    return(
      <div className='page-in'>
        products
      </div>
    )
  }
  const about = () => {
    return(
      <div className='page-in'>
        about
      </div>
    )
  }
  
  const login = () =>{
    return(
      <div className='page-active'>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <form action="">
                <label className='form-label' htmlFor="FISH">F.I.SH ni kiriting</label>
                <input ref={setFISH} type="text" className="form-control mb-4" id='FISH' placeholder='FISH...'/>
                <hr />
                <label className='form-label mt-3' htmlFor="login">Login ni kiriting</label>
                <input ref={setlogin} type="text" className="form-control mb-4" id='login' placeholder='Login...'/>
                <hr />
                <label className='form-label mt-3' htmlFor="password">Parol ni kiriting</label>
                <input ref={setpassword} type="password" className="form-control" id='password' placeholder='Parol...'/>
                <button onClick={isRegistration} className="btn btn-outline-info col-12 mt-4">Yuborish</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  const sign = () =>{
    return(
      <div className='page-in'>
        login
      </div>
    )
  }
  const account = () =>{
    return(
      <div className='page-in'>
        account
      </div>
    )
  }

  // function 
  const isRegistration = (e) => {
    e.preventDefault();  
    const f = setFISH.current.value;
    const l = setlogin.current.value;
    const p = setpassword.current.value;

    if(f != '' && l != '' && p != ''){
     setStateUser([stateUser,{
        FISH: f,
        login: l,
        parol: p,
        isLogin: true,
      }]);

    }else{
      setFISH.current.focus();
      setFISH.current.value = '';
      setlogin.current.value = '';
      setpassword.current.value = '';
    }
    console.log(stateUser);

  }
  
    return (
      <div>
        <Route  path='/' exact strict component={home}/>
        <Route  path='/products' exact strict component={products}/>
        <Route  path='/about' exact strict component={about}/>
        <Route  path='/login' exact strict component={login}/>
        <Route  path='/sign' exact strict component={sign}/>
        {/* <Route  path='/account' exact strict render = {() => {isLoginProfile ? account : <Redirect to="/" />}} /> */}
      </div>
    )
}

