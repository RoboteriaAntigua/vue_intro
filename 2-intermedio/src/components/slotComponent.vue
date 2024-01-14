<template>
<h1>Aqui un componente</h1>

<!--1 Llengando hmtl del app.vue a travez de slot-->
<slot></slot>

<!--2 Enviando html al app.vue a travez del slot-->
<slot>
    <h2>A travez del componente por slot de hijo a padre</h2>
</slot>

<!--3 Para mas de un slot vamos a usar la v-slot directiva que nos permite nombrarlos-->
<!--5El shorthand de v-slot es #-->
<slot name="slot1"></slot>
<slot name="slot2"></slot>


<!--6 Enviando data de js al padre a travez de slots (scoped slot)-->
<slot :lclData="data"></slot>


<!--Names a los slot que mandan data js-->
<slot name="teteSlot" :text="text"></slot>


</template>




<script>
    export default {
        data(){
            return {
                data: 'aqui data desde el hijo',
                text: 'names scoped slots',
            }
        }
    }
</script>
