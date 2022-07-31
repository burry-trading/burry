<template>
    <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Burry Trading</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
                <a class="nav-link" href="/dashboard">Dashboard</a>
            </li>
            <li class="nav-item">
                <a class="nav-link " href="/settings">Configurações</a>
            </li>
            <li class="nav-item">
                <a class="nav-link " href="/weekly_report">Relatório Semanal</a>
            </li>
        </ul>
        <span class="navbar-text">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a style="color:#0000008C" class="nav-link " href="/admin">Administração</a>
                </li>
                <li class="nav-item">
                    <a style="color:#0000008C" class="nav-link " href="#" id="linkLogout">Sair</a>
                </li>
            </ul>
        </span>
      </div>
    </div>
  </nav>
</template>

<script>

export default {
  name: 'NavbarComponent',
}
</script>

<style>
</style>
