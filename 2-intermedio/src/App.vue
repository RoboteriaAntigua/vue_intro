
<template>

<!--Uso de slots (como en Blade)-->
<!--Aqui el slot va lleno y en el componente se usa vacio-->
<slot-component>
    Soy un slot para mandar info (html) de padre a hijo
</slot-component>

<!--Slot de hijo a padre-->
<!--Retorno de html, se usa el slot vacio aqui y en el componente lleno-->
<slot-component>
    <!--vacio!-->
</slot-component>

<!--Para varios slots v-slot para named slots-->
<slot-component v-slot:slot1>Aqui slot1</slot-component>
<slot-component v-slot:slot2>Aqui slot2</slot-component>


<!--Recibiendo data js desde el hijo con slot-->
<slot-component v-slot="dataFromSlot">
<h2> {{ dataFromSlot.lclData }}</h2>
</slot-component>

<!--Recibiendo data js de un hijo con names slot -->
<slot-component v-slot:teteSlot="dataQueViene">
    <p> {{ dataQueViene.text }}</p>
</slot-component>


<!--  Agregar clases css a un elemento-->
<agregar_clasesComponent />

</template>

<style>

</style>
