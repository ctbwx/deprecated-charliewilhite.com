<template lang="pug">
  div(class='blog')
    el-container(class='entry' v-on:click.native="detail" v-for='item in blogs' :id='item.id' :key='item.id')
      el-container(class='main')
        span(class='blog-header') {{ item.title }}
        el-main(class='body') {{ item.teaser }}
        el-footer(class='footer')
          span(class='footer-text') {{ item.created_at | moment }}
      el-aside(class='aside' v-if='item.thumbnail !== null')
        img(class='aside-image' :src='item.thumbnail')
</template>

<script>
import axios from 'axios';
import moment from 'moment';

export default {
  data() {
    return {
      blogs: [],
      errors: [],
    };
  },
  async created() {
    try {
      const response = await axios.get('/api/blog');
      this.blogs = response.data;
    } catch (e) {
      this.errors.push(e);
    }
  },
  filters: {
    moment(date) {
      return moment(date).format('MMMM Do YYYY, h:mm:ss a');
    },
  },
  methods: {
    detail() {
      const id = event.currentTarget.getAttribute('id');
      this.$router.push(`/blog/${id}`);
    },
  },
};
</script>

<style lang="scss">
  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }
  ::-webkit-scrollbar-thumb {
    -webkit-border-radius: 20px;
    border-radius: 15px;
    background: rgba(0, 0, 0, 0.8);
  }
  .blog {
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
  .entry {
    cursor: pointer;
    display: flex;
    flex-direction: row;
    margin: 5%;
    border-radius: 5px;
    background-color: rgb(255, 255, 255);
    box-shadow: 0 1px 2px rgba(0,0,0,0.15), 0 1px 8px rgba(0,0,0,0.1);
    transition: all 0.3s ease-in-out;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    -webkit-transform: translateZ(0) scale(1.0, 1.0);
    -webkit-font-smoothing: antialiased !important;
    transform: translateZ(0);
  }
  .entry::after {
    content: "";
    border-radius: 5px;
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    opacity: 0;
    -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
    transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  }
  .entry:hover {
    -webkit-transform: scale(1.25, 1.25);
    transform: scale(1.01, 1.01);
  }

  .entry:hover::after {
    opacity: 1;
  }
  .main {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    backface-visibility: hidden;
    transform: translateZ(0) scale(1.0, 1.0);
    -webkit-backface-visibility: hidden;
    -webkit-transform: translateZ(0) scale(1.0, 1.0);
    -webkit-font-smoothing: antialiased !important;
  }
  .blog-header {
    display: block;
    text-align: center;
    align-self: center;
    font-style: italic;
    font-weight: 300;
    font-size: 2.4em;
    line-height: 1.3em;
  }
  .aside {
    align-self: center;
    width: 200px;
    height: 200px;
    overflow: hidden;
  }
  .aside-image {
    align-self: center;
    width: 100%;
    height: 100%;
  }
  .body {
    flex: 2;
    overflow: hidden;
    font-style: normal;
    font-variant-ligatures: normal;
    font-variant-caps: normal;
    font-variant-numeric: normal;
    font-variant-east-asian: normal;
    font-weight: normal;
    font-stretch: normal;
    font-size: 15px;
    line-height: 2em;
    font-family: Merriweather, Georgia, serif;
  }
  .footer-text {
    flex: 3;
    line-height: 100px;
    bottom: 0px;
    text-align: left;
    font-family: Source Sans Pro, Helvetica Neue, Arial,sans-serif;
    font-size: 12px;
    color: rgb(182, 182, 182);
  }
  @media screen and (max-width: 1000px) {
    .blog { width: 90% }
    .entry { flex-direction: column; }
    .blog-header {
      padding-top: 10%;
      font-size: 1.8em;
    }
    .aside { order: 1; }
    .main { order: 2; }
  }
</style>
