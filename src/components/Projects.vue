<template lang="pug">
  div(class='project-wrapper')
    el-col(class='project-list' :span="8" v-for="item in projects" :key="item.id")
      el-card(class='project-card')
        div(class='project-info') {{ item.title }}
        img(:src='item.image')
</template>

<script>
import data from '@/assets/data';

export default {
  data() {
    return {
      projects: data.projects,
    };
  },
};
</script>

<style lang="scss">
  .el-card__body {
    display: flex;
    flex-direction: column;
    padding: 0px;
  }
  
</style>