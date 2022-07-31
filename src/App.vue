<template>
  <div class="d-flex flex-column h-100">
    <NavbarComponent/>
    <router-view/>
    <footer class="footer mt-auto py-3 bg-light">
      <div class="container">
          <p class="text-center text-muted">Burry Trading © 2022</p>
      </div>
    </footer>
  </div>
</template>

<script>
import NavbarComponent from './components/Navbar.vue';

export default {
  name: 'App',
  components: { NavbarComponent }
}
</script>

<style>
#app {
  font-family: 'DM Sans', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
