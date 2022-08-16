<template>
    <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">Burry Trading</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div v-if="user" class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" to="/dashboard" exact>Dashboard</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/settings" exact>Configurações</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/weekly-report" exact>Relatório Semanal</router-link>
            </li>
        </ul>
        <span class="navbar-text">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <router-link style="color:#0000008C" class="nav-link" to="/administrator" exact>Administração</router-link>
                </li>
                <li class="nav-item">
                    <a style="color:#0000008C" class="nav-link " href="#" v-on:click="logout">Sair</a>
                </li>
            </ul>
        </span>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavbarComponent',
  data() {
    return {
      user: undefined
    }
  },
  mounted() {
    if (localStorage.getItem('userData') && localStorage.getItem('tokenUser')) {
      this.user = localStorage.getItem('userData');
    }
  },
  methods: {
    logout() {
      localStorage.removeItem('userData');
      localStorage.removeItem('tokenUser');
      window.location = '/';
    }
  }
}
</script>

<style scoped>
  nav {
    margin-bottom: 2%;
  }

  .route-active {
    font-weight: 600;
  }
</style>
