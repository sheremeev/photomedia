<template>
  <LightGallery :images="images" :index="index" @close="index = null"></LightGallery>


  <div class="container">
    <div class="row photo-container">
        <template v-for="(image, imageIndex) in images">
          <div class="col-lg-4 col-md-6 col-xl-3 photo hover-image-scale">
            <div class="wrap image "
                 :key="imageIndex"
                 @click="index = imageIndex"
                 :style="{ backgroundImage: 'url(' + image + ')' }"
            ></div>
          </div>
        </template>
    </div>
  </div>



</template>

<script>
import LightGallery from "@/components/LightGallery";
export default {
  name: "Images",
  components: {
    LightGallery
  },
  data() {
    return {
      images: [
         require('../img/1/1.jpg'),
         require('../img/1/3.jpg'),
         require('../img/1/3.jpg'),
         require('../img/1/4.jpg'),
         require('../img/1/5.jpg'),
         require('../img/1/6.jpg'),
         require('../img/1/7.jpg'),
         require('../img/1/8.jpg'),
         require('../img/1/9.jpg'),
         require('../img/1/10.jpg'),
         require('../img/1/11.jpg'),
         require('../img/1/12.jpg'),
         require('../img/1/13.jpg')
      ],
      index: null
    }
  }
}
</script>

<style scoped>
  .photo-container {
    padding: 16px;
  }

  .photo {
    padding: 10px;
    cursor: pointer;
    overflow: hidden
  }

  .wrap {
    display: block;
    width: 100%;
    height: 256px;
  }

  .image {
    background-repeat: no-repeat;
    background-size: cover;
  }

  .hover-image-scale {
    display: inline-block;
    overflow: hidden; /* Скрываем всё за контуром */
  }

  .hover-image-scale {
    transition: .6s; /* Время эффекта */
    display: block;
  }
  .hover-image-scale:hover {
    transform: scale(1.02); /* Увеличиваем масштаб */
  }

  .wrap.image {
    border: 2px solid whitesmoke;
    border-radius: 2px;
  }
</style>