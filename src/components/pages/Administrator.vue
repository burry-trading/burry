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
            <h2>Operações</h2>
            <div class="row">
              <div class="col-md-3">
                <label for="objective" class="form-label">Par</label>
                <input type="text" class="form-control" v-model="operation.pair" placeholder="BTCUSDT">
              </div>
              <div class="col-md-3">
                <label for="trading_analyst_id" class="form-label">Analista</label>
                <select v-model="operation.trading_analyst_id" class="form-select" aria-label="analyst">
                  <option selected>Escolha um analista</option>
                  <option v-for="trading in tradingAnalysts"  :key="trading.id" :value="trading.id">{{ trading.name }}</option>
                </select>
              </div>
              <div class="col-md-2">
                <label for="type" class="form-label">Tipo da operação</label>
                <select v-model="operation.type" class="form-select" aria-label="type">
                  <option selected>Escolha tipo da operação</option>
                  <option value="BUY">Compra</option>
                  <option value="SELL">Venda</option>
                </select>
              </div>
              <div class="col-md-2">
                <label for="target_price" class="form-label">Objetivo</label>
                <div class="input-group mb-3">
                  <input type="text" class="form-control" v-model="operation.target_price" aria-describedby="basic-addon2">
                </div>
              </div>
              <div class="col-md-2">
                <label for="price" class="form-label">Objetivo PNL</label>
                <input type="text" class="form-control" v-model="operation.target_price_pnl_percentage">
              </div>
            </div>
            <br>
            <div class="row">
              <div class="col-md-4">
                <label for="stop_price" class="form-label">Stop Price</label>
                <input type="text" class="form-control" v-model="operation.stop_price">
              </div>
              <div class="col-md-2">
                <label for="stop_price_pnl_percentage" class="form-label">Stop Price PNL</label>
                <input type="text" class="form-control" v-model="operation.stop_price_pnl_percentage">
              </div>
              <div class="col-md-4">
                <label for="entry_price" class="form-label">Preço entrada</label>
                <input type="text" class="form-control" v-model="operation.entry_price">
              </div>
              <div class="col-md-2">
                <label for="entry_price_pnl_percentage" class="form-label">Preço entrada PNL</label>
                <input type="text" class="form-control" v-model="operation.entry_price_pnl_percentage">
              </div>
            </div>
            <br>
            <div class="row">
              <div class="col-md-2">
                <label for="current_stop_price" class="form-label">Current Stop Price</label>
                <input type="text" class="form-control" v-model="operation.current_stop_price">
              </div>
              <div class="col-md-4">
                <label for="current_stop_price_pnl_percentage" class="form-label">Current Stop Price PNL</label>
                <input type="text" class="form-control" v-model="operation.current_stop_price_pnl_percentage">
              </div>
              <div class="col-md-6">
                <label for="capital_allocation_percentage" class="form-label">Capital Allocation</label>
                <input type="text" class="form-control" v-model="operation.capital_allocation_percentage">
              </div>
            </div>
            <br>
            <div class="row">
              <div class="col-md-12">
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalOperations" id="sendOperation">
                  Enviar operação
                </button>
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

  <div class="modal fade" id="modalOperations" tabindex="-1" aria-labelledby="modalOperations" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modalOperations">Confirmar operação</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <p>Você tem certeza que deseja enviar essa operação?</p>
          <div>
            <h4 style="margin-bottom: 0;font-weight: 800;">Detalhes da operação:</h4>
            <hr style="margin-top: 2px;">
            <ul style="list-style-type: none">
              <li><strong>Par:</strong> {{ operation.pair }}</li>
              <li><strong>Analista:</strong> {{ tradingAnalysts[operation.trading_analyst_id-1]?.name }}</li>
              <li><strong>Operação:</strong> {{ operation.type }}</li>
              <li><strong>Objetivo:</strong> {{ operation.target_price }}%</li>
              <li><strong>Objetivo PNL (%):</strong> {{ operation.target_price_pnl_percentage }}%</li>
              <li><strong>Stop Price:</strong> {{ operation.stop_price }}</li>
              <li><strong>Stop Price PNL (%):</strong> {{ operation.stop_price_pnl_percentage }}%</li>
              <li><strong>Preço Entrada:</strong> {{ operation.entry_price }}</li>
              <li><strong>Preço Entrada PNL (%):</strong> {{ operation.entry_price_pnl_percentage }}%</li>
              <li><strong>Stop Price Atual:</strong> {{ operation.current_stop_price }}</li>
              <li><strong>Stop Price Atual PNL (%):</strong> {{ operation.current_stop_price_pnl_percentage }}%</li>
              <li><strong>Capital de alocação (%):</strong> {{ operation.capital_allocation_percentage }}%</li>
            </ul>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
          <button type="button" class="btn btn-primary" v-on:click="createOperation" data-bs-dismiss="modal">Sim, enviar operação</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import fetch from './../../services/burry.service';

export default {
  name: 'AdministratorPage',
  data() {
    return {
      tradingAnalyst: {
        name,
        created: false,
      },
      tradingAnalysts: [],
      operation: {
        user_id: null,
        pair: null,
        trading_analyst_id: null,
        operation: null,
        target_price: null,
        target_price_pnl_percentage: null,
        stop_price: null,
        stop_price_pnl_percentage: null,
        entry_price: null,
        entry_price_pnl_percentage: null,
        current_stop_price: null,
        current_stop_price_pnl_percentage: null,
        capital_allocation_percentage: null,
      }
    }
  },
  mounted() {
    this.loadTradingAnalysts();
  },
  methods: {
    loadTradingAnalysts() {
      fetch.get('/api/v1/trading-analyst')
      .then((res) => {
        this.tradingAnalysts = res.data.data;
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

      fetch.post('/api/v1/trading-analyst', dataAnalyst)
      .then((res) => {
        if (res.data.statusCode === 200) {
          this.tradingAnalyst.created = true;
        }
        
        this.loadTradingAnalysts();
      }).catch((err) => {
        console.log(err);
      });
    },

    createOperation() {
      const { id } = JSON.parse(localStorage.getItem('userData'));
      this.operation.user_id = id;

      console.log(this.operation);
    }
  }
}
</script>

<style>
</style>
