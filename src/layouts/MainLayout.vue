<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      show-if-above
      elevated
      :width="245"
      content-class="bg-grey-1"
      style="background: white"
    >
      <q-card
        class="text-white text-h4 text-center text-weight-bold row justify-center"
        style="background: linear-gradient(0deg, rgba(235,125,52,1) 29%, rgba(231,167,57,1) 88%); height: 80px;"
        square
      >
        <p style="margin: auto 0">SLACA 2019</p>
      </q-card>
      <q-img :src="require('src/static/images/Logo400x400_0.png')"/>
      <q-list v-for="(page, index) in pagesBtns" :key="index">
        <essential-link :page="page" />
        <q-separator />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from '../components/EssentialLink.vue'

export default {
  components: { EssentialLink },
  name: 'MainLayout',
  data () {
    return {
      pagesBtns: [
        {
          name: 'Apresentação',
          link: '/apresentacao'
        },
        {
          name: 'Comitês',
          link: '/comites'
        },
        {
          name: 'Autores',
          link: '/autores'
        },
        {
          name: 'Eixos temáticos',
          link: '/eixos'
        },
        {
          name: 'Trabalhos',
          link: '/trabalhos'
        },
        {
          name: 'Contato',
          link: '/contato'
        }
      ]
    }
  }
}
</script>
