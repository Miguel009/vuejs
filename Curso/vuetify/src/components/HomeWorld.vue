<template>
<div>
    <v-row>
      <v-col xs12>
        <v-card>
          <!--Aqui min y max se pone los dos puntos ya que son variables que se estan utilizando-->
          <v-date-picker v-model="picker" 
          full-width locale="es-sv" 
          :min="minimo" 
          :max="maximo"
          @change="getDolar(picker)"
          color="info"
          ></v-date-picker>
        </v-card>
         <v-card color="error" dark>
           <v-card-text class="display-1 text-center">
             {{valor}}
           </v-card-text>
         </v-card>
      </v-col>
  </v-row>
</div>
</template>

<script>
import axios from "axios";
import {mapMutations} from "vuex";
export default {
  name: 'HomeWorld',

  components: {

  },

  data: () => ({
    picker: new Date().toISOString().substr(0, 10),
    minimo:'1984',
    maximo: new Date().toISOString().substr(0, 10),
    valor: 0
  }),

  methods:{
    ...mapMutations(["mostrarLoading", "ocultarLoading"]),
    async getDolar(dia){
      
      this.mostrarLoading({titulo: "Obteniendo Info del dia "+dia});
      let fecha = dia.split('-').reverse().join('-');
      let datos = await axios.get(`https://mindicador.cl/api/dolar/${fecha}`);
      console.log(datos);
      if(datos.data.serie.length > 0)
      {
        this.valor = await datos.data.serie[0].valor;
      }
      else
      {
        this.valor = "No hay resultados";
      }
      this.ocultarLoading();
    }
  },

  created(){
    this.getDolar(this.picker);
  }
};
</script>