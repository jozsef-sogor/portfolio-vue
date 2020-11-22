<template>
  <v-bottom-navigation
    light
    shift
    app
    class="justify-space-around justify-sm-start"
    v-if="about"
  >
    <v-btn to="/">
      <span>Home</span>

      <v-icon>mdi-home</v-icon>
    </v-btn>

    <v-btn to="/projects">
      <span>Projects</span>

      <v-icon>mdi-cog</v-icon>
    </v-btn>

    <v-btn to="/about">
      <span>About</span>

      <v-icon>mdi-account</v-icon>
    </v-btn>
    <v-spacer v-show="!isMobile"></v-spacer>
    <div v-show="!isMobile">
      <v-tooltip right v-for="info in about.acf.contact" :key="info.id">
        <template v-slot:activator="{ on, attrs }">
          <v-hover v-slot="{ hover }">
            <a
              :href="info.link"
              target="_blank"
              class="d-flex flex-column transition-swing py-3"
              v-ripple
              v-bind="attrs"
              v-on="on"
              :class="`elevation-${hover ? 10 : 0}`"
            >
              <v-icon size="24px">
                {{ info.icon }}
              </v-icon>
            </a>
          </v-hover>
        </template>
        <span>{{ info.tooltip }}</span>
      </v-tooltip>
    </div>
  </v-bottom-navigation>
</template>

<script>
export default {
  computed: {
    about: function () {
      return this.$store.getters.getAbout;
    },
    isMobile: function () {
      return this.$store.getters.getIsMobile;
    },
  },
};
</script>

<style lang="scss" scoped>
.v-btn:not(.v-btn--round).v-size--default {
  height: 100%;
}

@media only screen and (min-width: 600px) {
  .v-bottom-navigation {
    width: 64px !important;
    height: 100% !important;
    transform: none;
    left: 0;
    top: 0;
    flex-direction: column !important;
    //justify-content: flex-start !important;

    .v-btn:not(.v-btn--round).v-size--default {
      height: 64px !important;
    }

    .v-btn:first-child {
      margin-top: 2rem;
    }
  }
}
</style>
