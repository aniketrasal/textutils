import { useState } from 'react';
import './App.css';
import { Navbar } from './Components/Navbar';
import Alert from './Components/Alert';
import AllRoutes from './Components/AllRoutes';

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const toggleMode = ()=>{
    if(mode === "light"){
      setMode("dark")
      document.body.style.backgroundColor = "#042743"
      showAlert("Dark mode has been Enabled","success")
      document.title = "TextUtils Dark Mode"
    }
    else{
      setMode("light")
      document.body.style.backgroundColor = "white"
      showAlert("Light mode has been Enabled", "success")
      document.title = "TextUtils Light Mode"
    }
    
  }

  const showAlert = (messeage, type)=>{
    setAlert({
      msg : messeage,
      type: type
    })

    setTimeout(()=>{
      setAlert(null)
    },1500)
  }


  return (
    <div className="App">
      <Navbar title="TextUtils" toggleMode={toggleMode} mode={mode}/>
      <Alert alert={alert}/>
      <div className='container'>
        <AllRoutes mode={mode} toggleMode={toggleMode} showAlert={showAlert}/>
        
      </div>
      
    </div>
  );
}

export default App;
