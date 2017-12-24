<template>
  <div class="navbar">
    <div class="comic">
      <h1>{{ input }}</h1>
      <el-input placeholder="Please input" v-model="input"></el-input>
    </div>
    <div class="buttons">
      <el-button class="projects" type="primary" icon="el-icon-menu">Projects</el-button>
      <el-button class="resume" type="primary" icon="el-icon-tickets">Résumé</el-button>
      <el-button class="about-me" type="primary" icon="el-icon-more-outline">About Me</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: '',
    };
  },
};
</script>

<style lang="sass">

</style>
