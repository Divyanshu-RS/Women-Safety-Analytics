<?php
//File Index.php
include "connect.php";
?>
<!DOCTYPE html>
<html lang="en">

<head>
  <title>Huna Tehnik - Service Ac, kulkas, dan lainnya</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="css/font-awesome.min.css">
  <link rel="stylesheet" href="css/bootstrap.min.css">
  <link rel="stylesheet" href="css/style.css">
</head>

<body class="bg-light">

  <!-- NAVBAR START -->
  <nav class="navbar navbar-light fixed-top">
    <div class="container-lg">
      <a class="navbar-brand fw-bold fs-4" href="#">
        <img src="img/logo/profile-mini-huna.webp" class="rounded-circle mw-100" alt="profile img"> <b class="huda">Huna
          Tehnik</b>
      </a>
      <div class="dropdown">
        <button class="btn btn-primary px-3" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          <i class="fas fa-bars"></i>
        </button>
        <ul class="dropdown-menu dropdown-menu-end">
          <li><a class="dropdown-item" href="?page">Home</a></li>
          <li><a class="dropdown-item" href="?page=about">About</a></li>
          <li><a class="dropdown-item" href="?page=services">Services</a></li>
          <li><a class="dropdown-item" href="?page=gallery">Gallery</a></li>
          <li><a class="dropdown-item" href="?page=testimonials">Testimonials</a></li>
          <li><a class="dropdown-item" href="?page=contact">Contact</a></li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- NAVBAR END -->
  <?php
  $page = @$_GET['page'];
  if ($page == "about") {
    include "page/about.php";
  } elseif ($page == "services") {
    include "page/services.php";
  } elseif ($page == "gallery") {
    include "page/gallery.php";
  } elseif ($page == "testimonials") {
    include "page/testimonials.php";
  } elseif ($page == "contact") {
    include "page/contact.php";
  } else {
    include "page/home.php";
  }
  ?>


  <!-- FOOTER START -->
  <footer class="footer border-top py-4">
    <div class="container-lg">
      <div class="row">
        <div class="col-lg-12">
          <p class="m-0 text-center text-muted">&copy; 2022 Huda Tehnik</p>
        </div>
      </div>
    </div>
  </footer>
  <!-- FOOTER END -->


  <script src=" js/bootstrap.bundle.min.js"> </script>
  <script>
    var nav = document.querySelector("nav");
    var huda = document.querySelector("b");

    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 20) {
        nav.classList.add('bg-light', 'shadow');
        huda.classList.remove('huda');
      } else {
        nav.classList.remove('bg-light', 'shadow');
        huda.classList.add('huda');
      }
    });
  </script>
</body>

</html>