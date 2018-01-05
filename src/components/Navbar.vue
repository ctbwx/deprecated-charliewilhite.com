<template lang="pug">
div
    div(class='navbar')
        span(class='header') Charlie Wilhite
            <el-tabs v-model='activeName' @tab-click='handleClick'>
                <el-tab-pane label="Blog" name="first"></el-tab-pane>
                <el-tab-pane label="Projects" name="second"></el-tab-pane>
                <el-tab-pane label="About Me" name="third"></el-tab-pane>
            </el-tabs>
            div(class='social')
                span(class='follow-sub') Follow me...
                a(href='https://github.com/simplenclean' target='_blank'): img(src='../assets/github.png')
                a(href='https://www.instagram.com/simplenclean_/' target='_blank'): img(src='../assets/instagram.png')
                a(href='https://www.linkedin.com/in/charliewilhite/' target='_blank'): img(src='../assets/linkedin.png')
</template>

<script>
export default {
  data() {
    return {
      activeName: 'first',
    };
  },
  methods: {
    handleClick(tab) {
      // eslint-disable-next-line
      if (tab._uid === 6) {
        this.$router.push('blog');
      // eslint-disable-next-line
      } else if (tab._uid === 7) {
        this.$router.push('projects');
      } else {
        this.$router.push('aboutme');
      }
    },
  },
};
</script>
<style lang="scss">

@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');
.navbar {
  margin: auto;
  text-align: center;
  transform: translateY(25%);
  left: 0;
  right: 0;
  .header {
    position: relative;
    top: 10%;
    font-family: Source Sans Pro, Helvetica Neue, Arial,sans-serif;
    text-transform: uppercase;
    letter-spacing: 0.26em;
    font-weight: 550;
    font-size: 20px;
  }
  .social {
    .follow-sub {
      position: relative;
      vertical-align: 30%;
    }
    @media screen and (max-width: 500px) {
      .follow-sub {
        display: none;
      }
    }
    position: fixed;
    letter-spacing: 0.20em;
    font-weight: 300;
    font-size: 10px;
    color:rgb(182, 182, 182);
    right: 1%;
    top: 1%;
    img {
        margin: 3px;
        width: 27px;
        height: 27px;
    }
    @media screen and (max-width: 500px) {
      img {
        margin: 3px;
        width: 21px;
        height: 21px;
      }
    }
  }
}
</style>
