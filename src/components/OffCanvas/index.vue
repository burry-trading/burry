<template>
	<div>
	<button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">Criar operação</button>
  <div
    class="offcanvas offcanvas-end"
    data-bs-scroll="true"
    data-bs-backdrop="false"
    tabindex="-1"
    id="offcanvasScrolling"
    aria-labelledby="offcanvasScrollingLabel"
  >
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasScrollingLabel">
        Criar uma operação
      </h5>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body">
      <div class="row">
        <div class="col-md-6">
          <label for="objective" class="form-label">Par</label>
          <select
            v-model="operation.pair"
            class="form-select"
            aria-label="type"
          >
            <option selected value="0">Escolha um par</option>
            <option v-for="(pair, index) in pairs" :key="index" :value="pair">
              {{ pair }}
            </option>
          </select>
        </div>
        <div class="col-md-6">
          <label for="trading_analyst_id" class="form-label">Analista</label>
          <select
            v-model="operation.trading_analyst_id"
            class="form-select"
            aria-label="analyst"
          >
            <option selected>Escolha um analista</option>
            <option
              v-for="trading in tradingAnalysts"
              :key="trading.id"
              :value="trading.id"
            >
              {{ trading.name }}
            </option>
          </select>
        </div>
      </div>
      <div class="row" style="margin-top: 10px">
        <div class="col-md-4">
          <label for="type" class="form-label">Operação</label>
          <select
            v-model="operation.type"
            class="form-select"
            aria-label="type"
          >
            <option selected>Escolha tipo da operação</option>
            <option value="BUY">Compra</option>
            <option value="SELL">Venda</option>
          </select>
        </div>
        <div class="col-md-4">
          <label for="target_price" class="form-label">Objetivo</label>
          <div class="input-group mb-3">
            <money3
              class="form-control"
              v-model.number="operation.target_price"
              v-bind="money"
            ></money3>
          </div>
        </div>
        <div class="col-md-4">
          <label for="price" class="form-label">Objetivo PNL</label>
          <input
            type="text"
            class="form-control"
            v-model="operation.target_price_pnl_percentage"
          />
        </div>
      </div>
      <br />
      <div class="row" style="margin-top: 10px">
        <div class="col-md-6">
          <label for="stop_price" class="form-label">Stop Price</label>
          <money3
            class="form-control"
            v-model.number="operation.stop_price"
            v-bind="money"
          ></money3>
        </div>
        <div class="col-md-6">
          <label for="stop_price_pnl_percentage" class="form-label"
            >Stop Price PNL</label
          >
          <input
            type="text"
            class="form-control"
            v-model="operation.stop_price_pnl_percentage"
          />
        </div>
      </div>
      <div class="row" style="margin-top: 10px">
        <div class="col-md-6">
          <label for="entry_price" class="form-label">Preço entrada</label>
          <money3
            class="form-control"
            v-model.number="operation.entry_price"
            v-bind="money"
          ></money3>
        </div>
        <div class="col-md-6">
          <label for="entry_price_pnl_percentage" class="form-label"
            >Preço entrada PNL</label
          >
          <input
            type="text"
            class="form-control"
            v-model="operation.entry_price_pnl_percentage"
          />
        </div>
      </div>
      <br />
      <div class="row" style="margin-top: 10px">
        <div class="col-md-6">
          <label for="current_stop_price" class="form-label"
            >Current Stop Price</label
          >
          <money3
            class="form-control"
            v-model.number="operation.current_stop_price"
            v-bind="money"
            disabled
          ></money3>
        </div>
        <div class="col-md-6">
          <label for="current_stop_price_pnl_percentage" class="form-label"
            >Current Stop Price PNL</label
          >
          <input
            type="text"
            class="form-control"
            v-model="operation.current_stop_price_pnl_percentage"
            disabled
          />
        </div>
      </div>
      <div class="row" style="margin-top: 10px">
        <div class="col-md-12">
          <label for="capital_allocation_percentage" class="form-label"
            >Capital Allocation</label
          >
          <input
            type="text"
            class="form-control"
            v-model="operation.capital_allocation_percentage"
          />
        </div>
      </div>
      <br />
      <div class="row">
        <div class="col-md-12">
          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#modalOperations"
            id="sendOperation"
          >
            Enviar operação
          </button>
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
  </div>
