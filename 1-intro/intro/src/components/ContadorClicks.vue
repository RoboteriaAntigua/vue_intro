<template>
    <h1>Tipico contador de clicks</h1>
    <button @click="contador()">contar</button>
    <p>has echo click : {{ tantas }} veces</p>
    <button @click="reiniciar()">reiniciar</button>
</template>

<script>
    export default {
        data(){
            return{
                tantas:0
            }
        },
        methods: {
            contador(){
                this.tantas++;
            },
            reiniciar(){
                this.tantas=0;
            }
        }
    }
</script>

<style>
    .boton {
        border:1px solid green;
        background-color: aqua;
        padding: 10px;
        width: 250px;
    }
</style>