<template lang="pug">
  div(class='blog')
    el-container(class='entry' v-for='item in blogs' :key='item.id')
      el-header(class='header') {{ item.title }}
      el-main(class='main') {{ item.teaser }}
      el-footer(class='footer') {{ item.createdAt }}
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
    width: 50%;
    margin: auto;
    padding-top: 5%;
    left: 0;
    right: 0;
    justify-content: space-around;
    flex-direction: column;
  }
  .entry {
    margin: 5%;
    border-color: orange;
    border-style: solid;
  }
  .header {
    text-align: center;
    padding-top: 3%;
    font-family: Source Sans Pro, Helvetica Neue, Arial,sans-serif;
  }
  .main {
    font-family: Merriweather, Georgia, serif;
  }
  .footer {
    font-family: Source Sans Pro, Helvetica Neue, Arial,sans-serif;
  }
</style>