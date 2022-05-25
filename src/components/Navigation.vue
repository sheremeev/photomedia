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
                    <router-link v-if="!link.submenu"
                        active-class="active"
                        :to="link.url"
                        tag="a"
                    >{{ link.title }}</router-link>
                    <template v-else>
                      <a href="#">{{ link.title }}<i class="ti-angle-down"></i></a>
                      <ul class="submenu">
                        <li v-for="sublink in link.submenu" :key="link.submenu.url">
                          <router-link :to="sublink.url"
                                       tag="a"
                          >{{ sublink.title}}</router-link>
                        </li>
                      </ul>
                    </template>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div class="main-menu mobile d-block d-lg-none">
          <Slide ref="mobileSlideMenu" :crossIcon="false" :closeOnNavigation="false">
            <nav>
              <ul id="navigation-mobile">
                <li v-for="link in links" :key="link.url">
                  <router-link v-if="!link.submenu"
                               active-class="active"
                               :to="link.url"
                               tag="a"
                               v-on:click="onClickMobileMenu"
                  >{{ link.title }}</router-link>
                  <template v-else>
                    <div class="v-collapse">
                      <div class="v-collapse-header">
                        <a href="#" v-on:click="onChangeStateMenu(link)">{{ link.title }}<i class="ti-angle-down"></i></a>
                      </div>
                      <transition name="fadeHeight" appear>
                        <ul class="submenu-mobile" v-if="!link.collapse">
                          <li v-for="submenu in link.submenu" :key="submenu.url">
                            <router-link :to="submenu.url"
                                         tag="a"
                                         v-on:click="onClickMobileMenu"
                            >{{ submenu.title }}</router-link>
                          </li>
                        </ul>
                      </transition>
                    </div>
                  </template>
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
    Slide
  },
  methods: {
    onChangeStateMenu (link) {
      link.collapse = !link.collapse;
    },
    onClickMobileMenu () {
      document.dispatchEvent(new KeyboardEvent('keyup', {
        'key': 'Escape'
      }));
    }
  },
  data: () => ({
    links: [
      {title: 'Home', url: '/'},
      {title: 'Portfolio', url: '#', collapse: false, submenu: [{
          title: 'Elements', url: '/elements'
        }, {
          title: 'Category', url: '/category'
        }]
      },
      {title: 'Category', url: '/category'},
      {title: 'About', url: '/about'},
      {title: 'Elements', url: '/elements'},
      {title: 'Images', url: '/images'},
    ]
  })
}
</script>

<style scoped>

.fadeHeight-enter-active {
  opacity: 0;
  max-height: 0;
  transition: all .3s;
}

.fadeHeight-leave-active {
  transition: all .3s;
  max-height: 230px;
}
.fadeHeight-enter,
.fadeHeight-leave-to
{
  opacity: 0;
  max-height: 0px;
}

.fadeHeight-enter-to,
.fadeHeight-leave {
  max-height: 230px;
  opacity: 1;
}

</style>