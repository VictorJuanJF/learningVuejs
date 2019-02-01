Vue.component('loops', {
    data() {
        return {
            frameworks: [{
                    id: 1,
                    name: 'Vuejs 2'
                },
                {
                    id: 2,
                    name: 'Reactjs'
                },
                {
                    id: 3,
                    name: 'Angular 4'
                },
                {
                    id: 4,
                    name: 'Laravel'
                },
                {
                    id: 5,
                    name: 'Ember'
                }
            ]
        }
    },
    template: `
    <div>
            <h2>Bucles con v-form</h2>
            <ul v-if="frameworks.length">
                <li v-for="(framework,id) in frameworks":key="framework.id">
                    ({{id}}) {{framework.name}}
                </li>
            </ul>
        </div>
    `
});