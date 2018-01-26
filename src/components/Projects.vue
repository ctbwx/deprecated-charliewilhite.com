<template lang="pug">
  div(class='projects-wrapper')
    <el-col :span="8" v-for="item in projects" :key="item.id">
      <el-card :body-style="{ padding: '0px' }">
      img(:src='item.image')
      </el-card>
    </el-col>
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

</style>