<template lang="pug">
  div(class='detail')
    div(class='container' v-for='item in body')
      p(class='para' v-if='item.p') {{ item.p }}
      img(class='img' v-if='item.img' :src='item.img')
</template>

<script>
import axios from 'axios';
import moment from 'moment';
import data from '@/assets/data';

export default {
  data() {
    return {
      body: data.blog[0].body,
      errors: [],
    };
  },
  async created() {
    try {
      const response = await axios.get(`/api/blog/${this.$route.params.id}`);
      this.body = response.data[0].body;
    } catch (e) {
      this.errors.push(e);
    }
  },
  filters: {
    moment(date) {
      return moment(date).format('MMM Do YY');
    },
  },
};
</script>

<style lang="scss">
  .detail {
    display: flex;
    flex-direction: column;
    font-style: normal;
    font-variant-ligatures: normal;
    font-variant-caps: normal;
    font-variant-numeric: normal;
    font-variant-east-asian: normal;
    font-weight: normal;
    font-stretch: normal;
    font-size: 22px;
    line-height: 1.75em;
    font-family: Merriweather, Georgia, serif;
  }
  .img {
    width: 100%;
    height: 100%;
  }
</style>
