<template>
  <q-page>
    <div class="row page-row">
      <div class="col top-col">
        <span class="top-row-header">
          Análise sensorial de preparações funcionais desenvolvidas para escolares entre 09 e 15 anos, do município de Campinas/SP
        </span>
        <video-player/>
      </div>
      <div class="col top-col-2">
        <div style="text-align: right;">
          <q-btn class="top-btn" style="margin-left: 100px" dense icon="download" label="Download" />
          <q-btn class="top-btn q-ml-sm" dense icon="star" />
          <q-btn class="top-btn q-ml-sm" dense>
            <q-img :src="require('src/assets/icons/doi.svg')" width="24px"/>
          </q-btn>
        </div>
        <div class="col cite-trabalho">
          COMO CITAR ESSE TRABALHO?
        </div>
        <div class="col">
          <q-card flat bordered class="top-text-card">
            <div class="card-title-area">
              Detalhes
            </div>

            <q-separator />

            <q-scroll-area
              :thumb-style="thumbStyle"
              :bar-style="barStyle"
              style="height: 350px; max-width: 300px;"
            >
              <div class="q-pa-md" style="font-size: 11pt">
                Tipo de Apresentação: <strong>Pôster</strong><br>
                Eixo temático: <strong>Alimentação e saúde(AS)</strong><br>
                Palavras-chaves: <strong>Alimentos funcionais, alimentação escolar.</strong><br><br>
                <strong>Autores:</strong><br>
                Galileo Galilei¹<br>
                Berta Lange de Morretes²<br>
                Isaac Newton³<br>
                Cesar Lattes¹<br>
                Stephen Hawking⁴<br>
              </div>
            </q-scroll-area>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import VideoPlayer from '../components/VideoPlayer.vue'

export default {
  name: 'PageIndex',
  components: {
    VideoPlayer
  }
}
</script>

<style lang="scss" scoped>
.page-row {
  margin: 20px 45px;
}

.top-row-header {
  font-size: 15pt;
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
  font-size: 14px;
  line-height: 25px;
  /* identical to box height, or 179% */

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
  height: 45px;
  padding: 10px 0 10px 10px;
  font-weight: 500;
}
</style>
