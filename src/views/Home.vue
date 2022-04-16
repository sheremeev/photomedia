<template>
  <WelcomeProtomedia/>
  <PhotographiArea/>
  <MostRecentBlog/>
  <PhotoGallery/>
  <SubscribeNewLetter/>
  <InstagremMediaArea/>
</template>

<script>
import WelcomeProtomedia from "@/components/WelcomeProtomedia";
import PhotographiArea from "@/components/PhotographiArea";
import MostRecentBlog from "@/components/MostRecentBlog";
import PhotoGallery from "@/components/PhotoGallery";
import SubscribeNewLetter from "@/components/SubscribeNewLetter";
import InstagremMediaArea from "@/components/InstagremMediaArea";
export default {
  name: "Home",
  components: {
    WelcomeProtomedia,
    PhotographiArea,
    MostRecentBlog,
    PhotoGallery,
    SubscribeNewLetter,
    InstagremMediaArea
  }
}
</script>

<style scoped>

</style>