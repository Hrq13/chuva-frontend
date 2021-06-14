<template>
  <div class="resumo-div">
    <q-card flat bordered class="resumo-card">
      <div class="resumo-area" style="padding-left: 10px; height: 40px;">
        {{ title }}
      </div>

      <q-separator />

      <q-scroll-area :style="showBtn ? 'height: 200px;' : 'height: 390px'">
        <div>
          <div class="q-pa-md resumo-inner-text">
            <span v-if="showBtn">
              {{ displayText }}
              <span class="readMoreBtn" @click="showFullText()">ver mais</span>
            </span>
            <span v-else v-html="displayText" />
          </div>
        </div>
      </q-scroll-area>
    </q-card>
  </div>
</template>

<script>
export default {
  name: 'TextSection',
  props: {
    title: {
      type: String,
      required: true
    },
    showReadMoreBtn: {
      type: Boolean,
      default: true
    },
    fullText: {
      type: String,
      required: true
    },
    summarizedText: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      showBtn: this.showReadMoreBtn,
      displayText: this.summarizedText
    }
  },
  methods: {
    showFullText () {
      this.displayText = this.fullText
      this.showBtn = false
    }
  },
}
</script>

<style lang="scss" scoped>
.resumo-div {
  margin: 20px 45px;
}

.resumo-cards {
  background: $primary;
  font-size: 15pt;
  color: $text-primary;
  padding: 7px 10px 10px 10px;
  font-weight: 500;
}

.resumo-area {
  background: $primary;
  font-size: 15pt;
  color: $text-primary;
  padding: 5px;
  font-weight: 500;
}

.resumo-inner-text {
  font-family: 'Quicksand', sans-serif;
  color: $text-primary;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  padding: 10px;
}

.readMoreBtn {
  color: $orange-bg;
  font-weight: 600;
  cursor: pointer;
}
</style>
