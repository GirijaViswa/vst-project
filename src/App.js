import React from 'react';
import Form from './components/form.js';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import DetailedForm from './components/detailedform';
// import DetailedForm from './components/olddetailedform';
// import './App.css';

function App() {
  return (
    <div className="App">   
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
