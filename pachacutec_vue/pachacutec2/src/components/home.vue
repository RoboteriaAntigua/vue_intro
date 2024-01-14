<template>

<div id="main">

    <!--Header logo titulo y phone-->
    <headerComponent />
        
    <div class="top2_wrapper">
        <!-- Fondo verde -->
        <div class="bg1"><img src="https://res.cloudinary.com/dghwcediy/image/upload/v1702558087/pacha2/bg1_sap4ne.jpg" alt="" class="img">
        </div>  
        
        <div class="top2_inner">

            <!-- ************navbar *****************************--> 
            <navbarComponent />
            
            <!-- *************** Slide  *********************-->
            <carruselComponent />

            <div id="slider3_wrapper">
                <div class="container">
                    <div class="row">
                        <div class="span12">
                            
                            <!--------- Mision------------------------------->
                            <misionComponent />
                            

                            <!--------  Slider de cards ************************************-->
                            <sliderCardsComponent />

                             <!------------ Comunidad ----------------->
                            <a name="comunidad"></a>
                            <comunidadComponent />

                            <!----- Educacion ------------------------>
                            <a name="educacion"></a>
                            <educacionComponent />
                        </div>	
                    </div>	
                </div>	
            </div>
        </div>	
    </div>
    
    <!------------------vision ------------------------------------>
    <visionComponent />


    <!----------- Ley e importancia -------------------->
    <div id="content">
        <div class="container">
            <div class="row">

                <!-------Ley ------------------->
                <leyComponent />

                <!------ Importancia ----------------->
                <importanciaComponent />

            </div>
        </div>
    </div>

    <!-----------Nuestros servicios ----------->

    <serviciosComponent />

    <!----------------Productos------------->
    <productosComponent />


   


    <!----------Volver arriba-------->
    <div class="content">
        <div class="container">
            <a href="#">
                <div class="button1" >
                    Volver arriba &uarr;
                </div>
            </a>
        </div>
    </div>


</div>
        
<!------footer------->
<footerComponent />
        
    </template>