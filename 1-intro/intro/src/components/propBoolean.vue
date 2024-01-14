<template >
    <p v-if="bandera" class="cajoncito">Este componente se activa si el prop booleano que llega es true</p>
    <p v-else>No llego el prop booleano</p>
</template>

<script>
    export default {
        props: [
            'bandera'
        ]

    }
</script>

<style>
    .cajoncito {
        width: 400px;
        padding:20px;
        background-color: blueviolet;
    }
</style>