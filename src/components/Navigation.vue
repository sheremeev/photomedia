<template>
  <!-- header-start -->
  <header>

    <div class="header-area ">
      <div class="header_top">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-xl-4 col-md-4 d-none d-md-block">
              <div class="header_links ">
                <ul>
                  <li><a href="#"> <i class="fa fa-facebook"></i> </a></li>
                  <li><a class="twiter" href="#"> <i class="fa fa-twitter"></i> </a></li>
                  <li><a class="insta" href="#"> <i class="fa fa-instagram"></i> </a></li>
                </ul>
              </div>
            </div>
            <div class="col-xl-4 col-md-4">
              <div class="logo">
                <router-link to="/"><img src="../img/logo.png" alt=""></router-link>
              </div>
            </div>
            <div class="col-xl-4 col-md-4 d-none d-md-block">
              <div class="login_resiter">
                <p><a href="#"><i class="flaticon-user"></i>login</a> | <a href="#">Resister</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="sticky-header" class="main-header-area white-bg">
        <div class="container">
          <div class="row align-items-center">
            <div class="main-menu d-none d-lg-block">
              <nav>
                <ul id="navigation">
                  <li v-for="link in links" :key="link.url">
                    <router-link
                        active-class="active"
                        :to="link.url"
                        tag="a"
                    >{{ link.title }}</router-link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div class="main-menu mobile d-block d-lg-none">
          <Slide :closeOnNavigation="true">
            <nav>
              <ul id="navigation-mobile">
                <li v-for="link in links" :key="link.url">
                  <router-link
                      active-class="active"
                      :to="link.url"
                      tag="a"
                  >{{ link.title }}</router-link>
                </li>
              </ul>
            </nav>
          </Slide>
        </div>
      </div>
    </div>
  </header>
  <!-- header-end -->
</template>

<script>
import { Slide } from 'vue3-burger-menu'
export default {
  name: "Navigation",
  components: {
    Slide // Register your component
  },
  data: () => ({
    links: [
      {title: 'Home', url: '/'},
      {title: 'Category', url: '/category'},
      {title: 'About', url: '/about'},
      {title: 'Elements', url: '/elements'},
    ]
  })
}
</script>

<style scoped>

</style>