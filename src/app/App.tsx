import React from 'react';
import './App.css';
import {BrowserRouter as Router, NavLink} from "react-router-dom"
import {useSelector} from "react-redux";
import {selectorError, selectorStatus} from "../store/app-reduser/app-selector";
import {PATH, Routes} from "../routes/Routes";



function App() {

    const status = useSelector(selectorStatus)
    const error = useSelector(selectorError)


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
