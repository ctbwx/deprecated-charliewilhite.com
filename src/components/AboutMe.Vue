<template lang="pug">
  div(class='aboutme')
    el-card(class='card') Hey there I'm a software engineer.
</template>

<script>
export default {

};
</script>

<style lang="scss">
  .aboutme {
    display:-webkit-box;
    -webkit-box-align:center;
    -webkit-box-pack:center;
  }
  .card {
    width: 75%;
    height: 75%;
    transform: translateY(25%);
    text-align: center;
    font-family: Source Sans Pro, Helvetica Neue, Arial,sans-serif;
    // text-transform: uppercase;
    font-weight: 300;
    font-size: 16px;
  }
</style>


