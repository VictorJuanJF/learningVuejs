Vue.component('vmodel-checkboxes', {
    data() {
        return {
            frameworks: []
        }
    },
    template: `
    <div>
    <h2>Trabajando con vmodel checkboxes</h2>
    <input type="checkbox" id="vuejs2" value="Vuejs 2" v-model="frameworks"/>
    <label for="vuejs2">Vuejs 2</label>
    <input type="checkbox" id="reactjs" value="React Js" v-model="frameworks"/>
    <label for="reactjs">Reactjs</label>
    <input type="checkbox" id="angular" value="Angular 2" v-model="frameworks"/>
    <label for="angular">Angular</label>
    <p>Frameworks seleccionados: {{frameworks}}</p>
    </div>
    
    `
});