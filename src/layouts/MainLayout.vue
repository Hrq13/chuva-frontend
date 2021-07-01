<template>
  <q-layout view="lhh Lpr lFf">
    <q-header>
      <q-toolbar class="toolbar">

        <q-btn-dropdown
          class="mobile-menu"
          flat
          dropdown-icon="menu"
          @click="mobileDrawerOpen = !mobileDrawerOpen"
        >
          <q-list dense v-for="(page, index) in pageBtns" :key="index">
            <navegation-link :page="page" />
            <q-separator />
          </q-list>
        </q-btn-dropdown>

        <div class="header-text">
          <span>
            Anais do Simpósio Latino Americano de Ciências de Alimentos
          </span>
          <span class="mid-text">
            Anais do 13o Simpósio Latino Americano de Ciência de Alimentos
          </span>
          <span>
            ISSN: 1234-5678
          </span>
        </div>

        <div class="header">
          <div class="lang-menu">
            <q-btn-dropdown class="dropdown" flat>
              <template v-slot:label>
                <div class="dropdown-btn-div">
                  <i class="fas fa-globe"/>
                  <div class="selected-lang-name">
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
          <div class="profile-menu">
            <div class="welcome-msg">
              <p>Bem vindo!<br> alguem12@galoascience.com</p>
            </div>
            <div class="profile-avatar">
              <q-avatar class="q-avatar">
                <img :src="require('src/assets/images/profile-picture.png')">
                <q-badge floating rounded color="red">2</q-badge>
              </q-avatar>
            </div>
          </div>
        </div>

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
        class="drawerCard row"
        square
      >
        <p style="margin: auto 0">SLACA 2019</p>
      </q-card>
      <q-img :src="require('src/assets/images/Logo400x400_0.png')"/>
      <q-list dense v-for="(page, index) in pageBtns" :key="index">
        <navegation-link style="font-weight: 500" :page="page" />
        <q-separator class="separator"/>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import NavegationLink from '../components/NavegationLink.vue'

export default {
  components: { NavegationLink },
  name: 'MainLayout',
  data () {
    return {
      mobileDrawerOpen: false,
      languageList: ['PT, BR', 'EN, US'],
      selectedLanguage: 'PT, BR',
      pageBtns: [
        {
          name: 'Apresentação',
          link: '/'
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
.header {
  width: 70%;
  height: 100%;
  text-align: right;
  position: relative;
}

.lang-menu {
  float: left;
  position: absolute;
  top: 18px;
  right: 350px;
  width: 15px;
}

.mobile-menu {
  display: none;
}

.nav-link {
  font-weight: 500;
}

.toolbar {
  height: 80px;
  width: 100%;
  background: primary;
  color: rgb(136, 107, 107)
}

.header-text {
  display: inline-block;
  font-size: .75em;
  height: 80px;
  margin-left: auto;
  max-width: 450px;
}

.header-text span:nth-child(2) {
  display: block;
  font-size: min(max(1rem, 4vw), 150%);
}

.drawerCard {
  color: white;
  font-size: 24pt;
  text-align: center;
  font-weight: 600;
  justify-content: center;
  background: linear-gradient(180deg, #FFB354 0%, #EE7A3A 100%);
  height: 80px;
}

.fas {
  margin: 0 5px 0 11px;
  font-size: 11.5pt;
  color: rgb(68, 61, 61);
}

.dropdown {
  width: 100px;
  border-width: 1px;
  border-color: rgb(187, 187, 187);
  border-style: solid;
  color: black;
}

.dropdown-btn-div {
  margin-left: 5px;
}

.selected-lang-name {
  color: rgb(136, 107, 107);
  display: inline;
}

.fa-globe {
  display: inline;
  margin: 0;
}

.profile-menu {
  display: inline-block;
  margin-top: 15px;
  width: 75%;
  height: 55px;
}

.welcome-msg {
  display: inline-block;
  width: 200px;
  height: 50%;
}

.welcome-msg p {
  margin: 0;
  display: inline-block;
}

.profile-avatar {
  display: inline-block;
  width: 45px;
  margin: 0;
  padding: 0;
  text-align: center;
  position: relative;
}

.q-avatar {
  position: absolute;
  right: 1px;
  bottom: -3px;
  margin: -20px 0 0 0 ;
  padding: 0;
}


@media screen and (max-width: 1024px) {
  .mobile-menu {
    display: initial;
    width: 30px;
    margin: 0 5px;
    align-content: center;
    text-align: center;
  }

  .header {
    width: 66%;
    padding-left: 0;
  }

  .header-text {
    margin: 10px 0 0 0;
    font-size: .75em;
    width: 50%;
  }

  .header-text span:first-child {
    display: none;
  }

  .lang-menu {
    right: 300px;
  }

  .dropdown {
    width: 60px;
  }

  .dropdown-btn-div {
    margin-left: 5px;
  }

  .selected-lang-name {
    display: none;
  }
}

@media screen and (max-width: 750px) {
  .toolbar {
    height: 5em;
  }

  .q-avatar {
    right: 1px;
    bottom: -15px;
  }

  .header {
    display: block;
    padding: 10px 0;
    position: relative;
    width: 30%;
    margin-left: auto;
  }
  .header-text {
    font-size: .5em;
    display: inline-block;
    margin-top: 30px;
  }

  .header-text span:last-child {
    font-size: 1.5em;
  }
  .lang-menu {
    right: 100px;
  }

  .welcome-msg {
    display: none;
  }
}
</style>
