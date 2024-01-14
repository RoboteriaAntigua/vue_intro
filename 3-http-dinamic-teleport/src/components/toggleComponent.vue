<template>
    <h1>Componente dinamicos</h1>
    
    <button @click="alternar = !alternar">toogle</button>
    
        <component :is="dinamicComp"></component>
    
</template>

<script>
export default {
    data(){
        return {
            alternar:false
        }
    },
    computed: {
        dinamicComp () {
            if (this.alternar){
                return 'comp-one'
            }
            else {
                return 'comp-two'
            }
        }
    }
}
</script>