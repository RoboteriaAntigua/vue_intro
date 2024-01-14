<template>


<!-- Agregar bind una clase css a un elemento-->
<div v-bind:class="{ yelClass: isYellow}">lorem impus bull shit<br>
</div>

<button @click="agregar()">Agregar clases </button>



</template>

<style>
.yelClass {
      background-color: rgb(255, 255, 136);
    }


</style>

<script>

    export default {

     data() {
      return {
        isYellow: false,
        isImportant: true
      }
    },
    methods: {
        agregar(){
            this.isYellow=true;
        }
    }
    }
</script>