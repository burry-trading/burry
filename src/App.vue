<template>
  <div v-if="isLogin">
    <router-view/>
  </div>
  <div v-else style="display: flex; justify-content: center; width: 100vw;">
    <NavbarComponent/>
    <router-view/>
  </div>
</template>

<script>
import NavbarComponent from './components/Navbar.vue';

export default {
  name: 'App',
  components: { NavbarComponent },
  computed: {
    isLogin() {
      return this.$route.name === 'login'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Satoshi', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.btn-primary {
  background-color: #FFBF69 !important; 
  border-color: #FFBF69 !important; 
}

.nav-link {
  color: #FFBF69 !important;
}

.nav-pills .nav-link.active {
  color: #FFF !important;
}


</style>
