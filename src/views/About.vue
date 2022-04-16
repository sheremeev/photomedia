<template>
  <AboutArea/>
  <ModeratorArea/>
  <SubscribeNewLetter/>
  <InstagremMediaArea/>
</template>

<script>
import AboutArea from "@/components/AboutArea";
import ModeratorArea from "@/components/ModeratorArea";
import SubscribeNewLetter from "@/components/SubscribeNewLetter";
import InstagremMediaArea from "@/components/InstagremMediaArea";
export default {
  name: "About",
  components: {
    InstagremMediaArea,
    SubscribeNewLetter,
    ModeratorArea,
    AboutArea
  }
}
</script>

<style scoped>

</style>