<template>
    <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <h1 class="text-center">Relatório Semanal</h1>
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
