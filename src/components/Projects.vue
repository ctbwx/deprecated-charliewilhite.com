<template lang="pug">
  div(class='project-wrapper')
    div(class='project-list')
      div(class='project-card' v-for="item in projects" :key="item.id")
        a(:href='item.link' target='_blank'): img(:src='item.image' class='project-img')
        div(class='project-info') {{ item.title }}
</template>

<script>
import data from '@/assets/data';

export default {
  data() {
    return {
      projects: data.projects,
    };
  },
};
</script>

<style lang="scss">
  .project-list {
    display: flex;
    flex-direction: row;
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
  .project-card {
    display: flex;
    flex-direction: column;
    margin-top: 3%;
    margin-bottom: 5%;
    cursor: pointer;
    width: 300px;
    height: 300px;
    border-radius: 5px;
    background-color: rgb(255, 255, 255);
    box-shadow: 0 1px 2px rgba(0,0,0,0.15), 0 1px 8px rgba(0,0,0,0.1);
    transition: all 0.3s ease-in-out;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    -webkit-transform: translateZ(0) scale(1.0, 1.0);
    -webkit-font-smoothing: antialiased !important;
    transform: translateZ(0);
  }
  .project-card::after {
    content: "";
    border-radius: 5px;
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    opacity: 0;
    -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
    transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  }
  .project-card:hover {
    -webkit-transform: scale(1.25, 1.25);
    transform: scale(1.01, 1.01);
  }

  .project-card:hover::after {
    opacity: 1;
  }
  .project-info {
    text-align: center;
    margin-top: 3%;
    margin-bottom: 3%;
    text-transform: uppercase;
    font-family: Source Sans Pro, Helvetica Neue, Arial,sans-serif;
    letter-spacing: 0.18em;
    font-size: 16px;
    font-weight: 300;
    color: rgb(182, 182, 182);
  }
  .project-img {
    width: 100%;
    height: 100%;
  }
</style>
