<template>
  <div class="discussion-div">
    <q-card flat bordered class="discussion-card">
      <div class="discussion-area" style="padding-left: 10px; height: 40px;">
        Discussões
      </div>
      <q-card-section v-if="(typingComment || editingComment) && !sentComment" class="q-mb-xl">
        <div class="text-center suggestion-title">
          <span class="suggestion-text">
            Tem uma dúvida ou sugestão? Compartilhe seu feedback com os autores!
          </span>
        </div>
        <div>
          <div>
            <span class="field-title">Assunto</span>
            <q-input
              dense
              outlined
              square
              v-model="subject"
              label="Defina um tópico sucinto para notificar os autores..."
            />
          </div>
          <div class="q-mt-sm">
            <span class="field-title">Conteúdo</span>
            <q-editor v-model="text" paragraph-tag="p" square min-height="5rem" />
          </div>
        </div>
      </q-card-section>
      <q-card-section class="text-center" v-if="!typingComment && !editingComment && !sentComment">
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
      <q-card-section class="text-center q-mb-xl" v-if="!typingComment && !editingComment && sentComment">
        <div class="topic-sent-successfully">
          <span>Seu tópico foi enviado com sucesso! :D</span>
        </div>
        <div class="topic-sent-thanks">
          <span>Agradecemos por sua contribuição, uma notificação será enviada ao seu email assim que seu tópico for respondido!</span>
        </div>
        <div class="topic-sent-suggestion">
          <span>Descubra outros trabalhos!</span>
        </div>
      </q-card-section>
      <q-card-section>
        <div class="text-center new-topic-btn-div" >
          <q-btn style="z-index: 1;" v-if="!typingComment" class="new-topic-btn" dense no-caps icon="add" @click="typeComment" label="criar tópico" />
          <div class="row" v-else>
            <q-btn style="z-index: 1;" class="add-topic-btn" dense no-caps @click="sendComment" label="Enviar" />
          </div>
          <q-separator />
        </div>
      </q-card-section>
      <div v-for="(comment, index) in comments" :key="comment.author + index + comment.replies">
        <discussion-reply :comment="comment" :blur="blur && (index === 0) ? true : false " class="q-mb-lg" style="z-index: 0;" />
      </div>
    </q-card>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';
import DiscussionReply from './DiscussionReply.vue'

export default {
  name: 'DiscussionSection',
  components: {
    DiscussionReply
  },
  data () {
    return {
      blur: false,
      sentComment: false,
      typingComment: false,
      subject: '',
      text: '',
      author: 'Henrique Miranda' // this will become dynamic once account system is implemented
    }
  },
  methods: {
    ...mapMutations('globalState', ['addComment', 'editComment']),
    typeComment () {
      this.sentComment = false
      this.typingComment = true
    },
    sendComment () {
      if (!this.subject || !this.text) return

      if (this.isEditingComment) {
        const editedComment = { subject: this.subject, text: this.text, author: this.author }
        this.editComment(editedComment)
        this.typingComment = false
        this.subject = ''
        this.text = ''
        return
      }

      this.typingComment = false
      this.sentComment = true

      this.addComment({
        author: this.author,
        subject: this.subject,
        text: this.text
      })

      this.subject = ''
      this.text = ''
    }
  },
  computed: {
    ...mapGetters('globalState', ['comments', 'isEditingComment', 'editingComment'])
  },
  watch: {
    editingComment () {
      if (this.editingComment) {
        this.subject = this.editingComment.subject
        this.text = this.editingComment.text
        this.typingComment = true
        this.sentComment = false
      }
    },
    'sentComment' () {
      this.blur = true
    }
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

.share-ideas-text, .field-title, .topic-sent-successfully {
  color: $orange-bg;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  margin-top: 15px;
}

.topic-sent-successfully {
  margin-top: 0 !important;
}

.suggestion-title {
  margin-bottom: 30px;
}

.share-ideas-subtext, .topic-sent-thanks {
  margin: 35px 200px;
  font-family: 'Quicksand', sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: $text-primary;
  font-style: normal;
}

.share-ideas-subtext {
  width: 80%;
  margin: 35px auto;
}

.new-topic-btn-div {
  margin-top: -60px;
}

.new-topic-btn {
  font-family: 'Quicksand', sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: $text-primary;
  font-style: normal;
  font-weight: bold !important;
  margin-bottom: -17px;
  color: white;
  background: linear-gradient(180deg, #FEB254 0%, #F0813D 100%);
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
  border-radius: 4px;
}

.add-topic-btn {
  font-weight: 400;
  font-size: 14px;
  color: $text-primary;
  font-style: normal;
  font-weight: bold !important;
  color: white;
  background: linear-gradient(180deg, #FEB254 0%, #F0813D 100%);
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
  margin-top: -20px;
  height: 35px;
  width: 150px;
  margin-left: auto;
}

.suggestion-text {
  font-family: 'Quicksand', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #4D4D4D;
}

.topic-sent-suggestion {
  color: $orange-bg;
  font-family: 'Quicksand', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  text-decoration-line: underline;
  margin-bottom: 35px;
}

</style>
