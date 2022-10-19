<template>
  <div class="container">
    <div class="row" v-if="error.status">
      <div class="col-sm-12">
        <div class="alert alert-danger" role="alert">
          {{ error.message }}
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <div class="mb-3">
          <label for="inputEmail" class="form-label">Email</label>
          <input type="email" class="form-control" v-model="auth.email">
        </div>
        <div class="mb-3">
          <label for="inputPassword" class="form-label">Senha</label>
          <input type="password" class="form-control" v-model="auth.password">
        </div>
        <button id="btnLogin" class="btn btn-primary" v-on:click="authenticate">Enviar</button>
      </div>
    </div>
  </div>
</template>

<script>
import fetch from './../../services/burry.service';

export default {
  name: 'LoginPage',
  data: () => {
    return {
      error: {
        status: false,
        message: '',
      },
      auth: {
        email: undefined,
        password: undefined
      }
    }
  },
  methods: {
    authenticate() {
      if (!this.auth.email || !this.auth.password ) {
        this.error.status = true;
        this.error.message = 'Hey!! Você precisa preencher os dados antes de tentar fazer login.'
        return;
      }

      fetch.post('/api/v1/users/authenticate', this.auth)
      .then((res) => {
        localStorage.setItem('tokenUser', res.data.data.token);
        localStorage.setItem('userData', JSON.stringify(res.data.data.user));
        setTimeout(() => this.$router.push({ path: '/dashboard' }), 2000);
      })
      .catch((err) => {
        if (err) {
          this.error.status = true;
          this.error.message = 'Oops! Parece que as credenciais informadas são inválidas, tente novamente.'
        }
      });
    }
  }
}
</script>

<style>
#app {
  font-family: 'DM Sans', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
