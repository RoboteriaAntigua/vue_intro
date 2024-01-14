<template>
    <div class="cajon">
        Aqui recibimos data con props
        {{ variableton }} y 
        {{ otra_variable }}
    </div>
</template>
<script>
    export default {
        props: [
            'variableton',
            'otra_variable'
        ]
    }
</script>

<style>
    .cajon {
        border: 1px solid blue;
        padding:20px;
    }
</style>