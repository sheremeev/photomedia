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
        'https://placekitten.com/802/800',
        'https://placekitten.com/803/800',
        'https://placekitten.com/804/800',
        'https://placekitten.com/805/800',
        'https://placekitten.com/806/800',
        'https://placekitten.com/807/800',
        'https://placekitten.com/808/800',
        'https://placekitten.com/809/800',
        'https://placekitten.com/810/800'
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
</style>