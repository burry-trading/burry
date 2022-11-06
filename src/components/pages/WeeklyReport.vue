<template>
    <div class="container-fluid">
      <div class="row" style="padding-top: 1%; padding-bottom: 1%">
        <h1 style="font-weight: 700">Relatório mensal</h1>
      </div>
        <div class="row">
          <div class="col-sm-12">
            <button style="margin-right: 8px;" class="btn btn-primary btn-sm">Janeiro</button>
            <button style="margin-right: 8px;" class="btn btn-primary btn-sm">Fevereiro</button>
            <button style="margin-right: 8px;" class="btn btn-primary btn-sm">Março</button>
            <button style="margin-right: 8px;" class="btn btn-primary btn-sm">Abril</button>
            <button style="margin-right: 8px;" class="btn btn-primary btn-sm">Junho</button>
            <button style="margin-right: 8px;" class="btn btn-primary btn-sm">Julho</button>
            <button style="margin-right: 8px;" class="btn btn-primary btn-sm">Agosto</button>
            <button style="margin-right: 8px;" class="btn btn-primary btn-sm">Setembro</button>
            <button style="margin-right: 8px;" class="btn btn-primary btn-sm">Outubro</button>
            <button style="margin-right: 8px;" class="btn btn-primary btn-sm">Novembro</button>
            <button style="margin-right: 8px;" class="btn btn-primary btn-sm">Dezembro</button>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'WeeklyReportPage',
  data: () => {
    return {
      error: {
        status: false,
        message: '',
      },
      auth: {
        email: undefined,
        password: undefined
      }
    }
  },
  methods: {
  }
}
</script>

<style>
</style>
