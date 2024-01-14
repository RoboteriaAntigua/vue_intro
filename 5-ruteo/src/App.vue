<template>
  <router-link to="/home">home</router-link> &amp;
  <router-link to="/contacto">contacto</router-link><br>

<router-view></router-view>

<h1>Aqui arriba se renderizan</h1>
<p>y aqui abajo tambien, si ponemos varios router-view lo vamos a ver 
  varias veces, en realidad es un componente como otros</p>
<router-view></router-view> 
</template>

<style>
    .main {
        width: 700px;
        background-color: rgb(28, 25, 25);
        padding:20px;
        margin:10px;
        box-shadow: 0px 0px 20px white;
        color:aliceblue;
    }
</style>