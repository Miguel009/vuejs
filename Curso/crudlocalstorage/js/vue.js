const crud = new Vue({
    el:'#crud',
    data:{
        title: "Crud con LocalStorage",
        tareas:[],
        nuevaTarea: ''
    },
    methods:{
        agregarTarea(){
            this.tareas.push({
                nombre: this.nuevaTarea,
                estado: false
            });

            this.nuevaTarea = "";
            localStorage.setItem('gym-vue', JSON.stringify(this.tareas))
        },
        editarTarea(tarea){
            this.tareas[tarea].estado = !this.tareas[tarea].estado;
            localStorage.setItem('gym-vue', JSON.stringify(this.tareas))
        },
        eliminar(tarea){
            this.tareas.splice(tarea, 1)
            localStorage.setItem('gym-vue', JSON.stringify(this.tareas))
        }
    },
    created (){
        let datosDB = JSON.parse(localStorage.getItem('gym-vue'))
        if(datosDB==null){
            this.tareas = [];
        }
        else
        {
            this.tareas = datosDB;
        }
    }
   

})