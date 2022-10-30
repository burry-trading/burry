<template>
  <div class="container-fluid">
    <!-- <div class="row" v-if="error.status">
      <div class="col-sm-12">
        <div class="alert alert-danger" role="alert">
          {{ error.message }}
        </div>
      </div>
    </div> --> 
    <div class="row">
      <div class="col-sm-6 login-image"></div>
      <div class="col-sm-6 login-form">
        <div class="login-form-components">
          <h1 style="font-weight: 900;">Burry Trading</h1>
          <div class="mb-3">
            <label for="inputEmail" class="form-label">Email</label>
            <input type="email" class="form-control" v-model="auth.email">
          </div>
          <div class="mb-3">
            <label for="inputPassword" class="form-label">Senha</label>
            <input type="password" class="form-control" v-model="auth.password">
          </div>
          <button id="btnLogin" class="button-login" v-on:click="authenticate">Acessar</button>
        </div>
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
  .login-image {
    background-image: url('https://images-development-papermoney.sfo3.digitaloceanspaces.com/pexels-david-mcbee-730564.jpg');
    background-size: cover;
    height: 100vh;
    filter: brightness(50%);
  }

  .login-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .login-form-components {
    width: 80%;
  }

  .button-login {
    padding: 5px 20px 5px 20px;
    border-radius: 32px;
    border: 0px;
    background-color: #2EC4B6;
    color: #0C4944;
    font-weight: bold;
  }
</style>
