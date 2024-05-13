<!--
    Props are used to send data from the parent element to the child component, 
    and $emit() is used to do the oposite: to pass information from the child component to the parent.
-->

<!--En este ejemplo podremos usar este boton desde el padre-->
<template> 
<button @click="handleClick">{{text}}</button> 
</template>

<!--
    Con this.$emit() emites el evento, adentro el nombre de la funcion que quieres dar al evento,
    Por ejemplo para el evento ('hacer',parametro) luego tienes que usarla en el padre con @hacer
-->
<script>
export default { 
    props: { text: String },    //text viene del padre (app.vue)
    data(){
        return {
        example:'enviando al padre con emit'
        }
    }, 
    methods: { 
        handleClick() {
             this.$emit("hacer",this.example); 
                } //El primer parametro el evento el segundo cierta data
            }                                    // ambos evento y example van al padre (app.vue)
        } 
</script>