import { useState } from "react";
import "./App.css";
import Navigation_bar from "./Components/Navigation_bar";
import Textplc from "./Components/Textplc";
import Alert from "./Components/Alert";

function App() {

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg : message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  

  const [mode, setmode] = useState("light");

  const togglefunction = () => {
    if (mode === "light") {
      setmode("dark")
      document.body.style.backgroundColor="blue"
      showAlert (" Dark mode is enable", "danger")
    }
    else {
      setmode("light")
      document.body.style.backgroundColor="white"
      showAlert ("Light mode is enable", "success")
    }
  };

  return (
    <>
      <Navigation_bar title="Dexter" mode={mode} togglemode={togglefunction} />
      <Alert alert={alert}/>
      <Textplc showAlert={showAlert} heading="Enter The Text For Analysis" mode={mode} />
      
    </>
  );
}

export default App;
