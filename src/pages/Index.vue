<template>
  <q-page>
    <main class="row page-row">
      <section class="section-1">
        <div class="video-container">
          <h1>Análise sensorial de preparações funcionais desenvolvidas para escolares entre 09 e 15 anos, do município de Campinas/SP</h1>
          <!-- <iframe class="video-player" src="https://www.youtube.com/embed/CICIOJqEb5c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->
          <video-player class="video-player" v-if="true"/>
        </div>
        <div class="video-details">
          <div class="video-details-bar">
            <div class="video-details-buttons">
              <q-btn class="top-btn" dense icon="download" label="Download" />
              <q-btn class="top-btn" dense icon="star" />
              <q-btn class="top-btn" dense>
                <q-img :src="require('src/assets/icons/doi.svg')" width="24px"/>
              </q-btn>
            </div>
            <p class="cite-trabalho">
              COMO CITAR ESSE TRABALHO?
            </p>
          </div>
          <div flat bordered class="video-details-card">
            <p class="card-title">
              Detalhes
            </p>

            <p class="video-details-text">
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
              ⁴Universidade Federal do Rio de Janeiro
              </i>
            </p>
          </div>
        </div>
      </section>
      <text-section
        title="Resumo"
        class="text-section"
        :summarizedText="resumoText"
        :showReadMoreBtn="true"
        :fullText="fullResumoText"
      />
      <discussion-section class="discussion-section" />
      <footer>
        <div class="footer-title">
          <p>Galoá</p>
          <p>anais e proceedings</p>
          <button>Saiba mais</button>
        </div>
        <p class="footer-text">
          <strong>Preservar a memória do evento e ampliar o acesso ao conhecimento científico</strong> gerado em eventos é a razão de ser da plataforma Galoá Proceedings<br><br>
          Os trabalhos publicados aqui têm maior chance de alcance e ficam disponíveis para toda a comunidade científica, mantendo aceso o debate científico
          fomentado pelos encontro e aumentando o impacto do evento.
        </p>
      </footer>
    </main>
  </q-page>
</template>

<script>
import VideoPlayer from 'src/components/pages/Index/VideoPlayer/VideoPlayer.vue'
import TextSection from 'src/components/pages/Index/TextSection/TextSection.vue'
import DiscussionSection from 'src/components/pages/Index/DiscussionSection/DiscussionSection.vue'


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
  }
}
</script>

<style lang="scss" scoped>
.page-row {
  margin: 1.2em 2.8em;
}
.section-1 {
  display: block;
  position: relative;
  padding-bottom: 10px;
  height: fit-content;
}

.video-container {
  display: inline-block;
  width: 68.5%;
}

.video-player {
  width: 100%;
  height: 56.5vh;
  margin: 0;
  padding: 0;
}

.video-container h1 {
  font-family: Roboto;
  display: inline-block;
  font-size: 1.3em;
  line-height: 1.2;
  font-style: normal;
  font-weight: 900;
  letter-spacing: 0.05em;
  color: #ED7839;
}

.details-container {
  /* display: block; */
  height: 100%;
  /* border: 3px solid red; */
}

.video-details {
  display: inline-block;
  width: 27%;
  margin: 0;
  margin-left: 4.5%;
  /* border: 3px solid purple; */
}

.video-details-card {
  height: 98%;
  border: 0;
  margin: 0;
}

