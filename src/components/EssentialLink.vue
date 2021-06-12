<template>
    <q-item
      :clickable="$route.path !== pageLink ? true : false"
      tag="span"
      class="col link-button"
      :style="color"
      @click="goTo"
    >
      <div :style="'width: 6px; height: 30px; margin-left: -15px; margin-right: 15px; background: linear-gradient(0deg, rgba(235,125,52,1) 29%, rgba(231,167,57,1) 88%);' + iconVisibility"/>
      <div class="row">
        <q-item-section class="text-grey-8">
          <q-item-label>
            <span class="q-ml-md">
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
  methods: {
    goTo () {
      return this.$route.path !== this.pageLink && this.$router.push(this.pageLink)
    }
  },
  computed: {
    pageName () {
      return this.page.name
    },
    pageLink () {
      return this.page.link
    },
    color () {
      return 'background: ' + (this.$route.path === this.pageLink ? '#ffe8e6;' : 'white;')
    },
    iconVisibility () {
      return 'display: ' + (this.$route.path === this.pageLink ? 'inline;' : 'none;')
    }
  }
}
</script>
