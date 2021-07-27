import React from 'react';
import Movimiento2 from './img/Movimiento2.jpg';
import Movimiento3 from './img/Movimiento3.jpg';
import Movimiento5 from './img/Movimiento5.jpeg';
import "bootstrap/dist/css/bootstrap.min.css";


    const Article = () => {
     
        return(
          <div id = "slider">

            <div className="Titulo-ar">
                <div className = "Animacion-article">
                <h1>50% OFF</h1>
                <br></br>
                <h1>Dale sinfonia a tu vida!!</h1>
                </div>




             
                <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <br></br>

  <div class="carousel-inner">
    <div class="carousel-item active">
     <img src={Movimiento2}  class="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block">
      <div classsName = "Animacion-article"> 
        <h5> DO-RE-MI TE ESPERA..</h5>
        <p>Toca el boton para llevarte este increible producto al 50% OF</p>
         <a href="https://www.mercadolibre.com.ar/guitarra-criolla-clasica-gracia-m2-natural/p/MLA16999350?pdp_filters=category:MLA2989#searchVariation=MLA16999350&position=1&search_layout=grid&type=product&tracking_id=539ba385-038f-43e3-969e-3d186283d03b" class="btn btn-info" target="_blank"> LO QUIERO!! </a>
        <br></br>
      </div>
    </div>
    </div>


    <div class="carousel-item">
      <img src={Movimiento3} class="d-block w-100" alt="..." /> 
      <div class="carousel-caption d-none d-md-block">
      <div classsName = "Animacion-article"> 
        <h5>DO-RE-MI TE ESPERA..</h5>
        <p>Toca el boton para llevarte este increible producto al 50% OF</p>
      <a href="https://www.mercadolibre.com.ar/guitarra-criolla-clasica-fonseca-25-natural/p/MLA16590171?pdp_filters=category:MLA2989#searchVariation=MLA16590171&position=2&search_layout=grid&type=product&tracking_id=f72f206f-6767-4320-aa56-901bc3cc862c" class="btn btn-info" target = "_blank"> LO QUIERO!! </a> 
      </div>
    </div>
    </div>


    <div class="carousel-item">
        <img src={Movimiento5} class="d-block w-100" alt="..." /> 
      <div class="carousel-caption d-none d-md-block">
       <div classsName = "Animacion-article"> 
        <h5>DO-RE-MI TE ESPERA..</h5>
        <p>Toca el boton para llevarte este increible producto al 50% OF</p>
        <a href = "https://articulo.mercadolibre.com.ar/MLA-827573679-guitarra-electrica-squier-stratocaster-ht-mass-market-_JM?searchVariation=47061433160#searchVariation=47061433160&position=29&search_layout=grid&type=item&tracking_id=5a234801-81dd-4822-8b55-bdbfa5503490" class="btn btn-info" target = "_blank"> LO QUIERO!! </a> 
        </div>
    </div>
    </div>
  </div>


  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>

</div>
</div>
</div>

   
   );
}


export default Article;