<template>
  <div>
    <q-img
      style="border-radius: 3px"
      class="video-player"
      :ratio="16/9"
      :src="require('src/assets/images/dewey1.png')"
    >
      <span :class="isMobile ? 'mobile-video-text1' : 'video-text1'" :style="isMobile ? 'font-size: 9pt' : ''">
        Análise sensorial de preparações funcionais desenvolvidas para escolares entre 09 e 15 anos, do município de Campinas/SP
      </span>
      <span>
        <q-img
          :class="isMobile ? 'mobile-video-picture' : 'video-picture'"
          :src="require('src/assets/images/video-picture.png')"
          width="11%"
        />
        <span :class="isMobile ? 'mobile-video-text2' : 'video-text2'">
          Beatriz Christiane Melo<br>
        </span>
        <span :class="isMobile ? 'mobile-video-text3' : 'video-text3'">
          FCA / Universidade Estadual de Campinas
        </span>
      </span>

      <div class="img-overlay"/>
    </q-img>
  </div>
</template>
<script>
export default {
  name: 'VideoPlayer',
  computed: {
    isMobile () {
      return this.$q.platform.is.mobile
    }
  }
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

.video-text1, .video-text2, .video-text3, .mobile-video-text1, .mobile-video-text2, .mobile-video-text3 {
  position: absolute;
  font-family: Roboto;
  font-style: normal;
  font-weight: 900;
  color: #FFFFFF;
  z-index: 1;
}

.video-text1 {
  font-size: 145%;
  letter-spacing: 0.05em;
  height: 5%;
  left: 24px;
  right: 291px;
  top: 6%;
  width: 90%;
}

.mobile-video-text1 {
  letter-spacing: 0.05em;
  height: 5%;
  left: 24px;
  right: 291px;
  top: 7%;
  width: 90%;
}

.video-text2 {
  font-size: 24pt;
  bottom: 90px;
  left: 115px;
}

.mobile-video-text2 {
  font-size: 10pt;
  bottom: 38px;
  left: 60px;
}

.mobile-video-text3 {
  font-size: 9pt;
  bottom: 22px;
  left: 60px;
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

.mobile-video-picture {
  z-index: 1;
  position: absolute;
  border-radius: 50%;
  bottom: 24px;
  left: 10px;
  border-style: solid;
  border-width: 1px;
  border-spacing: 10px;
  border-collapse: collapse;
  border-color: rgb(255, 89, 0);
}
</style>
