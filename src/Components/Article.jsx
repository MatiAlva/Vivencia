import React from 'react';

import Movimiento2 from './img/Movimiento2.jpg';
import Movimiento3 from './img/Movimiento3.jpg';
import Movimiento4 from './img/Movimiento4.jpg';
import Movimiento5 from './img/Movimiento5.jpeg';
import Movimiento6 from './img/Movimiento6.jpeg';



    const Article = () =>{
     
        return(
            <div className="Titulo-ar">

                <h1>50% OFF</h1>
                <br></br>
                <h1>Dale sinfonia a tu vida!!</h1>

            
            <div className="slider">
            <div id="slider">
    <ul>
        
        <li>
           <a href="https://www.ecomusicweb.com/producto/guitarra-clasica-admira-rosario/" target="_blank" > 
           <img src={Movimiento2} height="1000" width="1200" /> </a>
        </li>
        <li>
        <a href="https://articulo.mercadolibre.com.ar/MLA-698752044-guitarra-criolla-clasica-nuevas-calidad-con-funda-pua-manual-_JM?searchVariation=81584120653#searchVariation=81584120653&position=10&search_layout=grid&type=item&tracking_id=b87c7db4-3e18-4770-abb4-bc85e39ffeb9" target="_blank"> 
         <img src={Movimiento3} height="1000" width="1200"/></a>
        </li>
        <li>
          <a href="https://www.unpluggedmusic.com.ar/productos/guitarra-criolla-clasica-estudio-superior-funda-pua/" target="_blank">  
          <img src={Movimiento4} height="1000" width="1200"/> </a>
        </li>

        <li>
           <a href="https://ar.xprostore.com/LPS18ODCH1" target="_blank"> 
           <img src={Movimiento5}height="1000" width="1200"/> </a>
        </li>

        <li>
           <a href="https://instrumentos.mercadolibre.com.ar/instrumentos-cuerdas-guitarras/" target="_blank">
                <img src={Movimiento6} height="1000" width="1200"/> </a>
        </li>

        
    </ul>
</div>
</div>
</div>
   
   );
}


export default Article;