import './App.css';
import Header from './myComponent/Header'
import Div1 from './myComponent/Div1'
import Footer from './myComponent/Footer'
import Alert from './myComponent/Alert';
import { useState} from 'react';

function App(props) {
  const[alert,setAlert]=useState("");
  const showAlert=(message)=>{
    setAlert({
        msg: message
    }
    )
    setTimeout(()=>{
      setAlert("")
    },1400);
  }
  return (
    <>
    <Header title={"PlayWithText"} aboutText={"About"}/>
    <Alert alert={alert}/>
    <Div1 showAlert={showAlert} btnValue="copy"/>
    <Footer/>
    </>
  );
}

export default App;
