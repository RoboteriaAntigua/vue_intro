
<template>
    <div class="caja">
        <h1>Primer componente</h1>
        <p>variable1: {{  variable1 }}</p>
        <p> variable2: {{  variable2 }}</p>
    </div>
</template>

<script>
export default {
    data(){
        return {
            variable1:'primer variable',
            variable2:'le sumare algo de funcionalidad a Roboteria?'
        }
    }
};
</script>

<style>
.caja {
    border: 1px solid black;
    background-color: salmon;
    padding:20px;
}
</style>