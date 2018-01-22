<template lang="pug">
  div(class='blog-detail')
    h1(v-model='blog') {{ blog }}
</template>

<script>
// import data from '@/assets/data';
import axios from 'axios';
import moment from 'moment';

export default {
  data() {
    return {
      blog: [],
      errors: [],
    };
  },
  async created() {
    try {
      const response = await axios.get(`/api/blog/${this.$route.params.id}`);
      console.log(response.data[0]);
      this.blog = response.data[0];
    } catch (e) {
      this.errors.push(e);
    }
  },
  filters: {
    moment(date) {
      return moment(date).format('MMM Do YY');
    },
  },
};
</script>

<style lang="scss">

</style>
