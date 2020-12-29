Vue.component("hijo", {
    template: `
    <div class="py-5 bg-green-400">
        <h4 class="text-3xl">Componentes hijo</h4>
        <h5 class="text-2xl">Esto es lo que obtuvimos del padre: {{numero}}</h5>
        <h5 class="text-2xl">Nombrazo: {{Nombre}}</h5>
    </div>
    `,
    props:['numero'],
    
    data()
    {
        return {
            Nombre: "Hunter AKA Poderoso"
        }
    },

    mounted()
    {
        this.$emit('nombreHijo', this.Nombre)
    }
    
})