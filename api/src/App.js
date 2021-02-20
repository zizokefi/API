import './App.css';
import UserList from './userList';
import React from 'react';
import Api from './API';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


function App() {
  return (


    <div className="App">
      <h1 style={{ textAlign: 'center', marginTop: '50px', padding: "20px" }}>API CHECK</h1>
      <Router>
        <Link to="/user-with-axios"><button >  Try This List with Axios</button></Link>
        <Route exact path='/' component={UserList} />
        <Route exact path="/user-with-axios" component={Api} />
      </Router>
    </div>

  );
}

export default App;