
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

 

 
 /*var ingresa = document.getElementById("ingresaValor");
 ingresa.addEventListener("keydown", presionaConvertir);

 var enterConvertir = document.getElementById("convertir");

 function presionaConvertir(event) {
  
   if (event.key === 13) {
    event.preventDefault();
    enterConvertir.click(); 
    
   }
 } 
*/


  const calcular=()=>{


   
      
    const dolarValor=parseFloat(dolarRef.current.value); // Valor actual ingresado por el usuario

    if(typeof(dolarValor) === 'number' && !isNaN(dolarValor)){

      const pesosUy=dolarValor*valorCambio;
      resultadoRef.current.innerHTML=pesosUy.toFixed(2) + " $UYU";
      document.getElementById("errorText").innerHTML =
          "USD"; 

    }else{

      document.getElementById("errorText").innerHTML =
          "Error!.Favor de ingresar valores numéricos"; 

    }

  }
  return <div>

    <h1>Conversor DÓLAR-UY</h1>
    <div className='valorUSD centrarElementos'>
      <h2>Ingrese valor de cambio </h2><input id="ingresaValor" type='text' ref={dolarRef}></input>
      <text id="errorText" className='errorNum'></text> 
      <img className='banderaUSA' src="/assets/usa.jpg" alt='usa'></img>
    </div>
    <img className='arrowDown' src="/assets/arrow-down1.png" alt='arrow'></img>
    <button id="convertir" className='centrarBoton'onClick={calcular}><img className='banderaURU' src="/assets/uru.jpg" alt='uru'></img>Convertir</button>
    <div className='centrarElementos resultado' ref={resultadoRef}></div>

  </div>
    
  
}



export default App;
