<template lang="pug">
  div(class='aboutme')
    <el-card :body-style="{ padding: '0px' }">
      <img src="../assets/charlie4.jpg" class="image">
    </el-card>

</template>

<script>
export default {

};
</script>

<style lang="scss">
  .aboutme {
    display: flex;
    text-align: center;
    border-style: solid;
    border-color: orange;
   .image {
    width: 100%;
    display: block;
    }
  }
</style>


