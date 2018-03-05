<template lang="pug">
  div(class='about-container')
    div(class='aboutme')
      div(class='pic')
        <el-carousel trigger="click" height="600px">
          <el-carousel-item v-for="item in images" :key="item">
            img(:src='item')
          </el-carousel-item>
        </el-carousel>
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
                      | Currently I'm working with a lot in Unity, building games to get a better understanding of how game development works, and also to
                      | become more proficient with C-Sharp. I'm also looking for opportunities to learn more about machine learning, and recursive neural networks.
                      | I have a curiosity for data science, as I believe a further understanding of it will lead us to our next monumental technological breakthrough.
                      | Also being able to <em>create a brain</em> seems pretty damn cool.
                      br
                      br
                      span(class='detail') Personal
                      br
                      br
                      | I am a huge gamer, I think I could be classified as semi-professional in Dota2. I played in house JoinDota league, and
                      | had over 5000 thousand hours on the game. When I really care about something I'll pour my whole self into it. Aside from gaming I
                      | love the great outdoors, growing up in Montana I formed a connection with the mountains, snow, and fly fishing. I'm an avid rock climber,
                      | novice fisherman, and mountain biker.
</template>

<script>
export default {
  data() {
    return {
      images: [
        'https://i.imgur.com/bKUTaki.jpg',
        'https://i.imgur.com/a7D217N.jpg',
        'https://i.imgur.com/LXAYDb7.jpg',
        'https://i.imgur.com/MSO4KMM.jpg',
      ],
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
  .pic {
    flex: 1;
    margin-top: 3%;
    margin-bottom: 3%;
    -moz-box-shadow: 1px 2px 3px rgba(0,0,0,.5);
    -webkit-box-shadow: 1px 2px 3px rgba(0,0,0,.5);
    box-shadow: 1px 2px 3px rgba(0,0,0,.5);
  }
  img {
    width: 100%;
    height: 100%;
  }
  .buffer {
    flex: 2;
    max-width: 100px;
    max-height: 100px;
  }
  @media screen and (max-width: 500px) {
    .el-carousel {
      height: 150px;
    }
  }
  .info {
    flex: 3;
  }
</style>
