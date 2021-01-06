<template>
    <div>
        <ul class="list-group">
            <li  v-for="(item, index) of ArrayOrdenado" class="list-group-item d-flex justify-content-between align-items-center" :key="item.nombre" @click="aumentar(index)">{{index +"-"+item.nombre}}

                <span class="badge badge-success badge-pill">{{item.cantidad}}</span>
            </li>
        </ul>
        <button class="btn btn-success mt-2" @click="resetear">Resetear</button>
    </div>
</template>


<script>
import {mapState, mapMutations} from 'vuex';

export default {
    name: 'Lista',
    computed:{
        ...mapState(['frutas']),
        /*aqui ocupamos el state para poder realizar el sort ya que 
        es un buena practica */
        ArrayOrdenado(state){
            return state.frutas.sort((a, b)=>b.cantidad - a.cantidad);
        }
    },
    methods:{
        ...mapMutations(['aumentar', 'resetear'])
    },
    
}
</script>