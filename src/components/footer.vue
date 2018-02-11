<template lang='pug'>
  div(class='foot-wrapper')
    span(class='foot-detail') © 2017 Charlie Wilhite. All rights reserved.
    div(class='social')
      span(class='follow-sub') Follow me...
      a(href='https://github.com/simplenclean' target='_blank'): img(src='../assets/github.png')
      a(href='https://www.instagram.com/simplenclean_/' target='_blank'): img(src='../assets/instagram.png')
      a(href='https://www.linkedin.com/in/charliewilhite/' target='_blank'): img(src='../assets/linkedin.png')
</template>


<script>
export default {
};
</script>

<style lang="scss">
.social {
  font-family: Source Sans Pro, Helvetica Neue, Arial,sans-serif;
  letter-spacing: 0.20em;
  font-weight: 300;
  font-size: 10px;
  color:rgb(182, 182, 182);
  img {
      margin: 3px;
      width: 27px;
      height: 27px;
  }
}
</style>
