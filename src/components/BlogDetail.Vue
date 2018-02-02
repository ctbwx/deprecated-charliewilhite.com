<template lang="pug">
  div(class='blog-detail')
    h1 {{ blog.title }}
    <blogBody/>
    span(class='createdAt') {{ blog.createdAt | moment }}
</template>

<script>
// import data from '@/assets/data';
import axios from 'axios';
import moment from 'moment';
import Body from './body';

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
      this.blog = response.data[0];
    } catch (e) {
      this.errors.push(e);
    }
  },
  filters: {
    moment(date) {
      return moment(date).format('MMMM Do YYYY, h:mm:ss a');
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
    height: 5px;
  }
  ::-webkit-scrollbar-thumb {
    -webkit-border-radius: 20px;
    border-radius: 15px;
    background: rgba(0, 0, 0, 0.8);
  }
  .blog-detail {
    display: flex;
    font-family: Roboto Mono;
    width: 80%;
    margin: auto;
    padding-top: 5%;
    left: 0;
    right: 0;
    flex-direction: column;

    opacity:0;
    opacity: 1 \9; /*just in case ie*/
    -webkit-animation:fadeIn ease-in 1;
    -moz-animation:fadeIn ease-in 1;
    animation:fadeIn ease-in 1;

    -webkit-animation-fill-mode:forwards;
    -moz-animation-fill-mode:forwards;
    animation-fill-mode:forwards;

    -webkit-animation-duration:.3s;
    -moz-animation-duration:.3s;
    animation-duration:.3s;
  }
  .body-post {
    padding-left: 3%;
  }
  .createdAt {
    color: rgb(182, 182, 182);
  }
</style>
