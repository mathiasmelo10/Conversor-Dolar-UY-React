
import './App.css';

import {useRef, useState, useEffect} from "react";

function App() {
 
  const[valorCambio, setValorCambio]=useState(null);

  const dolarRef=useRef();

  const resultadoRef=useRef();

 useEffect(()=> {                                               // Operación asíncrona en segundo plano a la vez que otra que está en primer plano con la API externa

  const llamaApiCambio=async()=>{

    try {
    
      const respuesta=await fetch("https://v6.exchangerate-api.com/v6/144b932c9f34e873cc4bff21/latest/USD");

      const datos=await respuesta.json();

      console.log(datos);

      setValorCambio(datos.conversion_rates.UYU);


    }catch (error) {
      
      console.error("Error al acceder a la API:", error);

    }
  

  };
  
  llamaApiCambio();

 }, []);

 

  const calcular=()=>{


   
      
    const dolarValor=parseFloat(dolarRef.current.value); // Valor actual ingresado por el usuario

    if(typeof(dolarValor) === 'number' && !isNaN(dolarValor)){

      const pesosUy=dolarValor*valorCambio;
      resultadoRef.current.innerHTML=pesosUy.toFixed(2) + " $U";
     

    }else{

      alert("Error!.Favor de ingresar valores numéricos");

    }

  }

 /* document.getElementById("ingresaValor")
    .addEventListener("onkeydown", function(event) {
    if (event.key === 13) {
      event.preventDefault();
      document.getElementById("convertir").click();
 
    }
}); */
 

 
 
  return <div>

    <h1>Conversor DÓLAR-UY</h1>
    <div className='valorUSD centrarElementos'>
      <h2>Ingrese valor de cambio </h2><input id="ingresaValor" type='text' ref={dolarRef}></input>
      <img className='banderaUSA' src="/assets/usa.jpg" alt='usa'></img>
    </div>
    <br/>
    <button id="convertir" className='centrarBoton'onClick={calcular}><img className='banderaURU' src="/assets/uru.jpg" alt='uru'></img>Convertir</button>
    <br/> 
    <div className='centrarElementos resultado' ref={resultadoRef}></div>

  </div>
    
  
}



export default App;
