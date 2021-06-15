<template>
  <q-card-section class="topic-section">
    <div v-for="(comment, index) in comments" :key="comment.author + index">
      <q-card class="q-mt-lg q-pa-md">
        <div>
          <div>
            <span class="topic-subject">{{ comment.subject }}</span>
          </div>
          <div>
            <span class="author-name">{{ comment.author }}</span>
          </div>
          <div class="text-left q-mt-sm">
            <span class="comment-text">{{ comment.text }}</span>
          </div>
          <div class="row comment-btns">
            <q-btn class="more-btn" dense flat :ripple="false" icon="more_vert" />
            <q-btn class="favorite-btn" size="sm" flat dense :ripple="false" icon="favorite" />
            <div class="comment-stats">
              <span>{{ comment.likes === 1 ? `${comment.likes} like` : `${comment.likes} likes` }}</span>
              <span class="q-ml-md">{{ comment.replies.length === 1 ? `${comment.replies.length} resposta` : `${comment.replies.length} respostas` }}</span>
            </div>
          </div>
        </div>
      </q-card>
    </div>
  </q-card-section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'DiscussionReply',
  computed: {
    ...mapGetters('globalState', ['comments'])
  }
}
</script>

<style lang="scss" scoped>
.topic-subject {
  color: $orange-bg;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  margin-top: 15px;
}

.topic-section {
  margin-top: -60px;
}

.author-name {
  font-family: 'Quicksand', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 15px;
  color: #5C5C5C;
}

.comment-text {
  font-family: 'Quicksand', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;

  color: #4D4D4D;
}

.more-btn {
  margin: 12px 13px 0 -5px;
  color: #ED7839;
  font-size: 15pt;
  width: 15px;
  height: 25px;
}

.favorite-btn {
  background: #ED7839;
  color: white;
  margin-top: 22px;
  width: 35px;
  height: 25px;
}

.comment-stats {
  font-family: 'Segoe UI', sans-serif;
  font-style: normal;
  font-weight: 350;
  font-size: 14px;
  line-height: 19px;
  color: #757575;
  margin-top: 25px;
  margin-left: 20px;
}
</style>
