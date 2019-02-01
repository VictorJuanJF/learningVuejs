Vue.component('login-form', {
    data() {
        return {
            logged: false,
            user: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        login() {
            this.logged = this.user.email == 'test@gmail.com' && this.user.password == 1234;
        }
    },
    template: `
    <div>
            <h2>Formulario de loggin</h2>
            <p v-show="logged" style="background:green;color:#fff;">
                Has iniciado sesion con los datos: {{user}}
            </p>
            <form @submit.prevent="login">
                <input v-model="user.email" type="email" name="email" />
                <input v-model="user.password" type="password" name="password" />
                <input type="submit" value="Iniciar sesion">
            </form>
        </div>
    `
});