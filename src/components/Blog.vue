<template lang="pug">
  div(class='wrapper')
    ul(class='blog-list')
      li(v-for='item in blogs') {{ item.title }}
  
</template>

<script>
/* eslint arrow-body-style: ["error", "always"] */
import data from '@/assets/data';

console.log(data.blog);

export default {
  data: () => {
    return {
      blogs: data.blog,
    };
  },
};
</script>

<style lang="scss">

</style>