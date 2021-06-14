<template>
  <div class="discussion-div">
    <q-card flat bordered class="discussion-card">
      <div class="discussion-area" style="padding-left: 10px; height: 40px;">
        Discussões
      </div>

      <q-separator />

      <q-card-section style="height: 390px">

      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  name: 'DiscussionSection'
}
</script>

<style lang="scss" scoped>
.discussion-div {
  margin: 20px 45px;
}

.discussion-area {
  background: $primary;
  color: $text-primary;
  font-size: 15pt;
  font-weight: 500;
  padding: 5px;
}
</style>
