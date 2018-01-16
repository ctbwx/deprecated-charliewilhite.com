<template lang="pug">
  div(class='blog-detail')
    h1 {{ $route.params.id }}
</template>

<script>
/* eslint-disable arrow-body-style */
import data from '@/assets/data';


export default {
  data() {
    return {
      entry: {
        source: data.ref(`jobs/${this.$route.params.id}`),
        asObject: true,
      },
    };
  },
};
</script>

<style lang="scss">

</style>
