<template lang="pug">
  div(class='blog-detail')
</template>

<script>
import data from '@/assets/data';
import axios from 'axios';
import moment from 'moment';

export default {
  data() {
    return {
      blogs: data.blog,
      errors: [],
    };
  },
  async created() {
    try {
      const response = await axios.get(`/api/blog/${this.$route.query.id}`);
      this.blogs = response.data;
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
