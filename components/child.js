Vue.component('child-data', {
    data() {
        return {
            cmpName: 'Child data cmp brus'
        }
    },
    template: `
    <div>
    <h2>Acceso a datos del cmp hijo desde el cmp padre</h2>
    </div>
    `
})