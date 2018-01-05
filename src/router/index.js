/* eslint-disable */
import Vue from 'vue';
import Router from 'vue-router';
import AboutMe from '../components/aboutme';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/aboutme',
      name: 'About Me',
      component: AboutMe,
    },
  ],
});
