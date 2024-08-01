
import './App.css';

import {useRef} from "react";

function App() {
 
  const dolarRef=useRef();

  const resultadoRef=useRef();



  const calcular=()=>{

    const dolarValor=parseFloat(dolarRef.current.value); // Valor actual ingresado por el usuario

    const pesosUy=dolarValor*40.28;

    resultadoRef.current.innerHTML=pesosUy.toFixed(2) + " $U";

  

  }
 
 
 
  return <div>

    <h1>Conversor DÓLAR-UY</h1>
    <div className='valorUSD centrarElementos'>
      <input type='text' ref={dolarRef}></input>
      <img className='banderaUSA' src="/assets/usa.jpg" alt='usa'></img>
    </div>
    <br/>
    <button className='centrarBoton'onClick={calcular}><img className='banderaURU' src="/assets/uru.jpg" alt='uru'></img>Convertir</button>
    <br/> 
    <div className='centrarElementos resultado' ref={resultadoRef}></div>

  </div>
    
  
}



export default App;
