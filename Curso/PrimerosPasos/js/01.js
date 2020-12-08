/*Aqui estamos diciendo que el contenido de nuestro contenedor trabaja con vue y en este caso
app es el id del contenedor usado  cabe recalcar que la variable const puede llamarse como nosotros queramos*/
const app = new Vue({
    el: '#app' ,
    data: {
        Ideas:['Nuevas', 'Hunter', 'RPM', 'Megaforce'],
        Arreglo: [
        {nombre: 'Hunter', estado:'activo', edad:45},
        {nombre: 'Hanter', estado: 'Desactivado', edad:78}],
        nuevoUsuario: '',
        nuevoEstado:'Activo',
        nuevoEdad:0,
        total:0,
        fondo: 'bg-red-400',
        color: false
    },
    methods:{
        /* Esta es una forma de llamara a una funcion que se desea
        agregarNuevo:function(){

        } 
        Aunque tambien se puede hacer de esta manera
        */
       agregarNuevo (e){
            e.preventDefault();
           /*Para poder agregar datos al arreglo de arriba como no estan tecnicamente en el mismo lugar
           se utiliz la palabra decis para decir que es el arreglo que se encuentra en este espacio de trabajo es decir app */
        this.Arreglo.push({
            nombre: this.nuevoUsuario,
            estado: this.nuevoEstado,
            edad: this.nuevoEdad
        })
        this.nuevoUsuario = "";
        this.nuevoEstado='Activo'
        this.nuevoEdad =0;
       },
       otroMetodo(usuario){
        this.nuevoUsuario = usuario.nombre;
        this.nuevoEstado = usuario.estado;
        this.nuevoEdad = usuario.edad;
       }
    },
    /*con computed se realizan lo que son funciones que requieran calculos matematicos cada vez que se modifique el dato numerico en este caso seria edad porque es afectado por su propiedades */
    computed: {
        sumaredad(){
            this.total = 0;
            for (ar of this.Arreglo) {
                this.total = this.total + ar.edad;             
            }
            return this.total;
        }
    }
})