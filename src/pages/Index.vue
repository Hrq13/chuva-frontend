<template>
  <q-page>
    <div class="row page-row">
      <div class="col top-col">
        <span class="top-row-header">
          Análise sensorial de preparações funcionais desenvolvidas para escolares entre 09 e 15 anos, do município de Campinas/SP
        </span>
        <video-player style="margin-top: 20.5px;" />
      </div>
      <div :class="isMobile ? 'row q-mt-lg' : 'col top-col-2'">
        <div style="text-align: right;">
          <q-btn class="top-btn" style="width: 130px" dense icon="download" label="Download" />
          <q-btn class="top-btn q-ml-sm" style="width: 40px" dense icon="star" />
          <q-btn class="top-btn q-ml-sm" style="width: 40px" dense>
            <q-img :src="require('src/assets/icons/doi.svg')" width="24px"/>
          </q-btn>
        </div>
        <div :class="(isMobile ? 'row' : 'col') + ' cite-trabalho'">
          COMO CITAR ESSE TRABALHO?
        </div>
        <div v-if="!isMobile">
          <q-card flat bordered class="top-text-card">
            <div class="card-title-area">
              Detalhes
            </div>

            <q-separator />

            <q-scroll-area
              style="height: 350px; max-width: 300px"
            >
              <div class="q-pa-md card-inner-text">
                Tipo de Apresentação: <strong>Pôster</strong><br>
                Eixo temático: <strong>Alimentação e saúde (AS) </strong><br>
                Palavras-chaves: <strong>Alimentos funcionais, alimentação escolar.</strong><br><br>

                <strong>Autores:</strong><br>
                Galileo Galilei¹<br>
                Berta Lange de Morretes²<br>
                Isaac Newton³<br>
                Cesar Lattes¹<br>
                Stephen Hawking⁴<br><br>

                <i>
                ¹Universidade Estadual de Campinas<br>
                ²Universidade de São Paulo<br>
                ³Instituto Nacional de Pesquisas Espaciais<br>
                ⁴Universidade Federal do Rio de Janeiro<br>
                </i>
              </div>
            </q-scroll-area>
          </q-card>
        </div>
      </div>
      <div v-if="isMobile" style="width: 100%">
        <q-card flat bordered class="mobile-top-text-card">
          <div class="card-title-area">
            Detalhes
          </div>

          <q-separator />

          <q-scroll-area style="height: 200px;">
            <div class="q-pa-md card-inner-text">
              Tipo de Apresentação: <strong>Pôster</strong><br>
              Eixo temático: <strong>Alimentação e saúde (AS) </strong><br>
              Palavras-chaves: <strong>Alimentos funcionais, alimentação escolar.</strong><br><br>

              <strong>Autores:</strong><br>
              Galileo Galilei¹<br>
              Berta Lange de Morretes²<br>
              Isaac Newton³<br>
              Cesar Lattes¹<br>
              Stephen Hawking⁴<br><br>

              <i>
              ¹Universidade Estadual de Campinas<br>
              ²Universidade de São Paulo<br>
              ³Instituto Nacional de Pesquisas Espaciais<br>
              ⁴Universidade Federal do Rio de Janeiro<br>
              </i>
            </div>
          </q-scroll-area>
        </q-card>
      </div>
    </div>
    <text-section
      title="Resumo"
      :summarizedText="resumoText"
      :showReadMoreBtn="true"
      :fullText="fullResumoText"
    />
    <discussion-section />
  </q-page>
</template>

<script>
import VideoPlayer from 'src/components/Index-page/VideoPlayer.vue'
import TextSection from 'src/components/Index-page/TextSection.vue'
import DiscussionSection from 'src/components/Index-page/DiscussionSection.vue'


