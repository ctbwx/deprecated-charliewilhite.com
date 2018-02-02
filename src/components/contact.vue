<template lang='pug'>
  div(class='contact-wrapper')
    div(class='img-wrap')
      img(class='email' src='https://i.imgur.com/y6ZTorW.png')
    span(class='contact-detail' v-model='email') {{ email }}
      el-button(plain class='copy-button' v-clipboard:copy="email") Copy
    div(class='img-wrap')
      img(class='phone' src='https://i.imgur.com/ELSuoSC.png')
    span(class='contact-detail' v-model='number') {{ number }}
      el-button(plain class='copy-button' v-clipboard:copy="number") Copy
</template>

<script>
export default {
  data() {
    return {
      activeNames: ['1'],
      number: '512-431-5752',
      email: 'ctbwilhite@gmail.com',
    };
  },
  methods: {
    handleChange() {
    },
  },
};
</script>

<style lang='scss'>
  .contact-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-evenly;

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
  .alert {
    position: absolute;
    top: 10%;
    right: 0;
    font-family: Source Sans Pro, Helvetica Neue, Arial,sans-serif;
    text-align: center;
    letter-spacing: 0.12em;
    font-size: 14px;

    height: 50px;
    width: 100px;
  }
  .copy-button {
    margin: 2%;
  }
  .img-wrap {
    height: 200px;
    width: 200px;
    margin-top: 5%;
  }
  .email {
    width: 100%;
    border-radius: 7px;
    border-style: solid;
    border-width: 2px;
    border-color: rgb(227, 227, 227);
  }
  .phone {
    width: 100%;
    border-radius: 7px;
    border-style: solid;
    border-width: 2px;
    border-color: rgb(227, 227, 227);
  }
  .contact-detail {
    font-family: Source Sans Pro, Helvetica Neue, Arial,sans-serif;
    text-align: center;
    letter-spacing: 0.12em;
    font-size: 22px;
    padding-top: 3%;
  }
</style>
