

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


  <!-- Recibiendo un evento y data de componente hijo y usandolo-->
  <emit text="Botón de ejemplo" @hacer="handleClick"></emit>
  <p> Recibiendo info del hijo: {{ variable }}</p>
</template>

<script>
export default {
    data() {
        return {
            variable: 'hola topo',
            foods: [
              {name:'Apples',id:'1'},
              {name:'Pizza',id:'2'},
              {name:'Rice',id:'3'},
              {name:'Fish',id:'4'},
              {name:'Cake',id:'5'}]
        };
    },
    methods: {
      handleClick (example) {                 //metodo identico en el hijo, evento recibido de hijo a padre
        this.variable=example;
      }
    }

};
</script>

<style>
</style>
