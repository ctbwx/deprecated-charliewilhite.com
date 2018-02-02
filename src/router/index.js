/* eslint-disable */
import Vue from 'vue';
import Router from 'vue-router';
import AboutMe from '../components/aboutme';
import Projects from '../components/projects';
import Blog from '../components/blog';
import BlogDetail from '../components/blogdetail';
import Landing from '../components/landingPage';
import Contact from '../components/contact';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/aboutme',
      name: 'About Me',
      component: AboutMe,
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog
    },
    {
      path: '/blog/:id',
      name: 'Blog Detail',
      component: BlogDetail
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/',
      name: 'Landing',
      component: Landing
    },
  ],
});