.video-details-text {
  height: 50.5vh;
  width: 100%;
  font-family: 'Quicksand', sans-serif;
  color: $text-primary;
  font-size: 1em;
  font-style: normal;
  padding: .5em;
  margin: 0;
  font-weight: 400;
  overflow-y: scroll;
  background: white;
  border: 1px solid rgba($color: #000000, $alpha: .1);
}

.video-details-buttons {
  text-align: right;
}

.video-details-buttons .top-btn:nth-child(2) {
  margin: 0 10px;
}

.video-details-bar, h1 {
  height: 75px;
  margin: 0;
}

.top-btn {
  background: $orange-bg;
  display: inline-block;
  color: white;
}

.cite-trabalho {
  margin: 10px 0 13px 0;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: .9em;
  text-align: right;
  letter-spacing: 0.05em;
  color: #ED7839;
}

.card-title {
  background: $primary;
  font-size: 15pt;
  color: $text-primary;
  height: 47px;
  line-height: 2.3;
  margin: 0;
  border: 1px solid rgba($color: #000000, $alpha: .1);
  padding: 0 10px;
  font-weight: 500;
}

.text-section, .discussion-section {
  width: 100%;
  margin: 10px 0;
}

footer {
  margin-top: 10px;
  padding: 0;
}

.footer-title {
  width: 17.5em;
  text-align: center;
  float: left;
  font-family: 'Quicksand';
  top: -1em;
}

.footer-title p:first-child {
  display: inline-block;
  font-weight: bolder;
  font-size: 5em;
  margin: 0;
  padding: 0;
  height: 65px;
  line-height: .8;
  color: purple;
  box-sizing: border-box;
}

.footer-title p:nth-child(2) {
  font-weight: normal;
  font-size: 1.1em;
  color: purple;
  position: relative;
}

.footer-title p:nth-child(2)::before, .footer-title p:nth-child(2)::after {
  content: '....';
  display: inline-block;
  font-size: 1.5em;
  color: transparent;
  text-decoration: line-through;
  text-decoration-color: purple;
  /* box-sizing: border-box; */
}

.footer-title p:nth-child(2)::before {
  position: absolute;
  left: 31px;
  top: -4px;
}

.footer-title p:nth-child(2)::after {
  position: absolute;
  right: 31px;
  top: -4px;
}

.footer-title p {
  margin: 0;
}

.footer-title button {
  background-color: rgb(131, 46, 131);
  color: white;
  font-weight: bold;
  margin-top: 15px;
  height: 30px;
  width: 75%;
  border-radius: 5px;
  border: 0;
  cursor: pointer;
}

.footer-text {
  font-family: 'Quicksand', sans-serif;
  font-style: normal;
  font-size: 1.3em;
  line-height: 1.3em;
  color: #4D4D4D;
}

@media screen and (max-width: 1024px) {
  .page-row {
    margin: 5px 10px;
  }
  .details-container, .video-details, .video-details {
    display: block;
  }

  .video-details {
    width: 100%;
    margin-left: 0;
    height: auto;
  }

  .video-details-text {
    max-height: 150px;
  }

  .video-container {
    width: 100%;
  }

  .video-details-bar {
    margin: auto;
    padding: 0;
    height: 2.8em;
    padding: 2px 10px;
    /* border: 1px solid red; */
  }

  .video-details-bar p {
    margin-left: auto;
    text-align: right;
  }

  .video-details-buttons {
    display: inline-block;
    text-align: left;
    width: 50%;
  }

  .video-details-buttons .top-btn:nth-child(2) {
    margin: 0 10px;
  }

  .cite-trabalho {
    margin: 0;
    font-size: 1.2em;
    box-sizing: border-box;
    display: inline-block;
    color: #ED7839;
  }
}

@media screen and (max-width: 600px) {
  .video-details-bar {
    height: 75px;
  }
  .video-details-buttons {
    display: block;
    width: 100%;
    text-align: left;
    /* border: 1px solid black; */
  }

  .video-details-bar p {
    margin-top: 15px;
    font-size: 1.1em;
  }

  .footer-text {
    font-size: 1em;
    line-height: 1em;
  }
}

@media screen and (max-width: 450px) {
  footer {
    margin: 15px 0;
  }

  .footer-title {
    position: relative;
    float: none;
    margin: auto;
  }

  .footer-text {
    font-size: .9em;
    line-height: 1em;
    max-width: 80%;
    margin: auto;
  }
}
</style>
