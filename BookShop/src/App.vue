
<script setup >
import { RouterLink, RouterView } from 'vue-router'

</script>
<template>
  <nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <RouterLink to="/logo">
          <img src="./components/icons/logoBookshop.png" alt="Imagessfsfs" width="80"
            class="d-inline-block align-text-top" />
        </RouterLink>
      </a>
      <button class="navbar-toggler text-white" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active text-white" aria-current="page" href="#"><router-link
                to="/menuHoem">Home</router-link>
            </a>

          </li>
          <!-- <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                    </li> -->
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">
              Category
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#"><router-link to="/Book1">Book 1</router-link></a></li>
              <li><a class="dropdown-item" href="#"><router-link to="/Book2">Book 2</router-link></a></li>
              <li>
                <hr class="dropdown-divider">
              </li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <!-- <li class="nav-item">
                        <a class="nav-link disabled">Disabled</a>
                    </li> -->
        </ul>
        <form class="d-flex " role="search">
          <input class="form-control me-2 " type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-light " type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
  <RouterView />

  <div>
    <!-- Your page content goes here -->
    <footer class="footer bg-light">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <h4>Connect with us:</h4>
            <ul class="list-inline">
              <li class="list-inline-item"><a href="#"><i class="bi bi-facebook"></i></a></li>
              <li class="list-inline-item"><a href="#"><i class="bi bi-twitter"></i></a></li>
              <li class="list-inline-item"><a href="#"><i class="bi bi-instagram"></i></a></li>
            </ul>
          </div>
          <div class="col-md-6">
            <h4>Contact us:</h4>
            <ul class="list-unstyled">
              <li><i class="bi bi-telephone"></i> 1-800-555-1234</li>
              <li><i class="bi bi-envelope"></i> info@mywebsite.com</li>
              <li><i class="bi bi-geo-alt"></i> 123 Main St, Anywhere, USA</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
