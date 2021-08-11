import React from 'react';
import producto1 from './img/producto1.jpg';
import producto2 from './img/producto2.jpg';
import producto3 from './img/producto3.jpg';
import producto4 from './img/prducto444.jpg';
import producto5 from './img/producto5.jpg';
import producto6 from './img/producto6.jpg';





const Tienda = () => {

    
const transaccion = () =>{
    
    let accounts = [];

    if (window.ethereum) window.ethereum.enable()
    
      window.ethereum.request({
          method: 'eth_sendTransaction',
          params: [
            {
              from: "0x5493980a73C44644224742563e13Db3c193859C4",
              to: '0x2f318C334780961FB129D2a6c30D0763d9a5C970',
              value: '0x29a2241af62c0000',
              gasPrice: '0x09184e72a000',
              gas: '0x2710',
            },
          ],
        }).then(r=>console.log(r)).catch(e=>console.log(e))
    

      }

      

      
    return (
        <div className='titulo'>
        <h1> Productos </h1>
        
       <div className='productos' id='productos'> 
       <div className="row center-xs">
        <div className="col-xs-10 col-sm-6 col-md-4 producto">
        <div className="card">
            <img src={producto1}></img>
            <h3> Guitarra criolla<br/>clásica natural</h3>
            <button onClick={transaccion}>Comprar</button>
        </div>
        </div>

        <div className="col-xs-10 col-sm-6 col-md-4 producto">
        <div className="card">
            <img src={producto2}></img>
            <h3> Guitarra <br/>electroacústica</h3>
            <button onClick={transaccion}>Comprar</button>
           
        </div>
        </div>

        <div className="col-xs-10 col-sm-6 col-md-4 producto">
        <div className="card">
            <img src={producto3}></img>
            <h3> Guitarra criolla<br/>clásica black</h3>
            <button onClick={transaccion}>Comprar</button>
        </div>
        </div>

        <div className="col-xs-10 col-sm-6 col-md-4 producto">
        <div className="card">
            <img src={producto4}></img>
            <h3> Guitarra <br/> Eléctrica</h3>
            <button onClick={transaccion}>Comprar</button>
        </div>
        </div>

        <div className="col-xs-10 col-sm-6 col-md-4 producto">
        <div className="card">
            <img src={producto5}></img>
            <h3>  Guitarra Clásica <br/>electroacústica </h3>
            <button onClick={transaccion}>Comprar</button>
        </div>
        </div>

        <div className="col-xs-10 col-sm-6 col-md-4 producto">
        <div className="card">
            <img src={producto6}></img>
            <h3>  Guitarra Fender<br/>electroacústica </h3>
            <button onClick={transaccion}>Comprar</button>
        </div>
        </div>

       </div>
       </div>
       </div>
    );
}

export default Tienda;