</template>

<script>
import fetchInternalAPI from './../../services/burry.service';
import fetchCoreAPI from './../../services/core.service';
import { Money3Component } from 'v-money3'

export default {
  name: "OffCanvas",
	components: { money3: Money3Component },
	props: {
    pairs: Array,
		tradingAnalysts: Array,
  },
	watch: {
    'operation.pair': {
      deep: true,
      handler: function(newValue, oldValue) {
        if(oldValue != newValue) {
          if (newValue == "0") return;

          return this.getPricePair(newValue);
        }
      }
    },
    'operation.target_price_pnl_percentage': {
      deep: true,
      handler: function(newValue, oldValue) {
        if(oldValue != newValue) {
          if (newValue == "0") return;

          return this.operation.target_price = ((newValue * this.operation.entry_price) / 100) + this.operation.entry_price;
        }
      }
    },
    'operation.stop_price_pnl_percentage': {
      deep: true,
      handler: function(newValue, oldValue) {
        if(oldValue != newValue) {
          if (newValue == "0") return;

          this.operation.current_stop_price_pnl_percentage = newValue;
          this.operation.current_stop_price = this.operation.entry_price - ((newValue * this.operation.entry_price) / 100);
          return this.operation.stop_price = this.operation.entry_price - ((newValue * this.operation.entry_price) / 100);
        }
      }
    },
  },
  data() {
    return {
			money: {
        decimal: '.',
        thousands: '',
        prefix: '',
        suffix: '',
        precision: 8,
        masked: false
      },
      operation: {
        user_id: null,
        pair: null,
        trading_analyst_id: null,
        target_price: 0,
        target_price_pnl_percentage: null,
        stop_price: 0,
        stop_price_pnl_percentage: null,
        entry_price: 0,
        entry_price_pnl_percentage: 0,
        current_stop_price: 0,
        current_stop_price_pnl_percentage: null,
        capital_allocation_percentage: null,
      }
    };
  },
	methods: {
		getPricePair(symbol) {
      fetchCoreAPI.get(`/lastPrice?market=${symbol}`)
      .then((res) => {
        this.operation.entry_price = Number(res.data.data.price);
      }).catch((err) => {
        console.log(err);
      });
    },
		fetchOperations(dataOperation) {
      fetchInternalAPI.post('/api/v1/operations', dataOperation)
      .then((res) => {
        if (res.data.statusCode === 200) {
          this.tradingAnalyst.created = true;
        }
      }).catch((err) => {
        console.log(err);
      });
    },
		createOperation() {
			let operationClone = structuredClone(this.operation);
      const { id } = JSON.parse(localStorage.getItem('userData'));
			
      operationClone.user_id = id;
			operationClone.current_stop_price = this.precisionNumbers(String(operationClone.current_stop_price));
			operationClone.target_price = this.precisionNumbers(String(operationClone.target_price));
			operationClone.stop_price = this.precisionNumbers(String(operationClone.stop_price));
			operationClone.entry_price = this.precisionNumbers(String(operationClone.entry_price));
			operationClone.current_stop_price_pnl_percentage = String(operationClone.current_stop_price_pnl_percentage * 100);
			operationClone.capital_allocation_percentage = String(operationClone.capital_allocation_percentage * 100);
			operationClone.target_price_pnl_percentage = String(operationClone.target_price_pnl_percentage * 100);
			operationClone.stop_price_pnl_percentage = String(operationClone.stop_price_pnl_percentage * 100);
			operationClone.entry_price_pnl_percentage = String(operationClone.entry_price_pnl_percentage * 100);

			this.fetchOperations(operationClone);
    },
		precisionNumbers(value) {
			const valueSplitted = value.split('.');
			
			return Number(valueSplitted[0] + '.' + valueSplitted[1].padEnd(8, "0"));
		}
	}
};
</script>

<style>
</style>