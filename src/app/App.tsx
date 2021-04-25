import React from 'react';
import './App.css';
import {BrowserRouter as Router, NavLink} from "react-router-dom"
import {PATH, Routes} from "../routes/Routes";


function App() {


    return (<Router>
            <div className="App">
                 <span>
                <NavLink to={PATH.PAGE_ONE}>11111</NavLink>
            </span>
                <span>
                <NavLink to={PATH.PAGE_TWO}>22222</NavLink>
            </span>
                <span>
                <NavLink to={PATH.PAGE_TREE}>33333</NavLink>
            </span>
                {/*  {error !== null && <ErrorSnackBar errorMessage={error}/>}
                {status === 'loading' && <Preloader/>}*/}
                <Routes/>
            </div>
        </Router>
    );
}

export default App;
