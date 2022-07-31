<template>
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <h1 class="text-center">Bem-vindo ao burry! 🎉</h1>
            <p class="text-center">Percebemos que você ainda não tem <a href="/settings">Binance</a> configurado em nosso sistema para iniciar as operações automizadas com nosso bot.</p>

            <p class="text-center text-muted">Assim que você nós enviar os dados da sua API da Binance, vamos conseguir carregar nosso dashboard completo. 😉</p>
        </div>
      </div>
    </div>
</template>

<script>
import fetch from './../../services/burry.service';

export default {
  name: 'DashboardPage',
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

      fetch.post('api/v1/users/authenticate', this.auth)
      .then((res) => console.log(res))
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
