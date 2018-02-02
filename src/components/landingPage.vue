<template lang="pug">
  div(class='landing-wrapper')
    div(class='main-content')
      p(class='one') Welcome to my website.
      p(class='two') This is my hub for projects, and also my blog where I write about tech, gaming, and anything else.
      p(class='three') Feel free to look around, or <b>contact</b> me about projects or professional opportunities.
    div(class='bonfire')
      img(class='bonfire' src='https://s-media-cache-ak0.pinimg.com/originals/80/21/74/8021744fc275101ed9a4b75ace41f168.gif')
</template>

<script>
  export default {

  };
</script>

<style lang='scss'>
  .landing-wrapper {
    display: flex;
    flex-direction: column;
    opacity:0;
    opacity: 1 \9; /*just in case ie*/
    -webkit-animation:fadeIn ease-in 1;
    -moz-animation:fadeIn ease-in 1;
    animation:fadeIn ease-in 1;

    -webkit-animation-fill-mode:forwards;
    -moz-animation-fill-mode:forwards;
    animation-fill-mode:forwards;

    -webkit-animation-duration:1s;
    -moz-animation-duration:1s;
    animation-duration:1s;
  }

  .main-content {
    // Text
    font-family: Source Sans Pro, Helvetica Neue, Arial,sans-serif;
    text-align: center;
    letter-spacing: 0.12em;
    font-size: 22px;
  }

  .bonfire {
    text-align: center;
    padding-top: 3%;
  }

  @-webkit-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
  @-moz-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
  @keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
</style>
