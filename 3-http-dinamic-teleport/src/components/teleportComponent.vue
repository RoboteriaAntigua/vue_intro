<template>
    <h1>teleport</h1>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis exercitationem molestias ducimus blanditiis assumenda dolorem repellat perspiciatis maxime, ab odit quo dolore vel deleniti laborum, rem aperiam? Explicabo, totam voluptate!</p>
    <teleport to="body">
        <div >hola estoy teletransportado</div>
    </teleport>

    <teleport to="#id1">
        <div>Teletransportado a un id especifico del dom</div>
    </teleport>

</template>