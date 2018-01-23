<template lang="pug">
  div(class='blog-detail')
    div(class='body')
    h1(v-on:click="click") {{ blog.title }}
      <blogBody/>
    span(class='createdAt') {{ blog.createdAt | moment }}
</template>

<script>
// import data from '@/assets/data';
import axios from 'axios';
import moment from 'moment';
import Body from './body';

export default {
  data() {
    return {
      blog: [],
      errors: [],
    };
  },
  async created() {
    try {
      const response = await axios.get(`/api/blog/${this.$route.params.id}`);
      this.blog = response.data[0];
    } catch (e) {
      this.errors.push(e);
    }
  },
  filters: {
    moment(date) {
      return moment(date).format('MMM Do YY');
    },
  },
  methods: {
    click() {
      axios.post('/api/blog', {
        title: 'How to send JSON over http.',
        teaser: 'Please freaking work omg pleas',
        body: JSON.stringify([{ p: 'this is a paragraph, hopefully if this http request works.' }, { img: 'https://s7d1.scene7.com/is/image/PETCO/cat-category-090617-369w-269h-hero-cutout-d?fmt=png-alpha' }, { p: 'ajs;dlkfjas;lkdfja;klsdjfl;kasdjf;oij iofjio eqwf;jklasdj f;oiasdj f;oalisd' }]),
        thumbnail: '',
      });
    },
  },
  components: {
    blogBody: Body,
  },
};
</script>

<style lang="scss">
@import url(https://fonts.googleapis.com/css?family=Roboto+Mono);

  ::-webkit-scrollbar { 
    width: 5px;
    height: 5px;
  }
  ::-webkit-scrollbar-thumb { 
    -webkit-border-radius: 20px;
    border-radius: 15px;
    background: rgba(0, 0, 0, 0.8); 
  }
  .blog-detail {
    font-family: Roboto Mono;
    width: 80%;
    margin: auto;
    padding-top: 5%;
    left: 0;
    right: 0;
    flex-direction: column;
  }
  .body {
    padding-left: 3%;
  }
  .createdAt {
    color: rgb(182, 182, 182);
  }
</style>
