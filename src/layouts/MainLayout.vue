<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar class="toolbar">
        <q-btn-dropdown
          v-if="$q.platform.is.mobile"
          flat
          dense
          round
          dropdown-icon="none"
          icon="menu"
          aria-label="Menu"
          @click="mobileDrawerOpen = !mobileDrawerOpen"
        >
          <q-list dense v-for="(page, index) in pagesBtns" :key="index">
            <essential-link style="font-weight: 500" :page="page" />
            <q-separator />
          </q-list>
        </q-btn-dropdown>

        <div class="col" v-if="!$q.platform.is.mobile">
          <div class="row q-ml-lg" style="margin-right: auto;">
            Anais do Simpósio Latino Americano de Ciências de Alimentos
          </div>
          <div class="row q-ml-lg" style="font-size: 150%">
            Anais do 13o Simpósio Latino Americano de Ciência de Alimentos
          </div>
          <div class="row q-ml-lg">
              ISSN: 1234-5678
          </div>
        </div>

        <div class="col" v-else>
          <div class="row" style="font-size: 75%">
            Anais do 13o Simpósio Latino Americano de Ciência de Alimentos
          </div>
          <div class="row" style="font-size: 65%">
              ISSN: 1234-5678
          </div>
        </div>

        <div class="row" v-if="!$q.platform.is.mobile">
          <div class="col">
            <q-btn-dropdown class="dropdown" flat style="width: 105px">
              <template v-slot:label>
                <div class="row items-center no-wrap">
                  <i class="fas fa-globe"/>
                  <div class="text-center" style="color: rgb(136, 107, 107); margin-right: -5px">
                    {{ selectedLanguage }}
                  </div>
                </div>
              </template>

              <q-list dense v-for="(language, index) in languageList" :key="index">
                <q-item class="row justify-center" clickable v-close-popup @click="onItemClick(language)">
                  {{ language }}
                </q-item>
              </q-list>
            </q-btn-dropdown>
          </div>
          <div class="row">
            <div class="col">
              <span class="row q-ml-md q-mr-sm text-right">Bem vindo!<br> alguem12@galoascience.com</span>
            </div>
            <q-avatar>
              <img :src="require('src/static/images/profile-picture.png')">
              <q-badge floating rounded color="red">2</q-badge>
            </q-avatar>
          </div>
        </div>

        <div class="row q-ml-sm" v-else>
          <div class="col">
            <q-btn color="black" size="xs" flat icon="fas fa-globe">
              <q-menu no-icon-animation flat style="width: 55%">
                <template v-slot:label>
                  <div class="row items-center">
                    <i class="fas fa-globe"/>
                  </div>
                </template>

                <q-list dense v-for="(language, index) in languageList" :key="index">
                  <q-item class="row justify-center" clickable v-close-popup @click="onItemClick(language)">
                    {{ language }}
                  </q-item>
                </q-list>
              </q-menu>
            </q-btn>
          </div>
          <q-avatar>
            <img :src="require('src/static/images/profile-picture.png')">
            <q-badge floating rounded color="red">2</q-badge>
          </q-avatar>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-if="!$q.platform.is.mobile"
      show-if-above
      elevated
      :width="245"
      content-class="bg-grey-1"
      style="background: white"
    >
      <q-card
        class="drawerCard row"
        square
      >
        <p style="margin: auto 0">SLACA 2019</p>
      </q-card>
      <q-img :src="require('src/static/images/Logo400x400_0.png')"/>
      <q-list dense v-for="(page, index) in pagesBtns" :key="index">
        <essential-link style="font-weight: 500" :page="page" />
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
      mobileDrawerOpen: false,
      languageList: ['PT, BR', 'EN-US'],
      selectedLanguage: 'PT, BR',
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
  },
  methods: {
    onItemClick (language) {
      if (this.selectedLanguage !== language) {
        this.selectedLanguage = language
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.toolbar {
  height: 80px;
  background: #ffe8e6;
  color: rgb(136, 107, 107)
}

.drawerCard {
  color: white;
  font-size: 24pt;
  text-align: center;
  font-weight: 600;
  justify-content: center;
  background: linear-gradient(0deg, rgba(235,125,52,1) 29%, rgba(231,167,57,1) 88%);
  height: 80px;
}

.fas {
  margin: 0 5px 0 11px;
  font-size: 11.5pt;
  color: rgb(68, 61, 61);
}

.dropdown {
  border-width: 1px;
  border-color: rgb(187, 187, 187);
  border-style: solid;
  color: black;
}
</style>
