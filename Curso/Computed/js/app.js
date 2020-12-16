const app = new Vue({
    el:'#app',
    data:{
        titulo: "Buenoches",
        contador: 0
    },
    beforeCreate()
    {
        console.log("Este es un metodo que se crea antes de crear la data es decir antes o en el momento de crear toda la instancia de vue")
    },
    created()
    {
        /*Al crear los metodos observadores y eventos pero aun no se accede al DOM
        aun no se puede acceder al 'el' */
        console.log('created')
    },
    beforeMount()
    {
        /*Se ejecuta antes de insertar el DOM  es decir antes de que se coloquen las variables como en este caso el contador y el titulo*/
        console.log('beforeMount')
    },
    mounted(){
        //Se ejecuta al insertar el DOM es decir cuando ya se colocaron los datos de las variables en html
        console.log('mounted')
    },
    beforeUpdate(){
        /*Al dectectar los cambios */
        console.log('beforeUpdate')
    },
    updated(){
        /*Ak realizar los cambios */
        console.log('updated')
    },
    beforeDestroy(){
        /*Antes de destruir una instancia */
        console.log('BeforeDestroy')
    },
    destroyed(){
        //se destruye la intancia
        console.log('destroyed')
    }
    ,
    methods:
    {
        suma()
        {
            this.contador++
        },
        Destruir()
        {
            /*aqui se destruye la instancia de vue */
            this.$destroy();
        }
    },

    /*en computed estamos pasando datos que van a tener logica es decir
    algun metodo o algun datos diferente que va a estar constantemente cambiante */
    computed:{
        Invertido()
        {
            return this.titulo.split('').reverse().join('');
        },
        color()
        {
            return{
                'bg-green-300' : this.contador<=10,
                'bg-yellow-300' : this.contador>10 && this.contador<=20,
                'bg-red-300' : this.contador>20
            }
        }
        
    }
})