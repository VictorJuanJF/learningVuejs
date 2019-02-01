Vue.component('child-methods', {
    data() {
        return {
            cmpName: 'Child Methods CMP'
        }
    },
    methods: {
        showcCmpName() {
            console.log("Llamada al metodo cmpName", this.cmpName);
        }
    },
    template: `
    <div>
    <h2>Acceso a metodos del cmp hijo desde el cmp padre</h2>
    </div>
    `
})