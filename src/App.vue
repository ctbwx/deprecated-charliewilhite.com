<template>
  <div class="app">
    <navbar></navbar>
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar';

export default {
  name: 'app',
  components: { navbar: Navbar },
};
</script>
