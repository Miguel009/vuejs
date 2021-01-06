<template>
    <div class="mt-5">
        <h1>Formulario</h1>
       <form>
           <b-row>
               <b-col md="3">
                    <b-form-input type="text" v-model="texto"
                    :state = "comprobar"
                    ></b-form-input>
                    <small v-if="!comprobar">Minimo de 3 caracteres</small>
                    <h4 class="mt-2">Texto: {{texto}}</h4>
               </b-col>
                <b-col md="3">
                     <b-form-select v-model="selected" :options="options">
                     </b-form-select>
                     <div>Selected: <strong>{{ selected }}</strong></div>
               </b-col>
                <b-col md="3">
                     <b-form-radio-group v-model="radio" :options="options"></b-form-radio-group>
                     <div>Radio: <strong>{{ radio }}</strong></div>
               </b-col>
                <b-col md="3">
                     <b-form-checkbox-group v-model="checkbox" :options="options"></b-form-checkbox-group>
                     <div>Check: <strong>{{ checkbox }}</strong></div>
               </b-col>
           </b-row>
       </form>
    </div>
</template>
<script>
export default {
    name: "Forms",
    data(){
        return {
            texto: "",
            selected: null,
            options: [
            { value: null, text: 'Please select an option' },
            { value: 'a', text: 'This is First option' },
            { value: 'b', text: 'Selected Option' },
            { value: { C: '3PO' }, text: 'This is an option with object value' },
            { value: 'd', text: 'This one is disabled', disabled: true }
            ],
            radio: null,
            checkbox: []
        }
    },
    computed:{
        comprobar(){
            return this.texto.length > 2 ? true : false
        }
    }
}
</script>