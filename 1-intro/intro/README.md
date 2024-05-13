# intro

# Interpolando data
    En template: Mi variable: {{variable }}

    En    <script>
    export default {
        data() {
            return {
                variable: 'hola topo',


# Enviando data con Props:
    El que envia:
    <componente1 variableton='tete'>
    El que recibe:
        template:
            {{ variableton }}
        script:
            export default {
                props: [
                    'variableton',
                    'otra_variable'
                ]
            }

# V-For
    Listando un componente n veces (n dado por un objeto)
    Template:
        <food-item v-for="x in foods" :foodname="x.name" /> 
    <script>
        export default {
            data() {
                return {
                    variable: 'hola topo',
                    foods: [
                      {name:'Apples',id:'1'},
                      {name:'Pizza',id:'2'},
                      {name:'Rice',id:'3'},
                      {name:'Fish',id:'4'},
                      {name:'Cake',id:'5'}]

    Crear n list, siendo n el size de un arreglo:
    Template:
         <li v-for="x in arreglo" >arr: {{x}}</li>
    script
        data() {
            return {
                arreglo: ['uno','ods','tres']
            }
        }


# Enviando data de hijo a padre con emit:
    Emitir un evento: this.$emit ( "nombreEvento", ciertaData);
    Cierta data llega al padre como parametro del metodo que dispara el evento.

    Hijo:
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

    Padre:
    Template:
        <hijo @evento1="metodo2"></hijo>
        <p>Recibiendo del hijo: {{ variable2 }}</p>

    script:
         metodo2 (par1){
        this.variable2=par1;
      }
