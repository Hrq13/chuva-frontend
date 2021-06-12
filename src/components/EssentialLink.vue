<template>
  <div>
    <q-item
      clickable
      tag="a"
      @click="goTo"
    >
      <q-item-section class="text-grey-8">
        <q-item-label class="q-ml-md">{{ pageName }}</q-item-label>
      </q-item-section>
    </q-item>
  </div>
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
    }
  }
}
</script>
