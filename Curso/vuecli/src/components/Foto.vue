<template>
    <div>
        <!--Aqui lo que estamos haciendo es que como a la ruta le colocamos un
        :id o que busque por medio de id aqui colocamos lo que es el signo de dolar para que busque en la ruta ese dato-->
        <h1>Foto: {{$route.params.id}} </h1>
        <router-link :to="{name: 'fotos', params: {id: item}}" v-for="item of fotosArreglo" :key="item">
            <button class="btn btn-success mr-1">Foto {{item}}</button>
        </router-link>
    </div>
</template>

<script>
export default {
    name: "Foto",
    data(){
        return{
            fotosArreglo: [1, 2, 3, 4]
        }
    }
}
</script>