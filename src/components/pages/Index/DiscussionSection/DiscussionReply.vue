<template>
  <q-card-section class="topic-section">
    <div>
      <q-card class="q-mt-lg q-pa-md">
        <span v-if="blur" class="blur-box text-center">
          <div class="text-over-blur">
            <div>
              <q-img :src="require('src/assets/icons/grey-check.svg')" width="30px" />
            </div>
            <div class="q-mt-sm">
              <span class="feedback-text">
                Aguardando feedback dos autores
              </span>
            </div>
            <div class="q-mt-md">
              <span class="edit-topic" @click="editComment">
                Editar tópico
              </span>
            </div>
          </div>
        </span>
        <div>
          <div>
            <span class="topic-subject">{{ comment.subject }}</span>
          </div>
          <div>
            <span class="author-name">{{ comment.author }}</span>
          </div>
          <div class="text-left q-mt-sm">
            <span class="comment-text" v-html="comment.text" />
          </div>
          <div class="row comment-btns">
            <q-btn class="more-btn" dense flat :ripple="false" icon="more_vert">
              <q-menu>
                <q-btn dense flat no-caps color="red" @click="removeComment(comment)" label="Deletar" />
                <q-btn dense flat no-caps color="blue-7" @click="editComment()" label="Editar" />
              </q-menu>
            </q-btn>
            <q-btn class="favorite-btn" size="sm" flat dense :ripple="false" icon="favorite" />
            <div class="comment-stats" style="z-index: 1;">
              <span>{{ comment.likes === 1 ? `${comment.likes} like` : `${comment.likes} likes` }}</span>
              <span
                class="q-ml-md"
                @click="showReplies"
                :style="comment.replies.length > 0 ? 'cursor: pointer;' : ''"
              >
                {{ comment.replies.length === 1 ? `${comment.replies.length} resposta` : `${comment.replies.length} respostas` }}
              </span>
            </div>
          </div>
        </div>
      </q-card>
      <div v-if="displayReply && comment.replies.length > 0">
        <div v-for="(reply, index) in comment.replies" :key="index">
          <q-card square class="q-pa-md" :style="reply.privilege ? 'background: #F8F8F8;' : ''">
            <div class="row">
              <span class="reply-author">{{ reply.author }}</span>
              <div v-if="reply.privilege" class="row">
                <span class="privilege-text">{{ reply.privilege }}</span>
                <q-img class="checked-icon" :src="require('src/assets/icons/checked.svg')"/>
              </div>
            </div>
            <div class="q-mt-sm reply-text">
              <span v-html="reply.text" />
            </div>
          </q-card>
        </div>
      </div>
    </div>
  </q-card-section>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'DiscussionReply',
  props: {
    comment: {
      type: Object,
      required: true
    },
    blur: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {
      displayReply: false
    }
  },
  methods: {
    ...mapMutations('globalState', ['removeComment', 'editingComment']),
    showReplies () {
      this.displayReply = !this.displayReply
    },
    editComment () {
      this.editingComment(this.comment)
    }
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

.author-name, .reply-author {
  font-family: 'Quicksand', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 15px;
  color: #5C5C5C;
}

.comment-text, .reply-text {
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
  z-index: 1;
}

.favorite-btn {
  background: #ED7839;
  color: white;
  margin-top: 22px;
  width: 35px;
  height: 25px;
  z-index: 1;
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

.reply-author, .privilege-text, .checked-icon {
  margin-top: auto;
  margin-bottom: auto;
}

.reply-author {
  margin-right: auto;
}

.privilege-text {
  color: $orange-bg;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 13px;
}

.checked-icon {
  margin-left: 30px;
  width: 25px;
  aspect-ratio: '4/3';
}


.blur-box {
  content: "";
  position: absolute;
  background-color: #ccc;
  display: block;
  margin: -16px 0 0 -16px;
  width: 100%;
  height: 100%;
  border-radius: 2px;
  background: rgba(100, 59, 59, 0.05);
  backdrop-filter: blur( 5px );
  -webkit-backdrop-filter: blur( 9.5px );
  border: 1px solid rgba(162, 121, 121, 0.241);
  z-index: 2;
}

.text-over-blur {
  position:relative;
  z-index: 3;
}

.feedback-text {
  font-family: 'Quicksand', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  color: #707070;
}

.edit-topic {
  font-family: 'Segoe UI', sans-serif;
  font-style: normal;
  font-size: 14px;
  line-height: 19px;
  text-decoration-line: underline;
  color: $orange-bg;
  cursor: pointer;
}

.text-over-blur {
  top: 30px;
  bottom: 30px;

}
</style>
