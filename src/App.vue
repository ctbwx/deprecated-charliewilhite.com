<template>
  <div class="app">
    <navbar/>
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/navbar';

export default {
  name: 'app',
  components: {
    navbar: Navbar,
  },
};
</script>
