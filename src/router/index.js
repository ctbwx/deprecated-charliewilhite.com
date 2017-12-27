import Vue from 'vue';
import Router from 'vue-router';
import About from '@/components/AboutMe';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/aboutme',
      name: 'About Me',
      component: About,
    },
  ],
});
