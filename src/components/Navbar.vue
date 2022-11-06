<template>
<div class="d-flex flex-column flex-shrink-0 bg-light" style="width: 4.5rem;height: 100vh;">
    <a href="/" class="d-block p-3 link-dark text-decoration-none" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Icon-only">
      Burry
    </a>
    <ul class="nav nav-pills nav-flush flex-column mb-auto text-center">
      <li class="nav-item">
        <router-link class="nav-link py-3 border-bottom" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Home" to="/dashboard" exact><font-awesome-icon icon="fa-solid fa-gauge" /></router-link>
      </li>
      <li>
        <router-link class="nav-link py-3 border-bottom" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Home" to="/weekly-report" exact><font-awesome-icon icon="fa-solid fa-box-archive" /></router-link>
      </li>
      <li>
        <router-link class="nav-link py-3 border-bottom" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Home" to="/administrator" exact><font-awesome-icon icon="fa-solid fa-superscript" /></router-link>
      </li>
    </ul>
    <div class="dropdown border-top">
      <a href="#" class="d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none dropdown-toggle" id="dropdownUser3" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://github.com/waldrey.png" alt="mdo" width="24" height="24" class="rounded-circle">
      </a>
      <ul class="dropdown-menu text-small shadow" aria-labelledby="dropdownUser3">
        <li><a class="dropdown-item" href="/settings">Configurações</a></li>
        <li><hr class="dropdown-divider"></li>
        <li><a class="dropdown-item" href="#">Desconectar</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavbarComponent',
  data() {
    return {}
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
    background-color: #FFBF69 !important;
    color: #FFF !important;
  }

  .nav-pills .nav-link {
    border-radius: 0;
    color: #FFBF69;
  }
</style>
