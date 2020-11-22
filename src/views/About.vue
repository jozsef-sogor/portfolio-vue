<template>
  <v-container class="about">
    <h2>Who I am</h2>
    <div class="textAnimation" v-if="!isMobile">Who I am</div>
    <v-row class="aboutIntro mb-14">
      <v-col cols="8" md="4" class="mx-auto">
        <v-img contain :alt="about.acf.about_img.alt" :src="about.acf.about_img.url"></v-img>
      </v-col>
      <v-col cols="12" md="8">
        <div class="aboutIntro" v-html="about.content"></div>
      </v-col>
    </v-row>

    <h2>My skills</h2>
    <div class="textAnimation" v-if="!isMobile">My skills</div>

    <div class="skillContainer mb-14">
      <Skills v-for="skill of skills" :skill="skill" :key="skill.id"></Skills>
    </div>

    <h2>My background</h2>
    <div class="textAnimation" v-if="!isMobile">My background</div>
    <v-row>
      <v-col cols="12" md="6">
        <Exp title="Experience" :experience="experiences" :img="'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=450&q=80'"></Exp>
      </v-col>
      <v-col cols="12" md="6">
        <Exp title="Education" class="flex-row-reverse" :experience="education" :img="'https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=450&q=80'"></Exp>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Skills from "../components/Services.vue";
import Exp from "../components/Experience.vue";

//const debounce = require('lodash.debounce')
const throttle = require("lodash.throttle");

export default {
  components: {
    Skills,
    Exp,
  },
  data() {
    return {
      storeValues: ["getTech", "getAbout", "getEducation", "getExperience"],
      windowHeight: window.innerHeight,
    };
  },
  computed: {
    skills: function () {
      return this.$store.getters.getTech;
    },
    about: function () {
      return this.$store.getters.getAbout;
    },
    experiences: function () {
      return this.$store.getters.getExperience;
    },
    education: function () {
      return this.$store.getters.getEducation;
    },
    isMobile: function () {
      return this.$store.getters.getIsMobile;
    },
  },
  created() {
    this.storeValues.forEach((value) => this.$store.dispatch(value));
    //this.$store.dispatch("getTech")
  },
  mounted() {
    this.handleDebouncedScroll = throttle(this.handleScroll, 30);
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll: function () {
      //console.log('scroll', document.querySelectorAll(".test"));

      let nodes = document.querySelectorAll(".textAnimation");

      for (let node of nodes) {
        let top = node.getBoundingClientRect().top;
        let ratio = Math.floor(top) - this.windowHeight;

        if (ratio < 0 && ratio > -Math.abs(this.windowHeight)) {
          let percent = (top / this.windowHeight) * 100;
          node.style.left = (100 - Math.floor(percent)) / 2 + "%";
          //console.log(node.style.left);
        }
      }
    },
  },
};
</script>

<style lang="scss">
.textAnimation {
  opacity: 0.5;
  color: $midColor;
  margin-top: -4rem;
  position: absolute;
  left: -10%;
  font-size: 6rem;
  font-weight: bold;
}

h1,
h2,
h3,
h4,
p {
  color: $lightColor;
}

@media only screen and (min-width: 960px) {
  .skill:nth-child(even) {
    flex-direction: row-reverse;
  }
}
</style>
