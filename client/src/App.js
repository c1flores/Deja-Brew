import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/pages/Menu';
import About from './components/pages/About';
//import Login from './components/pages/Login'


class App extends Component {
    render() {
        return (
            <Router>
                <div className='App'>
                    <ul className='App-header'>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about"></Link>
                        </li>
                        <li>
                            <Link to="/login"></Link>
                        </li>
                    </ul> 
                    <Routes>
                        <Route exact path='/' element={< Home />}></Route>
                        <Route exact path='/about' element={< About />}></Route>
                       {/* <Route exact path='/login' element={< Login />}></Route> */}
                    </Routes>
                </div>
            </Router>
        )
    }
}

export default App;