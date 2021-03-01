import logo from './logo.svg';
import './App.css';
import './index.css';

import {useState, useEffect} from 'react'


function App() {
  let [stuff, setStuff]  = useState()
  

  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://shapeshift.io/onlinecoins", requestOptions)
      .then(response => response.text())
      .then(result => setStuff(result))
      .catch(error => console.log('error', error));
  

  }, [])



  return (
    <div className="bg-pink-500 text-white">
      {stuff}
    </div>
  );
}

export default App;
