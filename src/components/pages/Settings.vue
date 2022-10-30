<template>
        <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <div class="nav nav-tabs" id="nav-tab" role="tablist">
          <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab"
          data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home"
          aria-selected="true">Binance</button>

          <button class="nav-link" id="nav-telegram-tab" data-bs-toggle="tab"
          data-bs-target="#nav-telegram" type="button" role="tab" aria-controls="nav-telegram"
          aria-selected="true">Telegram</button>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <div class="tab-content" id="nav-tabContent">
          <div class="tab-pane fade show active p-3" id="nav-home" role="tabpanel"
          aria-labelledby="nav-home-tab">
            <h2>Binance</h2>
            <div class="alert alert-warning" role="alert">
              ⚠️ Após salvar suas credenciais os dados serão criptografados.
            </div>
            <form>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Secret</label>
                <input type="text" v-model="binanceSettings.key" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                <div id="emailHelp" class="form-text">Adicione sua secret key para <strong>bot</strong> conseguir acessar sua conta e realizar as operações</div>
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Key</label>
                <input type="text" v-model="binanceSettings.secret" class="form-control" id="exampleInputPassword1" aria-describedby="passwordHelp">
                <div id="passwordHelp" class="form-text">Adicione sua key para <strong>bot</strong> conseguir acessar sua conta e realizar as operações</div>
              </div>
              <button type="submit" class="btn btn-primary">Salvar</button>
            </form>
          </div>

          <div class="tab-pane fade p-3" id="nav-telegram" role="tabpanel"
          aria-labelledby="nav-telegram-tab">
            <h2>Telegram</h2>
            <div class="alert alert-info" role="alert">
              Caso você deseja receber atualizações das operações que estão sendo realizadas, informe seu chatId para bot ser ativado.
            </div>
            <form>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">ChatId</label>
                <input type="text" value="" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                <div id="emailHelp" class="form-text">Adicione seu chatId para habilitar mensagem do <strong>bot</strong> e ficar ligado nas operações</div>
              </div>
              <button type="submit" class="btn btn-primary">Salvar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import fetch from './../../services/burry.service';

export default {
  name: 'SettingsPage',
  data: () => {
    return {
      binanceSettings: {
        key: undefined,
        secret: undefined
      }
    }
  },
  mounted() {
    this.getSettings();
  },
  methods: {
    getSettings() {
      const { id } = JSON.parse(localStorage.getItem('userData'));

      fetch.get(`/api/v1/users/${id}/binance`)
      .then((res) => {
          if (res.data.statusCode === 200 && res.data.message === 'User Binance found') {
            this.binanceSettings.key = this.generateHash();
            this.binanceSettings.secret = this.generateHash();
          }
      })
      .catch((err) => {
        console.log(err);
      });
    },
    generateHash() {
      const res = (len, chars='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789') => [...Array(len)].map(() => chars.charAt(Math.floor(Math.random() * chars.length))).join('');

      return res(64);
    }
  }
}
</script>

<style>
#app {
  font-family: 'Nunito Sans', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
