<template lang="pug">
  div(class='blog')
    el-container(class='entry' v-for='item in blogs' :key='item.id')
      el-container
        el-header(class='blog-header') {{ item.title }}
        el-main(class='main') {{ item.teaser }}
        el-footer(class='footer-text') {{ item.createdAt }}
      //- el-aside(class='aside' v-if='item.thumbnail.length')
      //-   img(class='aside-image' :src='item.thumbnail')
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
    display: flex;
    width: 60%;
    margin: auto;
    padding-top: 5%;
    left: 0;
    right: 0;
    justify-content: space-around;
    flex-direction: column;
  }
  .entry {
    margin: 5%;
  }
  .blog-header {
    display: block;
    text-align: center;
    font-size: 2em;
    text-rendering: optimizelegibility;
    font-style: italic;
    font-weight: 300;
    font-size: 43px;
    line-height: 1.3em;
  }
  .main {
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
    line-height: 100px;
    bottom: 0px;
    text-align: left;
    font-family: Source Sans Pro, Helvetica Neue, Arial,sans-serif;
    font-size: 12px;
    color: rgb(182, 182, 182);
  }
</style>