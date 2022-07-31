<template>
    <div>
        <NavbarComponent/>
        <div>
          <slot name="content"></slot>
        </div>
    </div>
</template>

<script>
import NavbarComponent from './Navbar.vue';

export default {
    name: "LayoutComponent",
    components: { NavbarComponent }
}
</script>

<style>
</style>
