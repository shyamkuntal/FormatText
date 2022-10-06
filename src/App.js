import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'; 
import React, {useState} from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {

  const [mode, setmode] = useState('light');
  const[alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
        setAlert(null);
      }, 1500);
  }


  const togglemode = ()=> {
    if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor = '#12193b';
      showAlert("Dark Mode Has Been Enabled", "Sucess");
    }
    else{
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Has Been Enabled", "Sucess");
    }
  }

  return (
    <>
    <Router>
    <Navbar title = "Kuntal" mode={mode} togglemode={togglemode}/>
    <Alert alert={alert}/>
    <div className="container my-3">

    <Switch>
          <Route exact path="/about">
            <About mode={mode}/>
          </Route>
          <Route exact path="/">
            <TextForm showAlert={showAlert} heading = "Enter the Text Below to Analyze" mode={mode}/>
          </Route>
        </Switch>
    </div>
    </Router>
    </>
  );  
}

export default App;
