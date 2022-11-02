<template>
      <div class="container">
        <div class="row">
      <div class="col-sm-12">
        <div class="nav nav-tabs" id="nav-tab" role="tablist">
          <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab"
          data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home"
          aria-selected="true">Operações</button>

          <button class="nav-link" id="nav-telegram-tab" data-bs-toggle="tab"
          data-bs-target="#nav-telegram" type="button" role="tab" aria-controls="nav-telegram"
          aria-selected="true">Trading analyst</button>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <div class="tab-content" id="nav-tabContent">
          <div class="tab-pane fade show active p-3" id="nav-home" role="tabpanel"
          aria-labelledby="nav-home-tab">
            <div class="row">
              <div class="col-sm-12">
                <div style="display: flex; justify-content: space-between">
                  <h2>Operações</h2>
                  <OffCanvas :pairs="pairs" :tradingAnalysts="tradingAnalysts"/>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Par</th>
                      <th scope="col">Preço de entrada</th>
                      <th scope="col">Tipo da operação</th>
                      <th scope="col">Objetivo</th>
                      <th scope="col">Preço Stop</th>
                      <th scope="col">Criado em</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="operation in operations" :key="operation.id">
                      <th scope="row">{{ operation.id }}</th>
                      <td>{{ operation.pair }}</td>
                      <td>{{ operation.entry_price }}</td>
                      <td>{{ operation.type == 'BUY' ? 'Compra' : 'Venda' }}</td>
                      <td>{{ operation.target_price }}</td>
                      <td>{{ operation.current_stop_price }}</td>
                      <td>{{ new Intl.DateTimeFormat('pt-BR', {timeZone: 'UTC'}).format(new Date(operation.created_at)) }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div class="tab-pane fade p-3" id="nav-telegram" role="tabpanel"
          aria-labelledby="nav-telegram-tab">
            <div v-if="tradingAnalyst.created" class="alert alert-info" role="alert">
              Analista foi criado com sucesso!
            </div>
            <div class="row">
              <div class="col-md-10">
                <h2>Trading analyst</h2>
              </div>
              <div class="col-md-2">
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  Criar Trading Analyst
                </button>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Nome</th>
                      <th scope="col">Registrado por</th>
                      <th scope="col">Ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="trading in tradingAnalysts" :key="trading.id">
                      <th scope="row">{{ trading.id }}</th>
                      <td>{{ trading.name }}</td>
                      <td>{{ trading.user_name }}</td>
                      <td><button type="button" class="btn btn-dark" disabled>Editar</button></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Trading Analyst</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-md-12">
              <label for="objective" class="form-label">Nome</label>
              <input type="text" class="form-control" v-model="tradingAnalyst.name">
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal" v-on:click="addTradingAnalyst">Criar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import fetchInternalAPI from './../../services/burry.service';
import fetchCoreAPI from './../../services/core.service';

// Components
import OffCanvas from './../OffCanvas';

export default {
  name: 'AdministratorPage',
  components: { OffCanvas },
  data() {
    return {
      tradingAnalyst: {
        name,
        created: false,
      },
      operations: [],
      pairs: [],
      tradingAnalysts: []
    }
  },
  mounted() {
    this.loadTradingAnalysts();
    this.loadPairs();
    this.loadOperations();
  },
  methods: {
    loadTradingAnalysts() {
      fetchInternalAPI.get('/api/v1/trading-analyst')
      .then((res) => {
        this.tradingAnalysts = res.data.data;
      }).catch((err) => {
        console.log(err);
      });
    },

    loadOperations() {
      fetchInternalAPI.get('/api/v1/operations')
      .then((res) => {
        console.log(res.data.data);
        this.operations = res.data.data;
      }).catch((err) => {
        console.log(err);
      });
    },

    loadPairs() {
      fetchCoreAPI.get('/availableUSDTPairs')
      .then((res) => {
        this.pairs = res.data.data;
      }).catch((err) => {
        console.log(err);
      });
    },

    addTradingAnalyst() {
      const dataAnalyst = {
        name: this.tradingAnalyst.name,
        user_id: JSON.parse(localStorage.getItem('userData')).id,
        registered_by_user_id: JSON.parse(localStorage.getItem('userData')).id,
      }

      fetchInternalAPI.post('/api/v1/trading-analyst', dataAnalyst)
      .then((res) => {
        if (res.data.statusCode === 200) {
          this.tradingAnalyst.created = true;
        }
        
        this.loadTradingAnalysts();
      }).catch((err) => {
        console.log(err);
      });
    },
  }
}
</script>

<style>
</style>
