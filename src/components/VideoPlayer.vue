<template>
  <div>
    <q-img
      style="border-radius: 3px"
      class="video-player"
      :ratio="16/9"
      :src="require('src/assets/images/dewey1.png')"
    >
      <span class="video-text1">
        Análise sensorial de preparações funcionais desenvolvidas para escolares entre 09 e 15 anos, do município de Campinas/SP
      </span>
      <span>
        <q-img
          class="video-picture"
          :src="require('src/assets/images/video-picture.png')"
          width="75px"
        />
        <span class="video-text2">
          Beatriz Christiane Melo<br>
        </span>
        <span class="video-text3">
          FCA / Universidade Estadual de Campinas
        </span>
      </span>

      <div class="img-overlay"/>
    </q-img>
  </div>
</template>
<script>
export default {
  name: 'VideoPlayer'
}
</script>

<style lang="scss" scoped>
.video-player {
  margin-top: 20px;
}

.img-overlay {
  width: 100%;
  background: #8d350675;
  aspect-ratio: 1/1;
  background-blend-mode: multiply;
}

.video-text1, .video-text2, .video-text3 {
  position: absolute;
  font-family: Roboto;
  font-style: normal;
  font-weight: 900;
  color: #FFFFFF;
  z-index: 1;
}

.video-text1 {
  font-size: 22px;
  line-height: 25px;
  letter-spacing: 0.05em;
  height: 34px;
  left: 24px;
  right: 291px;
  top: 30px;
  width: 700px;
}

.video-text2 {
  font-size: 24pt;
  bottom: 90px;
  left: 115px;
}

.video-text3 {
  font-size: 15pt;
  bottom: 65px;
  left: 115px;
}


.video-picture {
  z-index: 1;
  position: absolute;
  border-radius: 50%;
  bottom: 60px;
  left: 20px;
  border-style: solid;
  border-width: 1px;
  border-spacing: 10px;
  border-collapse: collapse;
  border-color: rgb(255, 89, 0);
}
</style>
