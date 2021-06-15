<template>
  <div class="discussion-div">
    <q-card flat bordered class="discussion-card">
      <div class="discussion-area" style="padding-left: 10px; height: 40px;">
        Discussões
      </div>
      <q-card-section class="text-center">
        <div class="share-ideas-text">
          <span>Compartilhe suas ideias ou dúvidas com os autores!</span>
        </div>
        <div class="text-center q-mt-lg">
          <q-img :src="require('src/assets/icons/icone1.svg')" width="50px"/>
          <q-img class="q-mx-xl" :src="require('src/assets/icons/icone2.svg')" width="50px"/>
          <q-img :src="require('src/assets/icons/icone3.svg')" width="50px"/>
        </div>
        <div class="share-ideas-subtext">
          <span>
            Sabia que o maior estímulo no desenvolvimento científico e cultural é a curiosidade? Deixe seus questionamentos ou sugestões para o autor!
          </span>
        </div>
      </q-card-section>
      <q-card-section>
        <div class="text-center new-topic-btn-div">
          <q-btn class="new-topic-btn" dense no-caps icon="add" label="criar tópico"/>
          <q-separator />
        </div>
      </q-card-section>
      <discussion-reply />
    </q-card>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import DiscussionReply from './DiscussionReply.vue'

export default {
  name: 'DiscussionSection',
  components: {
    DiscussionReply
  },
  methods: {
    ...mapMutations('globalState', ['addComments'])
  }
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

.share-ideas-text {
  color: $orange-bg;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  margin-top: 15px;
}

.share-ideas-subtext, .new-topic-btn {
  margin: 35px 200px;
  font-family: 'Quicksand', sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: $text-primary;
  font-style: normal;
}

.new-topic-btn-div {
  margin-top: -90px;
}

.new-topic-btn {
  font-weight: bold !important;
  margin-bottom: -17px;
  color: white;
  background: linear-gradient(180deg, #FEB254 0%, #F0813D 100%);
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
  border-radius: 4px;
}
</style>