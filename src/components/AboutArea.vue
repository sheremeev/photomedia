<template>
  <!-- about_area_start -->
  <div class="about_area">
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <div class="about_text">
            <h3>Lost Is Just a Four Letter Word</h3>
            <p class="about_text_1">For man shall him gathering image dry gathering which cattle. Said
              second fruit dry Upon cattle sixth lights herb gathered second that night sea his blessed he
              us meat Seed void. Day saw him days itself lights. Give waters multiply earth very brought
              replenish open itself multiply upon cattle she’d rule make doesn’t lights together I let
              heaven which for land saw grass our was unto face brought seed dry moving was, were great.
              Our won’t dry herb set over. Seasons earth upon fill it after. Shall she’d hath so which
              seas to </p>
            <p class="about_text_2">
              For man shall him gathering image dry gathering which cattle. Said second fruit dry Upon
              cattle sixth lights herb gathered second that night sea his blessed he us meat Seed void.
              Day saw him days itself lights. Give waters multiply earth very brought replenish open
              itself multiply upon cattle
            </p>
          </div>
        </div>
        <div class="col-xl-12">
          <div class="about_thumb">
            <carousel :items-to-show="1"
                      wrapAround="true"
                      snapAlign="center">
              <slide v-for="slide in 10" :key="slide">
                <img src="../img/about/banner.png">
              </slide>

              <template #addons>
                <navigation />
                <pagination />
              </template>
            </carousel>
          </div>
        </div>

        <div class="about_details">
          <div class="container">
            <div class="row">
              <div class="col-xl-6">
                <p>For man shall him gathering image dry gathering which cattle. Said second fruit dry
                  Upon cattle sixth lights herb gathered second that night sea his blessed he us meat
                  Seed void. Day saw him days itself lights.</p>
              </div>
              <div class="col-xl-6">
                <p>For man shall him gathering image dry gathering which cattle. Said second fruit dry
                  Upon cattle sixth lights herb gathered second that night sea his blessed he us meat
                  Seed void. Day saw him days itself lights.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- about_area_start -->
</template>

<script>

import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

export default {
  name: 'AoutAreab',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation
  }
};
</script>

<style scoped>

</style>