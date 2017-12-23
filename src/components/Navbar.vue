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
  data () {
    return {
      input: '',
    }
  },
};
</script>

<style>
.comic {
  text-align: center;
  height: 200px;
  margin-top: 3%;
  margin-left: 6%;
  margin-right: 6%;
  font-family: system-ui;
  border-color: rgb(129, 73, 251);
  border-style: solid;
}

.buttons {
  margin: 1%;
  text-align: center;
}

.projects {
  margin-right: 9%;
}

.resume {
  margin-right: 9%;
}

.about-me {
  margin-left: 9%;
}
</style>
