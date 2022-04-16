<template>
    <router-view/>
  <html class="no-js" lang="zxx">
    <head>
      <meta charset="utf-8">
      <meta http-equiv="x-ua-compatible" content="ie=edge">
      <title>Photomedia</title>
      <meta name="description" content="">
      <meta name="viewport" content="width=device-width, initial-scale=1">

      <!-- <link rel="manifest" href="site.webmanifest"> -->
      <link rel="shortcut icon" type="image/x-icon" href="img/favicon.png">
      <!-- Place favicon.ico in the root directory -->
    </head>
    <body>
      <Header/>
      <Body/>
      <Footer/>
    </body>
  </html>

</template>

<script>
import '@/js/vendor/modernizr-3.5.0.min.js';
import '@/js/vendor/jquery-1.12.4.min.js';
import '@/js/popper.min.js';
//import '@/js/bootstrap.min.js';
//import 'owl.carousel/dist/owl.carousel.min';
//import '@/js/owl.carousel.min.js';
//import '@/js/isotope.pkgd.min.js';
//import '@/js/ajax-form.js';
// import '@/js/waypoints.min.js';
// import '@/js/jquery.counterup.min.js';
// import '@/js/imagesloaded.pkgd.min.js';
// import '@/js/scrollIt.js';
// import '@/js/jquery.scrollUp.min.js';
// import '@/js/wow.min.js';
// import '@/js/nice-select.min.js';
// import '@/js/jquery.slicknav.min.js';
// import '@/js/jquery.magnific-popup.min.js';
// import '@/js/plugins.js';
// import '@/js/contact.js';
// import '@/js/jquery.ajaxchimp.min.js';
// import '@/js/jquery.form.js';
// import '@/js/jquery.validate.min.js';
// import '@/js/mail-script.js';

//import '@/js/main.js';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Body from "@/components/Body";
  export default {
    name: 'app',
    components: {
      Header,
      Body,
      Footer
    }
  }
</script>


<style lang="scss">
  @import "css/bootstrap.min.css";
  @import "css/owl.carousel.min.css";
  @import "css/magnific-popup.css";
  @import "css/font-awesome.min.css";
  @import "css/themify-icons.css";
  @import "css/nice-select.css";
  @import "css/flaticon.css";
  @import "css/animate.css";
  @import "css/slicknav.css";
  @import "css/style.css";

  //@import "~bootstrap/dist/css/bootstrap.min.css";
  //@import "~owl.carousel/dist/assets/owl.carousel.min.css";
  //@import "~magnific-popup/dist/magnific-popup.css";
  //@import "~font-awesome/css/font-awesome.min.css";
  //@import "~@icon/themify-icons/themify-icons.css";
  //@import "~jquery-nice-select/css/nice-select.css";
  //@import "css/flaticon.css";
  //@import "~animate.css";
  //@import "css/slicknav.css";
  //@import "css/style.css";
</style>
