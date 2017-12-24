<template lang="pug">
  div
    div(class='parallax')
</template>

<script>
export default {
};
</script>

<style lang="scss">
.parallax {
    /* The image used */
    background-image: url('../assets/drmanhattan.jpg');

    /* Set a specific height */
    height: 400px;
    margin: 2%;

    /* Create the parallax scrolling effect */
    background-attachment: fixed;
    background-position: top;
    background-repeat: no-repeat;
}
</style>
