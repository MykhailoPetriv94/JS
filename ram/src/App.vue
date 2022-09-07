<template>
    <div id="app">
      <ram-nav-menu/>
      <router-view />
      <ram-footer />
    </div>
  </template>
  <script>
  import RamNavMenu from "@/components/general/RamNavMenu.vue";
  import RamFooter from "@/components/general/RamFooter.vue";
  export default {
    components: {
      RamNavMenu,
      RamFooter,
    },
  };
  </script>
  <style lang="scss"></style>