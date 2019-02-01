Vue.component('watchers', {
    data() {
        return {
            user: null,
            oldUser: null
        }
    },
    methods: {
        async randomUser() {
            try {
                let data = await fetch('https://randomuser.me/api/');
                let json = await data.json();
                let user = json.results[0];
                console.log(user);
                this.user = `${user.name.title} ${user.name.first} ${user.name.last}`;
            } catch (error) {
                console.log("algo ha ido mal");
            }

        }
    },
    watch: {
        user(newValue, oldValue) {
            this.user = newValue;
            this.oldUser = oldValue;
        }
    },
    template: `
    <div>
    <h1>watchers bruses</h1>
    <button @click="randomUser">Obtener usuario aleatorio</button>
    <p>Nuevo usuario: {{user}}</p>
    <p> Anterior usuario: {{oldUser}}</p>
    </div>
    `
});