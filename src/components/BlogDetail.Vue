<template lang="pug">
  div(class='blog-detail')
    h1(class='header') {
    div(class='body')
      h1 title: 
        span {{ blog.title }}
      h1 body: 
        <blogBody/>
    h1(class='footer') }
</template>

<script>
import data from '@/assets/data';
import axios from 'axios';
import moment from 'moment';
import Body from './body';

export default {
  data() {
    return {
      blog: data.blog[0],
      errors: [],
    };
  },
  async created() {
    try {
      const response = await axios.get(`/api/blog/${this.$route.params.id}`);
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
  components: {
    blogBody: Body,
  },
};
</script>

<style lang="scss">
@import url(https://fonts.googleapis.com/css?family=Roboto+Mono);

  ::-webkit-scrollbar { 
    width: 5px;
    height: 8px;
    background-color: orange;
  }
  ::-webkit-scrollbar-track { 
    width: 5px;
    height: 8px;
    background-color: orange;
  }
  ::-webkit-scrollbar-thumb { 
    width: 5px;
    height: 8px;
    background-color: orange;
  }

  .blog-detail {
    width: 80%;
    margin: auto;
    padding-top: 5%;
    left: 0;
    right: 0;
    flex-direction: column;
  }
</style>
