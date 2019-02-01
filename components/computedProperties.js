Vue.component('computed-properties', {
    data() {
        return {
            name: 'Victorrrrrrrrrrrrrrrrrrrrrrrr',
            surname: 'Jimenez'
        }
    },
    computed: {
        fullname() {
            return `${this.name} ${this.surname}`
        }
    },
    template: `
    <div>
        <h2>{{fullname}}</h2>
    </div>
    `
});