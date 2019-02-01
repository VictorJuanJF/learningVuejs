let myMixin = {
    mounted() {
        console.log("Mixin init");
        console.log(this.mixinData);
        this.test();
    },
    data() {

        return {
            mixinData: 'Mixin Data gaa'
        }
    },
    methods: {
        test() {
            console.log("test from mixin");
        }
    }
}

Vue.component('mixin', {
    mixins: [myMixin],
    mounted() {
        console.log('Mounted from component with mixin');

    },
    data() {
        return {
            mixinData2: 'Mixin data desde el componente brus'
        }
    },
    template: `
    <div>
        <h2>Uso de mixins</h2>
        <h2>{{mixinData}}</h2>
        <h2>{{mixinData2}}</h2>
    </div>
    `
});