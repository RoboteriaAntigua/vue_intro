<template>

    El input1: <input type="checkbox" ref="input1"> <br>
    El input2: <input type="text" ref="input2" id="id1"> <br>

    <button @click="transferirTodo()">Transferir por dom vue</button>
    <h2>Muestro</h2>
    <div ref="muestro1"></div>
    <div ref="muestro2"></div>
</template>

<script>
    export default {

        methods: {
            transferirTodo() {

                this.$refs.muestro1.innerHTML = this.$refs.input1.value;
                this.$refs.muestro2.innerHTML = this.$refs.input2.value; // igual a document.getElementById('id1').value;
            }
        }
    }
</script>