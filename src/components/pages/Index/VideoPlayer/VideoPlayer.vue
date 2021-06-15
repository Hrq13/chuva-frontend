<template>
  <div>
    <q-media-player
     type="video"
     class="video-element"
     rounded
     radius="4px"
     :bottom-controls="false"
     :sources="video.sources"
     :poster="require('src/assets/images/dewey1.png')"
     big-play-button-color="blue-6"
     color="white"
     dense
    />
  </div>
</template>
<script>
export default {
  name: 'VideoPlayer',
  data () {
    return {
      overlay: true,
      video: {
        label: 'Elephants Dream',
        sources: [
          {
            src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4#t=90',
            type: 'video/mp4'
          }
        ]
      }
    }
  },
  computed: {
    isMobile () {
      return this.$q.platform.is.mobile
    }
  }
}
</script>

<style lang="scss" scoped>
.video-element {
  border-radius: 3px;
}
</style>
