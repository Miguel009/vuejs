/*COMPONENTES obviamente el componente debe estar dentro del div padre que en este caso es app
para que se pueda visualizar*/
Vue.component('saludo', {
    /*esto es lo que se va a mostrar aqui en template es necesario que si se tiene mas 
    de un solo dato como en este un h1 y un h3 es necesario que haya un div padre*/
    template: `
    <div>
    <h1>{{saludos}}</h1>
    <h3>Nuevo texto</h3>
    </div>
    `,
    /*aqui en los componenetes la informacion se maneja diferente ya que es necesario que se envie
    como un funcion la cual debe reotrnar informacion o en este caso las variables*/
    data(){
        return {
            saludos: "hola vue 2"
        }
    }
})