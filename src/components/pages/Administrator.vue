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
                <input type="text" class="form-control" id="pair" placeholder="BTCUSDT">
              </div>
              <div class="col-md-4">
                <label for="analyst" class="form-label">Analista</label>
                <select id="analyst" class="form-select" aria-label="analyst">
                  <option selected>Escolha um analista</option>
                  <option v-for="trading in tradingAnalysts" :key="trading.id" :value="trading.id">{{ trading.name }}</option>
                </select>
              </div>
              <div class="col-md-3">
                <label for="operation" class="form-label">Tipo da operação</label>
                <select id="operation" class="form-select" aria-label="operation">
                  <option selected>Escolha tipo da operação</option>
                  <option value="BUY">Compra</option>
                  <option value="SELL">Venda</option>
                </select>
              </div>
              <div class="col-md-2">
                <label for="target" class="form-label">Objetivo</label>
                <div class="input-group mb-3">
                  <input type="text" class="form-control" id="target" aria-describedby="basic-addon2">
                  <span class="input-group-text" id="basic-addon2">%</span>
                </div>
              </div>
            </div>
            <br>
            <div class="row">
              <div class="col-md-4">
                <label for="price" class="form-label">Preço Atual</label>
                <input type="text" class="form-control" id="price">
              </div>
              <div class="col-md-4">
                <label for="stop_loss" class="form-label">Stop Loss</label>
                <input type="text" class="form-control" id="stop_loss">
              </div>
              <div class="col-md-4">
                <label for="price_entry" class="form-label">Preço entrada</label>
                <input type="text" class="form-control" id="price_entry">
              </div>
            </div>
            <br>
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
            <div id="alertAnalyst" class="alert alert-info" role="alert">
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
                      <td><button type="button" class="btn btn-dark">Editar</button></td>
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
              <input type="text" class="form-control" id="nameAnalyst">
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
          <button type="button" class="btn btn-primary" id="btnCreateAnalyst" data-bs-dismiss="modal">Criar</button>
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
              <li><strong>Par:</strong> <span id="confirmPair"></span></li>
              <li><strong>Analista:</strong> <span id="confirmAnalyst"></span></li>
              <li><strong>Objetivo:</strong> <span id="confirmTarget"></span></li>
              <li><strong>Operação:</strong> <span id="confirmOperation"></span></li>
              <li><strong>Stop Loss:</strong> <span id="confirmStopLoss"></span></li>
              <li><strong>Preço Atual:</strong> <span id="confirmPrice"></span></li>
              <li><strong>Preço Entrada:</strong> <span id="confirmEntry"></span></li>
            </ul>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
          <button type="button" class="btn btn-primary" id="btnCreateOperation" data-bs-dismiss="modal">Sim, enviar operação</button>
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
      tradingAnalysts: [],
    }
  },
  mounted() {
    fetch.get('/api/v1/trading-analyst')
      .then((res) => {
        this.tradingAnalysts = res.data.data;
      }).catch((err) => {
        console.log(err);
      });
  },
  methods: {}
}
</script>

<style>
</style>
