<template lang="pug">
  div(class='container')
    div(class='aboutme')
      img(class='pic' src='../assets/charlie4.jpg')
      div(class='buffer')
      p(class='info') Hello, my name is Charlie.
                      br
                      br
                      | I'm a full stack software engineer from Austin, TX.
                      | In high school I took advanced placement computer science courses (in Java), at the time I didn't really know what computer science was. It just sounded fun.
                      | I quickly learned that programming was <em>magical</em> and I became obsessed with it.
                      | Since then I've graduated from <a href='https://www.hackreactor.com/' target='_blank'>Hack Reactor</a> in November 2017, 
                      | then was hired on as a Hacker in Residence: Project Lead, where I mentored students, contstructed optional technical sprints, and
                      | honed my skills as a software engineer.
                      br
                      br
                      | Currently I'm looking for opportunities to learn more about machine learning, and recursive neural networks. I have a curiosity for data science, as
                      | I believe a further understanding of it will lead us to our next monumental technological breakthrough. Also being able to <em>create a brain</em>
                      | seems pretty damn cool.
                      br
                      br
                      | When I'm not coding or reading about code, I'm probably gaming or bouldering (rock climbing, but on big rock instead of mountains).
                      | My favorite games of all time are Dota 2, Dark Souls, and Kingdom Hearts.
</template>

<script>
export default {

};
</script>

<style lang="scss">
  .container {
    display:-webkit-box;
    -webkit-box-align:center;
    -webkit-box-pack:center;
  }
  .aboutme {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    width: 75%;
    height: 75%;
    transform: translateY(25%);
    font-family: Source Sans Pro, Helvetica Neue, Arial,sans-serif;
    font-weight: 300;
    font-size: 16px;
  }
  @media screen and (max-width: 500px) {
    .aboutme {
      transform: translateY(5%);
    }
  }
  .pic {
    flex: 1;
    max-width: 600px;
    max-height: 400px;
    -moz-box-shadow: 1px 2px 3px rgba(0,0,0,.5);
    -webkit-box-shadow: 1px 2px 3px rgba(0,0,0,.5);
    box-shadow: 1px 2px 3px rgba(0,0,0,.5);
  }
  .buffer {
    flex: 2;
    max-width: 100px;
    max-height: 100px;
  }
  @media screen and (max-width: 500px) {
    .buffer {
      display: none;
    }
  }
  .info {
    flex: 3;
  }
</style>


