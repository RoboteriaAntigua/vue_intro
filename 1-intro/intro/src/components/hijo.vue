<template>
    <h1>Hijo que envia al padre:</h1>
    <button @click="metodo1">Enviar2</button>
</template>

<script>
export default {
    data () {
        return {
            variableHijo:"123"
        }
    },
    methods: {
        metodo1 () {
            this.$emit("evento1", this.variableHijo)
        }
    } 
}
</script>