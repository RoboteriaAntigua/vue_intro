<template>


<div class="menu_wrapper">
    <div class="container">
    <div class="menu_inner clearfix">
        

     
    <div class="navbar navbar_">
        <div class="navbar-inner navbar-inner_">
            <!--
            <a class="btn btn-navbar btn-navbar_" data-toggle="collapse" data-target=".nav-collapse_">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </a>-->
            <div class="nav-collapse nav-collapse_ collapse" >
                <div class="navbar_ocultar" :style="{ 'display':mostrar}">
                    <ul class="nav sf-menu clearfix" @click= "ocultar_menu()">
                        <li > <a  href="index.html"  ><div class="over1"></div><div class="txt1">Inicio</div><div class="txt2">Inicio</div></a></li>
                        <li ><a  href="#servicios"   ><div class="over1"></div><div class="txt1">Productos y Servicios</div><div class="txt2">Productos y Servicios</div></a></li>
                        <li ><a  href="#ley"         ><div class="over1"></div><div class="txt1">Ley nacional</div><div class="txt2">Ley nacional</div></a></li>
                        <li ><a  href="#comunidad"   ><div class="over1"></div><div class="txt1">Comunidad</div><div class="txt2">Comunidad</div></a></li>
                        
                        <!--<li><a href="#educacion"><div class="over1"></div><div class="txt1">Educación</div><div class="txt2">Educación</div></a></li>-->
                    
                    </ul>
                </div>
                <div class="navbar_menu" >
                    <ul class="nav sf-menu clearfix">
                        <li ><a  @click= "mostrar_menu()"><div class="over1"></div><div class="txt1">Navegar el sitio</div><div class="txt2">Navegar el sitio</div></a></li>
                    </ul>
                </div>   
            </div>
        </div>
    </div>
    
    </div>	
    </div>	
    </div>	


</template>

<script>
export default {
    data(){
        return {
            mostrar:''
        }
    },
    methods: {
        mostrar_menu () {
            this.mostrar= 'block';
        },

        ocultar_menu() {
            this.mostrar='none';
        }
    }
}
</script>