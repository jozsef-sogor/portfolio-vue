<template>
  <v-app dark>
    <v-main>
      <v-container>
        <vue-page-transition :name="$vuetify.breakpoint.width > 600 ? 'overlay-left-full' : 'overlay-up-full'">
          <router-view></router-view>
        </vue-page-transition>
      </v-container>
    </v-main>
    <ParallaxFooter></ParallaxFooter>
    <BottomNavigation></BottomNavigation>
  </v-app>
</template>

<script>
import BottomNavigation from "./components/Navigation";
import ParallaxFooter from "@/components/ParallaxFooter";
export default {
  name: "App",

  components: {
    BottomNavigation,
    ParallaxFooter,
  },

  data: () => ({
    //
  }),
  mounted() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  methods: {
    handleResize: function () {
      let screenSize = window.innerWidth;
      let mobile = screenSize <= 600 ? true : false;
      this.$store.dispatch("setIsMobile", mobile);
    },
  },
  /*created() {
    fetch('http://jozsef-sogor.com/portfolio/wp-json/wp/v2/tech')
    .then((response) => {
      return response.json()
    })
    .then((data)=> this.$store.dispatch('setTech', data))
    .catch((error) => console.log(error))
  }*/
};
</script>

<style lang="scss" scoped>
main {
  padding-bottom: 0 !important;
  margin-bottom: 325px;
  z-index: 1;
}
@media only screen and (min-width: 600px) {
  main {
    width: calc(100vw - 64px);
    margin-left: 64px;
    padding: 0 !important;
    margin-bottom: 250px;
  }
}
</style>
