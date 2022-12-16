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
      //console.log(this.$route.meta)
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
@import "css/font-awesome.min.css";
@import "css/themify-icons.css";
@import "css/style.css";

</style>

