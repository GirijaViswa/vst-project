import React from 'react';
import Form from './Components/Form.js';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import DetailedForm from './Components/DetailedForm.js';
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
