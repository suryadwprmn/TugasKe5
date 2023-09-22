<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark text-light">
    <div class="container">
      <a class="navbar-brand" href="#">
        <span class="text-danger">Daftar</span> Tugas</a
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <nuxt-link class="nav-link active" aria-current="page" to="/"
              >Home</nuxt-link
            >
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link active" aria-current="page" to="/latihan"
              >Latihan</nuxt-link
            >
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/latihan2"
              >Form</a
            >
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link active" aria-current="page" to="/artikel">Artikel</nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
