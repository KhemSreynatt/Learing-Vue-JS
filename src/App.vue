<template>
  <div class="app">
    <!-- Sidebar -->
    <SidebarMenu v-if="!['login', 'register', 'forgetPassword'].includes($route.name)" />

    <!-- Content -->
    <router-view />
  </div>
</template>


<script>
import SidebarMenu from './components/sidebar-menu.vue';
export default {
  components: {
    SidebarMenu
  }
};
</script>

<style lang="scss">
:root {
  --primary: #008080;
  --primary-alt: #22c55e;
  --grey: #64748b;
  --dark: #1e293b;
  --dark-alt: #334155;
  --light: #f1f5f9;
  --sidebar-width: 300px;
  --blue: #0066b2;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Fira sans', sans-serif;
}

body {
  background: var(--light);
}

button {
  cursor: pointer;
  appearance: none;
  border: none;
  outline: none;
  background: none;
}

.app {
  display: flex;

  main {
    flex: 1 1 0;
    padding: 2rem;

    @media (max-width: 1024px) {
      padding-left: 6rem;
    }
  }
}
</style>
