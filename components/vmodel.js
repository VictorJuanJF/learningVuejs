Vue.component('vmodel', {
    data() {
        return {
            framework: 'Vuejs 2'
        }
    },
    template: `
    <div>
    <h2>Trabajando con vmodel</h2>
    <input v-model="framework"/>
    <h>El framework escogido es: {{framework}}</h>
    </div>
    `
})