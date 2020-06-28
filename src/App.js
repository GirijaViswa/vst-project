import React from 'react';
// import logo from './logo.svg';
import Form from './components/form.js';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import DetailedForm from './components/detailedform.js';
// import './App.css';

function App() {
  return (
    <div className="App">
      {/*<header className="App-header">
         <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> 
      </header>*/}
      <BrowserRouter>
        <Switch>
          <Route path="/form/:id" exact component={DetailedForm}/>
          <Route path="/form" exact component={Form}  />
          <Route path="/" component={Form}/>
        </Switch>
      </BrowserRouter>
      {/* <Form/> */}
      {/* <DetailedForm/> */}
    </div>
  );
}

export default App;
