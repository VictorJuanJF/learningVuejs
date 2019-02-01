Vue.component('getset', {
    data() {
        return {
            amount: 0
        }
    },
    computed: {
        amountFormatted: {
            get() {
                return `$ ${this.amount}`;
            },
            set(newValue) {
                this.amount = newValue;
            }
        }
    },
    template: `
    <div>
    <input v-model="amount" type="text" />/div>
        <h2>{{amountFormatted}}</h2>
    </div>
    `
});