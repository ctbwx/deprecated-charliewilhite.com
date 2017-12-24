<template lang="pug">
  div
    div(class='parallax')
      el-button(class='main-header' type='text') Charlie Wilhite
      span(class='sub-header') Software Engineer
    section(class='buttons')
      ul
        ul
          el-button(class='blog' type='text') blog
        ul
          el-button(class='projects' type='text') projects
        ul
          el-button(class='about' type='text') about
</template>

<script>
export default {
};
</script>

<style lang="scss">
.parallax {
    /* The image used */
    background-image: url('../assets/drmanhattan.jpg');

    /* Set a specific height */
    height: 400px;
    width: 80%;
    margin: 2%;
    margin-right: 0%;
    float:left;

    /* Create the parallax scrolling effect */
    background-attachment: fixed;
    background-position: top;
    background-repeat: no-repeat;

}

.buttons {
  float: left;
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  margin-top: 1%;
  height: 400px;

  .blog {
    font-size: 40px;
    color: rgb(222, 139, 194);
  }
  .projects {
    font-size: 40px;
    color: rgb(222, 139, 194);
  }
  .about {
    font-size: 40px;
    color: rgb(222, 139, 194);
  }
}

.main-header {
  font-size: 40px;
  margin-left: 30%;
  color: rgb(223, 216, 231);
  font-weight: bold;
}

.sub-header {
  font-size: 30px;
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  margin-left: 1%;
  color: rgb(134, 125, 143);
}
</style>
