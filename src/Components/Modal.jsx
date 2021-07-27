import React  from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import * as web3 from 'web3';


    const Modal = () => {

     const contratoModal = () => {


         if (window.ethereum) window.ethereum.enable()
        
            
            else
            alert("Descargue Metamask, https://metamask.io/");

    }
     

        return (
        <div>
        <div className = "Modal-m">
        <button type = "button" class = "btn btn-primary" data-bs-toggle = "modal" data-bs-target = "#exampleModal">
            Modal
        </button>
        </div>

        <div className = "modal fade" id = "exampleModal" tabindex = "-10" aria-labelledby = "exampleModalLabel" aria-hidden = "true">
        <div className = "modal-dialog">
        <div className = "modal-content">
        <div className = "modal-header">

            <h5 className = "modal-title" id="exampleModalLabel" > Bienvenido  </h5>
            <button type = "button" className = "btn-close" data-bs-dismiss = "modal" aria-label = "Close"></button>
        </div>
      <div classNaem = "modal-body">


        <button class="enableEthereumButton" onClick = {contratoModal} > Habilitar Ethereum</button>
            <h2> <span class = "showAccount" ></span></h2>
                <contrato />


     </div>

        <div className = "modal-footer">
            <button type = "button" className = "btn btn-secondary" data-bs-dismiss = "modal"> Cerrar </button>
        </div>
        </div>
        </div>
        </div>
        </div>
        );
    }

export default Modal;