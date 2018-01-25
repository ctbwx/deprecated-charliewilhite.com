<template lang="pug">
  div(class='projects-wrapper')
    <el-col :span="8" v-for="item in projects" :key="o" :offset="index > 0 ? 2 : 0">
      <el-card :body-style="{ padding: '0px' }">
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