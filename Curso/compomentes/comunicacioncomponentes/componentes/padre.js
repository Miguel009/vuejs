Vue.component('padre', {
    template: `
    <div class="p-5 bg-red-500 text-white">
    <h2 class="text-4xl">Componente Padre tiene el numero {{numeroPadre}} </h2>
    <button class="bg-blue-600 text-white rounded p-1 my-1" v-on:click="numeroPadre++">Aumentar</button>
    <!--Aqui como se puede ver el hijo agarra la informacion del numero padre-->
    <hijo :numero="numeroPadre" @nombreHijo="nombrePadre=$event"></hijo>
    <h2 class="text-2xl bg-black text-white">Dato traido desde el hijo utilizando la funcion emit y mounted de vue: {{nombrePadre}} </h2>
    </div>
    `,
    data(){
        return {
            numeroPadre: 45,
            nombrePadre: ''
        }
    }
})