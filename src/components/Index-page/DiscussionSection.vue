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

}
</script>

<style lang="scss" scoped>

</style>
