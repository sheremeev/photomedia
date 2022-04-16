<template>
  <PhotographySliderArea/>
  <MostRecentBlog/>
  <PhotoGallery/>
  <SubscribeNewLetter/>
  <InstagremMediaArea/>
</template>

<script>
import MostRecentBlog from "@/components/MostRecentBlog";
import PhotoGallery from "@/components/PhotoGallery";
import SubscribeNewLetter from "@/components/SubscribeNewLetter";
import InstagremMediaArea from "@/components/InstagremMediaArea";
import PhotographySliderArea from "@/components/PhotographySliderArea";
export default {
  name: "Category",
  components: {
    PhotographySliderArea,
    InstagremMediaArea,
    SubscribeNewLetter,
    PhotoGallery,
    MostRecentBlog
  }
}
</script>

<style scoped>

</style>