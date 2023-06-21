<template>
    <div>
      <!-- Your page content goes here -->
  
      <footer class="footer bg-light">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <h4>Connect with us:</h4>
              <ul class="list-inline">
                <li class="list-inline-item"><a href="#"><i class="fab fa-facebook"></i></a></li>
                <li class="list-inline-item"><a href="#"><i class="fab fa-twitter"></i></a></li>
                <li class="list-inline-item"><a href="#"><i class="fab fa-instagram"></i></a></li>
              </ul>
            </div>
            <div class="col-md-6">
              <h4>Contact us:</h4>
              <ul class="list-unstyled">
                <li><i class="fas fa-phone"></i> 1-800-555-1234</li>
                <li><i class="fas fa-envelope"></i> info@mywebsite.com</li>
                <li><i class="fas fa-map-marker-alt"></i> 123 Main St, Anywhere, USA</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </template>
  
  <script>
  // Import the necessary Bootstrap CSS and JavaScript files
  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap/dist/js/bootstrap.js'
  
  // Import the Font Awesome icon font library
  import { library } from '@fortawesome/fontawesome-svg-core'
  import { fab } from '@fortawesome/free-brands-svg-icons'
  import { fas } from '@fortawesome/free-solid-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
  
  library.add(fab, fas)
  
  export default {
    components: {
      FontAwesomeIcon
    }
  }
  </script>