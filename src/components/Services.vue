<template>
  <v-row class="skill">
    <v-col cols="12" md="6">
      <h3 class="text-h4 mb-6 font-weight-bold">{{ skill.title.rendered }}</h3>
      <p v-html="skill.content.rendered"></p>
    </v-col>
    <v-col cols="12" md="6">
      <v-row class="align-center" dense>
        <v-col cols="6" sm="4" md="6" v-for="tech of techs" :key="tech.id" class="iconContainer">
          <img v-if="tech.img_not_icon" :src="tech.img.url" :alt="tech.img.alt" />
          <i v-else :class="tech.icon"></i>
          <p class="iconTitle">{{ tech.name }}</p>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: ["skill"],
  computed: {
    techs: function () {
      return this.skill.acf.tech;
    },
  },
};
</script>

<style lang="scss">
.skill {
  margin: 1rem auto 2rem;
  .text-h3 {
    font-family: $headingFont !important;
  }
  i {
    color: $accentColor;
  }
}
.iconContainer {
  margin: auto;
  justify-content: center;
  text-align: center;
  position: relative;
  z-index: 1;
  padding: 1rem !important;
  background: $backgroundColor;
  &:nth-child(4n + 1),
  &:nth-child(4n + 4) {
    background: $midColor;
  }
  i {
    font-size: 5rem;
  }
  img {
    height: 4.59rem;
    width: auto;
    filter: grayscale(0.8);
  }
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1;
  }
}

@media only screen and (min-width: 600px) and (max-width: 960px) {
  .iconContainer {
    background: $backgroundColor;
    &:nth-child(4n + 1),
    &:nth-child(4n + 4) {
      background: $backgroundColor;
    }
    &:nth-child(even) {
      background: $midColor;
    }
  }
}
</style>
