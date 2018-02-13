<template lang='pug'>
  div(class='not-found-wrapper')
    div(class='not-found')
      p Turn back now, lest you be swallowed by the abyss.
      p(class='not-detail') Page does not exist.
    span(class='not-img-wrapper')
      img(src='https://orig00.deviantart.net/655f/f/2014/308/3/1/artorias_complete_cape_by_valty77-d859ddj.gif')
</template>

<script>
export default {

};
</script>

<style lang='scss'>
.not-found-wrapper {
  display: flex;
  flex-direction: column;
  margin-top: 1%;
  align-items: center;
}
.not-found {
  // Text
  font-family: Source Sans Pro, Helvetica Neue, Arial,sans-serif;
  text-align: center;
  letter-spacing: 0.12em;
  font-size: 22px;
}

.not-img-wrapper {
  padding-top: 3%;
  height: 200px;
  width: 200px;
}

.not-detail {
  text-transform: uppercase;
  font-family: Source Sans Pro, Helvetica Neue, Arial,sans-serif;
  letter-spacing: 0.18em;
  font-size: 16px;
  font-weight: 300;
  color: rgb(182, 182, 182);
}
</style>
