<template>
  <!-- footer_start -->
  <footer class="footer">
    <div class="footer_area">
      <div class="container">
        <div class="row">
          <div class="col-xl-12">
            <div class="footer_info text-center">
              <div class="footer_logo text-center">
                <a href="#">
                  <img src="../img/logo.png" alt="">
                </a>
              </div>
              <p class="footer_text">
                Explore photo media blog to enrich your photography knowledge
              </p>
              <div class="header_links">
                <ul>
                  <li><a href="#"> <i class="fa fa-facebook"></i> </a></li>
                  <li><a class="twiter" href="#"> <i class="fa fa-twitter"></i> </a></li>
                  <li><a class="insta" href="#"> <i class="fa fa-instagram"></i> </a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer_bottom ">
      <div class="container">
        <div class="footer_border"></div>
      </div>
      <div class="copyright_text text-center">
        <p><!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
          &copy;2021 - {{new Date().getFullYear()}} <i class="fa fa-heart-o" aria-hidden="true"></i>  Powered by <a href="https://vk.com/sheremeev" target="_blank">sheremeev</a>
          <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> </p>
      </div>
    </div>
  </footer>
  <!-- footer_end -->
</template>

<script>
export default {
  name: "Footer",
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