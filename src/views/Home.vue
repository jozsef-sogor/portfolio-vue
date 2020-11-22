<template>
  <article class="home">
    <vue-particles
      class="particles-layout"
      color="#dedede"
      :particleOpacity="0.7"
      :particlesNumber="45"
      shapeType="circle"
      :particleSize="4"
      linesColor="#dedede"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="1"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="repulse"
    >
    </vue-particles>

    <v-card class="mx-auto flex-shrink-1 homeCard" max-width="350" v-if="about">
      <v-img class="white--text align-end" height="200px" :src="about.acf.home_img.url"> </v-img>

      <v-card-title class="justify-center">{{ returnVisitor ? "Welcome back! &#128521;" : "Hi!" }}</v-card-title>

      <v-card-text class="text--primary">
        <div v-html="about.acf.home_text"></div>
      </v-card-text>

      <v-card-actions>
        <button @click="$router.push('/projects')" class="mainBtn mainDark">Take a look!</button>
      </v-card-actions>
    </v-card>
  </article>
</template>

<script>
export default {
  data() {
    return {
      returnVisitor: this.$cookie.get("visitedBefore"),
    };
  },
  created() {
    this.$store.dispatch("getAbout");
    this.setCookie();
  },
  computed: {
    about: function () {
      return this.$store.getters.getAbout;
    },
  },
  methods: {
    setCookie: function () {
      if (!this.returnVisitor) {
        this.$cookie.set("visitedBefore", true, 7);
      }
    },
  },
};
</script>

<style lang="scss">
.home {
  width: 100%;
  height: 100vh;
  .particles-layout {
    width: 100%;
    height: 100%;
  }
  p {
    color: $backgroundColor;
  }
}
.homeCard {
  color: $backgroundColor;
  text-align: center;
  position: absolute !important;
  margin: auto;
  //font-size: 1.5em;
  //padding: 2.5em 1em 1.5em;
  //font-weight: 100;
  background-color: white;
  box-shadow: 0px 0px 25px 5px rgba(222, 222, 222, 1);
  //width: 30vw;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  /*&::before {
        content: '';
        position: absolute;
        height: 100%;
        width: 50%;
        left: 0;
        top: 0;
        background-color: rgba(255,255,255,0.05);
        z-index: 0;
        }*/

  /*img {
        width: auto;
        height: 50%;
        border-radius: 150%;
        //border: 5px solid $navColor;
        padding: 0;
        position: absolute;
        margin: auto;
        left: 0;
        right: 0;
        top: -30%;
        }*/
}
</style>
