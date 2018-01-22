<template>
  <div class="app">
    <navbar/>
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/navbar';
import Blog from '@/components/blog';

export default {
  name: 'app',
  components: {
    navbar: Navbar,
    blog: Blog,
  },
};
</script>
