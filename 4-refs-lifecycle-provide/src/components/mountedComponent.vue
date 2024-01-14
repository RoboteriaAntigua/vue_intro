<template>
    <h2>Ciclo de vida</h2>
    <div ref="mostrar1"></div>
    
    <button @click = "activado = !activado">activar</button>
    <div v-if="activado">se actualizado una data del componente</div>
    <div ref="mostrar2"></div>
    <p> {{ activado }}</p>
</template>

<script>
    export default {
        data(){
            return {
                activado:true
            }
        },
        mounted () {
            this.$refs.mostrar1.innerHTML = 'Montado el componente';
        },
        beforeUpdate (){
            this.$refs.mostrar2.innerHTML= 'beforeUpdate sucede esto, no usar en update porque caemos en buckle infinito'
        }
    }
</script>