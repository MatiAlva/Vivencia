import React from 'react';

import imgrelleno from './img/imgrelleno.jpg';

const Aside = () =>{


    return(

        
        <div className="flex">

        
           
            <div id="relleno">
                
                <p>Somos una empresa familiar, que nos iniciamos en el año 1957 bajo 
                el nombre Emave, dedicándonos a la fabricación y comercialización de elementos de 
                audio en la ciudad de Rosario.
                    En el año 2009 decidimos insertarnos en el rubro musical y abrimos Emave Musical.
                     Tienda de instrumentos musicales donde ofrecemos una amplia variedad de instrumentos 
                     tantos nacionales como importados. </p>
                     </div> 

            <div>
                <img className="zoom" src={imgrelleno}  width="300" height="300"  />

            </div>       



</div>
        
    
    




    );





}

export default Aside;