export default {
  name: 'PageIndex',
  components: {
    VideoPlayer,
    TextSection,
    DiscussionSection
  },
  data () {
    return {
      showReadMoreButton: true,
      resumoText: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae turpis auctor, mollis felis ut, commodo turpis. Phasellus felis mauris, egestas eget cursus et, iaculis quis lacus. Fusce auctor eros sed magna ultricies gravida. Etiam aliquam dictum nisl, vel aliquet enim accumsan sit amet. Donec finibus nisi tellus, ut viverra lorem vestibulum ut. Phasellus condimentum orci id leo condimentum lobortis et non lorem. Sed id nisl metus. Quisque sollicitudin ligula in sapien scelerisque, ac gravida eros vestibulum.
      Fusce vitae luctus dui. Donec id euismod mauris, in volutpat urna. Proin dapibus consequat feugiat. Proin dictum justo arcu, quis vestibulum augue lacinia quis. Sed dignissim dui nulla, ut faucibus mauris sodales id. Aliquam erat volutpat. Maecenas dolor enim, tincidunt id elit non, suscipit interdum turpis. Etiam finibus urna libero, eget interdum eros volutpat ullamcorper. Pellentesque et pretium lorem. Aenean interdum quis diam ac porttitor. Cras nec ipsum pulvinar, pharetra libero non, ornare enim. Etiam in laoreet
      Nam eget tristique elit, at fermentum tellus. Mauris scelerisque ligula id eleifend feugiat. Donec eleifend vehicula sem nec dapibus. Integer scelerisque neque dui, in lacinia erat molestie eu. Phasellus..
      `,
      fullResumoText: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae turpis auctor, mollis felis ut, commodo turpis. Phasellus felis mauris, egestas eget cursus et, iaculis quis lacus. Fusce auctor eros sed magna ultricies gravida. Etiam aliquam dictum nisl, vel aliquet enim accumsan sit amet. Donec finibus nisi tellus, ut viverra lorem vestibulum ut. Phasellus condimentum orci id leo condimentum lobortis et non lorem. Sed id nisl metus. Quisque sollicitudin ligula in sapien scelerisque, ac gravida eros vestibulum.
      <br><br>
      Fusce vitae luctus dui. Donec id euismod mauris, in volutpat urna. Proin dapibus consequat feugiat. Proin dictum justo arcu, quis vestibulum augue lacinia quis. Sed dignissim dui nulla, ut faucibus mauris sodales id. Aliquam erat volutpat. Maecenas dolor enim, tincidunt id elit non, suscipit interdum turpis. Etiam finibus urna libero, eget interdum eros volutpat ullamcorper. Pellentesque et pretium lorem. Aenean interdum quis diam ac porttitor. Cras nec ipsum pulvinar, pharetra libero non, ornare enim. Etiam in laoreet odio.
      <br><br>
      Nam eget tristique elit, at fermentum tellus. Mauris scelerisque ligula id eleifend feugiat. Donec eleifend vehicula sem nec dapibus. Integer scelerisque neque dui, in lacinia erat molestie eu. Phasellus maximus dui eget lacus porta tempor. Ut ex nibh, dignissim quis purus semper, efficitur facilisis turpis. Praesent blandit elementum ultricies. Aliquam sit amet enim sit amet nulla pulvinar lobortis consectetur non odio. Phasellus at lacus hendrerit, vulputate nisi sit amet, viverra mauris. Etiam eu scelerisque orci. Quisque sagittis, mi vitae pharetra iaculis, orci elit eleifend massa, eu posuere mauris odio id odio. Morbi eu libero luctus, consectetur lorem vel, interdum sapien. Aenean in porta arcu. Maecenas eu maximus massa.
      <br><br>
      Praesent velit dolor, dignissim sed quam ac, efficitur porta justo. Pellentesque porta pharetra felis ut hendrerit. Nulla facilisi. Aliquam erat volutpat. Nunc sit amet faucibus quam. Maecenas dapibus luctus dolor at viverra. Duis nec fringilla libero. Duis risus nibh, viverra ac orci nec, iaculis dictum sem. Aliquam at malesuada arcu. Aliquam erat volutpat. Donec varius ipsum purus, ut vehicula purus placerat vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      `
    }
  },
  computed: {
    isMobile() {
      return this.$q.platform.is.mobile
    }
  }
}
</script>

<style lang="scss" scoped>
.page-row {
  margin: 20px 45px;
}

.top-row-header {
  font-size: min(max(1rem, 4vw), 15pt);
  font-weight: 700;
  color: rgb(242, 115, 68)
}

.top-col-2 {
  margin-left: auto;
  max-width: 30%;
}

.top-btn {
  background: $orange-bg;
  color: white;
}

.cite-trabalho {
  margin: 10px 0 13px 0;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: min(max(1rem, 4vw), 14.5px);
  line-height: 25px;
  text-align: right;
  letter-spacing: 0.05em;
  color: #ED7839;
}

.top-text-card {
  margin-left: auto;
  max-width: 90%;
}

.card-title-area {
  background: $primary;
  font-size: 15pt;
  color: $text-primary;
  height: 47px;
  padding: 10px 0 10px 10px;
  font-weight: 500;
}

.card-inner-text {
  font-family: 'Quicksand', sans-serif;
  color: $text-primary;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
}

.mobile-top-text-card {
  width: 100%
}
</style>
