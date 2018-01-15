<template lang="pug">
  div(class='blog')
    el-container(class='entry' v-for='item in blogs' :key='item.id')
      el-container(class='main')
        span(class='blog-header') {{ item.title }}
        el-main(class='body') {{ item.teaser }}
        el-footer(class='footer-text') {{ item.createdAt }}
      el-aside(class='aside' v-if='item.thumbnail.length')
        img(class='aside-image' :src='item.thumbnail')
</template>

<script>
/* eslint arrow-body-style: ["error", "always"] */
import data from '@/assets/data';

export default {
  data: () => {
    return {
      blogs: data.blog,
    };
  },
};
</script>

<style lang="scss">
  .blog {
    width: 80%;
    margin: auto;
    padding-top: 5%;
    left: 0;
    right: 0;
    flex-direction: column;
  }
  .entry {
    display: flex;
    flex-direction: row;
    margin: 5%;
  }
  .main {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
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
    line-height: 1.9em;
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
    .entry { flex-direction: column; }
    .blog-header { 
      padding-top: 10%;
      font-size: 1.8em;
    }
    .aside { order: 1; }
    .main { order: 2; }
  }
</style>