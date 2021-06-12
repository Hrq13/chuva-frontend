<template>
    <q-item
      :clickable="$route.path !== pageLink ? true : false"
      tag="span"
      class="col"
      :style="color"
      @click="goTo"
    >
      <div class="row">
      <div class="icon" v-show="iconVisibility"/>
        <q-item-section class="text-grey-8">
          <q-item-label>
            <span class="button-text q-ml-md">
              {{ pageName }}
            </span>
          </q-item-label>
        </q-item-section>
      </div>
    </q-item>
</template>

<script>
export default {
  name: 'EssentialLink',
  props: {
    page: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      color: 'background: white',
      iconVisibility: false
    }
  },
  methods: {
    goTo () {
      return this.$route.path !== this.pageLink && this.$router.push(this.pageLink)
    },
    checkRoute () {
      if (this.$route.path === this.pageLink) {
        this.color = 'background: #ffe8e6;'
        this.iconVisibility = true;
      } else {
        this.color = 'background: white;'
        this.iconVisibility = false;
      }
    }
  },
  computed: {
    pageName () {
      return this.page.name
    },
    pageLink () {
      return this.page.link
    }
  },
  watch: {
    '$route.path'() {
      this.checkRoute()
    }
  },
  created () {
    this.checkRoute()
  }
}
</script>

<style lang="scss" scoped>
.icon {
  width: 6px;
  height: 30px;
  margin-left: -15px;
  margin-right: 15px;
  background: linear-gradient(0deg, rgba(235,125,52,1) 29%, rgba(231,167,57,1) 88%);
}

.button-text {
  color: rgb(112, 112, 112)
}
</style>
