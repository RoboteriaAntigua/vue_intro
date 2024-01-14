<template>

    
                <a name="importancia"></a>
                <div class="span4">

                    <h3 class="c1">Importancia y beneficios</h3>
                
                    <div class="accordion" id="accordion1">
                        <div class="accordion-group">
                            <div class="accordion-heading">
                                <a class="accordion-toggle" @click="toogle(1)" >
                                    Tolerancia a heladas <p style="font-size:8px;">Toca aquí para mas informacion &darr;</p>
                                </a>
                            </div>
                            <div  class="accordion-body collapse2 " v-if="bandera==1" >
                                <div class="accordion-inner">

                                    Es de suma importancia incorporar especies arbóreas y arbustivas nativas. Dadas sus cualidades y características de crecimiento pueden adaptarse a una diversidad de suelos. Hay especies que toleran suelos salinos o anegadizos, resisten las heladas o tienen alta tasa de rebrote, otras pueden desarrollarse en suelos degradados. 
                                    
                                </div>
                            </div>
                        </div>
                        <div class="accordion-group">
                            <div class="accordion-heading">
                                <a class="accordion-toggle" @click="toogle(2)">
                                   Toleracia a la sequia 
                                   <p style="font-size:8px;">Toca aquí para mas informacion &darr;</p>
                                </a>
                            </div>
                            <div id="collapse2" class="accordion-body collapse2" v-if="bandera==2" >
                                <div class="accordion-inner">
                                    Estas especies favorecen y regeneran la biodiversidad tanto del suelo, la flora y la fauna, toleran la sequía y detienen el proceso de desertificación del suelo y el ambiente, son proveedoras de alimentos, retienen el agua y la almacenan en el suelo, protegen y contribuyen a la sanidad de nuestras cuencas hídricas. 
                                    
                                </div>
                            </div>
                        </div>
                        <div class="accordion-group">
                            <div class="accordion-heading">
                                <a class="accordion-toggle" @click="toogle(3)">
                                    Proveedoras
                                    <p style="font-size:8px;">Toca aquí para mas informacion &darr;</p>
                                </a>
                            </div>
                            <div id="collapse3" class="accordion-body collapse2" v-if="bandera==3">
                                <div class="accordion-inner">
                                    Son útiles para prevenir los procesos de erosión hídrica y eólica, ofrecen sombra, madera, leña, proveen medicina, atraen polinizadores, se adecúan a diversos ambientes, resisten plagas y enfermedades, toleran la poda y regulan el microclima.
                                    
                                </div>
                            </div>
                        </div>
                        <div class="accordion-group">
                            <div class="accordion-heading">
                                <a class="accordion-toggle" @click="toogle(4)">
                                    Mejorar el ciclo del agua
                                    <p style="font-size:8px;">Toca aquí para mas informacion &darr;</p>
                                </a>
                            </div>
                            <div id="collapse4" class="accordion-body collapse2" v-if="bandera==4">
                                <div class="accordion-inner">
                                    Generan el ciclo corto del agua ya que el 40% de las precipitaciones provienen de la transpiración de los bosques y espacios verdes, contribuyen a la mitigación del cambio climático, además de ser parte de nuestro patrimonio cultural y embellecer el paisaje con sus formas, flores y frutos.
                                    
                                </div>
                            </div>
                        
                        
                        </div>
                    </div>
                </div>
  
</template>

<script>
export default {
    data() {
        return {
            bandera:0
            
        }
    },
    methods: {
        toogle(par1){
            if(this.bandera==par1){
                this.bandera=0
            }else{
            this.bandera=par1}
        }
    }

}

</script>