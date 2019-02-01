Vue.component('methods', {
    data() {
        return {
            name: 'Victorrr',
            surname: 'Jimenez'
        }
    },
    computed: {
        fullname() {
            return `${this.name} ${this.surname}`
        }
    },
    methods: {
        hello() {
            alert("hola ", this.fullname);
        }
    },
    template: `
    <div>
        <h2>Ejecutar metodos con vuejs</h2>
        <p @click="hello">Pulsa aqui para ejecutar la alerta :v</p>
    </div>
    `
});