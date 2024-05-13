

<template>

  <!-- Iterpolando data-->
  <h1>Hola primer proyecto</h1>
  <p> Primer interpolacion: {{  variable   }}</p>

  <!-- Usando un primer componente-->
  <PrimerComponente />
  <PrimerComponente />

  <!--Clasico componente contador de clicks-->
  <contador-clicks />

  <!--Mandando data a los componentes-->
  <h1>Mandando data con props</h1>
  <recibe-prop 
              variableton="12345678 enviado al componente con props" 
              otra_variable="soy otra varible" />

  <!-- Mandando un dato booleano a los componentes-->
  <h1>Mandando un prop booleano</h1>
  <prop-boolean bandera='true' />
 
  <!-- Repitiendo componentes n veces con v-for-->
  <h1>Repitiendo un componente n veces con for</h1>
  <food-item v-for="x in foods" :foodname="x.name" />       <!-- Uno la variable food-name con x, y se la paso de parametros-->

  <h1>Listando un arreglo:</h1>
  <li v-for="x in arreglo" >arr: {{x}}</li>

  <!-- Recibiendo un evento y data de componente hijo y usandolo-->
  <emit text="Botón de ejemplo" @hacer="handleClick"></emit>
  <p> Recibiendo info del hijo: {{ variable }}</p>


  <!--Otro evento desde el componente hijo llamado hijo.vue-->
  <hijo @evento1="metodo2"></hijo>
  <p>Recibiendo del hijo: {{ variable2 }}</p>

</template>

<script>
export default {
    data() {
        return {
            variable: 'hola topo',
            variable2:'',
            foods: [
              {name:'Apples',id:'1'},
              {name:'Pizza',id:'2'},
              {name:'Rice',id:'3'},
              {name:'Fish',id:'4'},
              {name:'Cake',id:'5'}],
            arreglo: ['uno','ods','tres']
        };
    },
    methods: {
      handleClick (example) {                 
        this.variable=example;
      },
      metodo2 (par1){
        this.variable2=par1;
      }
    }

};
</script>

<style>
</style>
