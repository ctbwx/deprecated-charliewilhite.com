<template lang="pug">
  div
    div(class='parallax')
      span(class='main-header') Charlie Wilhite
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
    display: inline-block;
    border-radius: 5px;
    box-shadow: 0 1px 2px rgba(0,0,0,0.15);

    /* Set a specific height */
    height: 383px;
    width: 1322px;
    margin-top: 2%;
    margin-left: 16%;
    float: left;

    /* Create the parallax scrolling effect */
    background-attachment: fixed;
    background-position: top;
    background-repeat: no-repeat;
    background-size: contain;
}

.buttons {
  float: left;
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  margin-top: 1%;
  height: 400px;

  .blog {
    font-size: 40px;
    color: rgb(222, 139, 194);
    position: relative;
    text-decoration: none;
  }
  .blog:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: rgb(222, 139, 194);
    visibility: hidden;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transition: all 0.3s ease-in-out 0s;
    transition: all 0.3s ease-in-out 0s;
  }
  .blog:hover:before {
    visibility: visible;
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }

  .projects {
    font-size: 40px;
    color: rgb(222, 139, 194);
    position: relative;
    text-decoration: none;
  }
  .projects:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: rgb(222, 139, 194);
    visibility: hidden;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transition: all 0.3s ease-in-out 0s;
    transition: all 0.3s ease-in-out 0s;
  }
  .projects:hover:before {
    visibility: visible;
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }

  .about {
    font-size: 40px;
    color: rgb(222, 139, 194);
    position: relative;
    text-decoration: none;
  }
  .about:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: rgb(222, 139, 194);
    visibility: hidden;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transition: all 0.3s ease-in-out 0s;
    transition: all 0.3s ease-in-out 0s;
  }
  .about:hover:before {
    visibility: visible;
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }
}

.main-header {
  font-size: 40px;
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
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
