<template>
  <div class="app">
    <navbar/>
    <router-view/>
    <div class='wrapper'>
      <foot/>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar';
import Footer from '@/components/footer';

export default {
  name: 'app',
  components: {
    navbar: Navbar,
    foot: Footer,
  },
};
</script>

<style lang='scss'>
  .app {
    position: absolute;
    height: 100%;
    width: 100%;
  }

  .foot-detail {
    font-family: Source Sans Pro, Helvetica Neue, Arial,sans-serif;
    letter-spacing: 0.20em;
    font-weight: 300;
    font-size: 14px;
    color:rgb(182, 182, 182);

    position: absolute;
    bottom: 0;
    margin: 0;
    padding: 1%;
    left: 0;
    right: 0;
    text-align: center;
  }

  .social {
    position: absolute;
    bottom: 0;
    margin: 0;
    padding: 1%;
    right: 0;
    text-align: center;
  }

  @media screen and (max-width: 500px) {
    .social {
      left: 0;
      bottom: 5%;
    }
    .follow-sub {
      display: none;
    }
  }

  .wrapper {
    height: 80%;
    position: relative;
  }

  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }
  ::-webkit-scrollbar-thumb {
    -webkit-border-radius: 20px;
    border-radius: 15px;
    background: rgba(0, 0, 0, 0.8);
  }
</style>
