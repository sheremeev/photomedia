<template>
  <Navigation/>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
  <Footer/>
</template>

<script>
  import Navigation from "@/components/Navigation";
  import Footer from "@/components/Footer";
  export default {
    name: 'app',
    computed: {
      layout() {
        console.log(this.$route.meta)
        return (this.$route.meta.layout || 'main')
      }
    },
    components: {
      Footer,
      Navigation
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
