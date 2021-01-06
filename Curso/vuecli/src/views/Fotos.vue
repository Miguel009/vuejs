<template>
    <div>
        <h1>Galeria</h1>
        <Foto/>
        <button class="btn btn-secondary mt-4 mr-1" @click="home">Home</button>
        <button class="btn btn-secondary mt-4 mr-1" @click="anterior">Anterior</button>
        <button class="btn btn-secondary mt-4 mr-1" @click="siguiente">Siguiente</button>
    </div>
</template>

<script>
import Foto from '@/components/Foto'
export default {
    components:{
        Foto
    },
    methods:{
        /*aqui lo que estamos haciendo es que al dar click con un boton nos llevara a la ruta colocada que 
        en este caso es el root */
        home(){
            this.$router.push('/')
        },
        anterior()
        {
            this.$router.go(-1);
        },
        siguiente()
        {
            this.$router.go(1)
        }
    }
}
</script>