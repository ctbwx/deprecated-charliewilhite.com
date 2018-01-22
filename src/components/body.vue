<template lang="pug">
  div(class='detail')
    div(class='container' v-for='item in body')
      ul(v-if='item.p')
        p {{ item.p }}
      ul(v-if='item.img')
        img(:src='item.img')
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
}
</style>
