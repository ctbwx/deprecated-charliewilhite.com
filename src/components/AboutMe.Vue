<template lang="pug">
  div(class='about-container')
    div(class='aboutme')
      div(class='pic-container')
        img(class='pic' :src='image')
      p(class='info') Hello, my name is Charlie.
                      br
                      br
                      span(class='detail') Background
                      br
                      br
                      | I became fascinated with computer science and programming because I have always been enamoured with the idea that it’s possible to create something from nothing. With 0's and 1's I can weave together something expressive of me that is practical to the world. That’s powerful. I started programming about 5 years ago in Java, building rudimentary desktop graphics and algorithms, which then led me to teach myself python and
                      | web development. Following my passion, I enrolled at an immersive software engineering course and further developed my programming knowledge, honing and defining these assets into a powerful skillset. I now possess the ability to build scalable full stack applications that are user friendly and efficient.
                      br
                      br
                      span(class='detail') Current
                      br
                      br
                      | Professionally I am currently a senior software engineer at Company.com. I help build services for small and medium sized businesses that help solve administrative
                      | problems. Personally I am working with game devlopment software to get a better understanding of how modern video games are built, and to hopefully create a fun indie
                      | game. My ultimate goal is to find a way to optimize procedural generation in video games with a machine learning algorithm.
                      br
                      br
                      span(class='detail') Personal
                      br
                      br
                      | I am a huge gamer, I was a semi-professional Dota2 player in high school. I played in house JoinDota league, and
                      | had over 5000 thousand hours on the game. When I really care about something I'll pour my whole self into it. Aside from gaming I
                      | love the great outdoors, growing up in Montana I formed a connection with the mountains, snow, and fly fishing. I'm an avid rock climber,
                      | novice fisherman, and mountain biker.
</template>

<script>
export default {
  data() {
    return {
      image: 'https://i.imgur.com/MSO4KMM.jpg',
    };
  },
};
</script>

<style lang="scss">
  .about-container {
    margin-top: 1%;
    display:-webkit-box;
    -webkit-box-align:center;
    -webkit-box-pack:center;
  }
  .aboutme {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    width: 75%;
    height: 75%;
    font-style: normal;
    font-variant-ligatures: normal;
    font-variant-caps: normal;
    font-variant-numeric: normal;
    font-variant-east-asian: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 1.9em;
    font-family: Source Sans Pro, Helvetica Neue, Arial,sans-serif;

    opacity:0;
    opacity: 1 \9; /*just in case ie*/
    -webkit-animation:fadeIn ease-in 1;
    -moz-animation:fadeIn ease-in 1;
    animation:fadeIn ease-in 1;

    -webkit-animation-fill-mode:forwards;
    -moz-animation-fill-mode:forwards;
    animation-fill-mode:forwards;

    -webkit-animation-duration:.3s;
    -moz-animation-duration:.3s;
    animation-duration:.3s;
  }
  .detail {
    text-transform: uppercase;
    font-family: Source Sans Pro, Helvetica Neue, Arial,sans-serif;
    letter-spacing: 0.18em;
    font-size: 16px;
    font-weight: 300;
    color: rgb(182, 182, 182);
  }
  .pic-container {
    flex: 1;
    margin-top: 3%;
    margin-bottom: 3%;
    text-align: center;
  }
  .pic {
    width: 600px;
  }
  .buffer {
    flex: 2;
    max-width: 100px;
    max-height: 100px;
  }
  @media screen and (max-width: 500px) {
    .el-carousel {
      height: 300px;
      overflow: hidden;
    }
    .pic {
      width: 100%;
    }
  }
  .info {
    flex: 3;
  }
</style>
