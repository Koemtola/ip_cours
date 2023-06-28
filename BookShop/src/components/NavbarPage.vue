<script setup >
import { RouterLink, RouterView } from 'vue-router'
// import FooterView from './components/FooterPage.vue'
</script>
<template>
  <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" /> -->
  <nav class="navbar navbar-expand-lg " data-bs-theme="dark" style="background-color: rgb(28, 28, 28);">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <RouterLink to="/logo">
          <img src="../components/icons/logoBookshop.png" alt="Imagessfsfs" width="80"
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
            <router-link to="/Home" class="nav-link text-white">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/About" class="nav-link text-white">About</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/Contact" class="nav-link text-white">Contact</router-link>
          </li>
          <!-- <li class="nav-item">
            <router-link to="/register" class="nav-link text-white">register</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/login" class="nav-link text-white">login</router-link>
          </li> -->
          <!-- <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                    </li> -->
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">
              Category
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#"><router-link to="/Book1">Book for kid</router-link></a></li>
              <li><a class="dropdown-item" href="#"><router-link to="/Book2">Book drama</router-link></a></li>
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
        <!-- <div class="text-white">
          <a class="navbar-brand" href="#">
            <RouterLink to="/logo">
              <img src="../components/icons/logoBookshop.png" alt="Imagessfsfs" width="80"
                class="d-inline-block align-text-top" />
            </RouterLink>
          </a>
        </div> -->
        <div>
          <router-link to="/register" class="nav-link text-white  p-2 mt-2  mb-2" style="border-radius: 5px;  ">SignUp</router-link>
        </div>
        <div>
          <router-link to="/login" class="nav-link text-white  ">SigIn</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>
<style>
.nav-item {
  transition: all 0.2s ease;
  cursor: pointer;
}

.nav-item:hover {
  background: rgb(255, 98, 0);
  color: rgb(161, 71, 7);
}
</style>
