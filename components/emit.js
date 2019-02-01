Vue.component('emit', {
    data() {
        return {
            carName: 'Meteoro'
        }
    },
    template: `
    <div>
        <h2>Emitir eventos con vuejs 2</h2>
        <p @click="$emit('show-car-name',carName)">Pulsa aqui para emitir un evento a la distancia</p>
    </div>
    `
});