
<script setup >
import FooterView from './components/FooterPage.vue'
import NavBarView from './components/NavbarPage.vue'
</script>
<template>
  <div style="background: rgb(240, 240, 240)">
    <NavBarView />
    <RouterView />
    <FooterView />
  </div>
</template>
