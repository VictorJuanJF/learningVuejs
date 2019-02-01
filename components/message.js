Vue.component('message', {
    data() {
        return {
            mensajes: {
                mensaje1: 'te pica el brus',
                mensaje2: {
                    nel: 'nel perro'
                }
            }
        }
    },
    template: `
    <div>
        <h2>{{mensajes.mensaje1}} {{mensajes.mensaje2.nel}}</h2>
    </div>
    `
});