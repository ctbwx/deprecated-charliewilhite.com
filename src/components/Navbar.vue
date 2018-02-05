<template lang="pug">
div
  div(class='navbar')
    span(class='header' v-on:click='header') Charlie Wilhite
    <el-tabs@tab-click='handleClick' class='tabs'>
      <el-tab-pane class='tab-detail' label="Blog" name="first"></el-tab-pane>
      <el-tab-pane class='tab-detail' label="Projects" name="second"></el-tab-pane>
      <el-tab-pane class='tab-detail' label="About Me" name="third"></el-tab-pane>
      <el-tab-pane class='tab-detail' label="Contact" name="fourth"></el-tab-pane>
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
    };
  },
  methods: {
    handleClick(tab) {
      if (tab.label === 'Blog') {
        this.$router.replace('/blog');
      } else if (tab.label === 'Projects') {
        this.$router.replace('/projects');
      } else if (tab.label === 'About Me') {
        this.$router.replace('/aboutme');
      } else {
        this.$router.replace('/contact');
      }
    },
    header() {
      this.$router.push('/');
    },
  },
};
</script>
<style lang="scss">

@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');
.navbar {
  font-family: Source Sans Pro, Helvetica Neue, Arial,sans-serif;
  margin: auto;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.20em;
  transform: translateY(25%);
  left: 0;
  right: 0;
  -webkit-backface-visibility: hidden;
  -webkit-transform: translateZ(0) scale(1.0, 1.0);
  transform: translateZ(0);
  .header {
    position: relative;
    top: 13px;
    transform: translateY(50%);
    font-size: 22px;
    font-weight: 590;
    cursor: pointer;
    color: #000;
    text-decoration: none;
  }
  .tabs {
    pointer-events: none;
  }
  #tab-first {
    pointer-events: auto;
  }
  #tab-second {
    pointer-events: auto;
  }
  #tab-third {
    pointer-events: auto;
  }
  #tab-fourth {
    pointer-events: auto;
  }
  @media screen and (max-width: 500px) {
    top: 9px;
    .header {
      top: 0px;
    }
  }
  .header:hover {
    color: #000;
  }
  .header:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #000;
    visibility: hidden;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transition: all 0.3s ease-in-out 0s;
    transition: all 0.3s ease-in-out 0s;
  }
  .header:hover:before {
    visibility: visible;
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
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
    right: 0;
    top: 30%;
    img {
        margin: 3px;
        width: 27px;
        height: 27px;
    }
    @media screen and (max-width: 500px) {
      img {
        transform: translateY(-150%);
        width: 21px;
        height: 21px;
      }
    }
  }
}
</style>
