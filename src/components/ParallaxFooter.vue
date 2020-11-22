<template>
  <v-footer dark padless fixed v-if="about">
    <v-card class="flex" flat tile>
      <v-card-title>
        <v-row>
          <v-col cols="12" sm="4" class="text-center text-sm-left align-center">
            <strong class="subheading">Get in touch!</strong>
          </v-col>
          <v-spacer></v-spacer>
          <v-col cols="12" sm="8" class="d-flex justify-center justify-sm-end">
            <v-tooltip bottom v-for="info in about.acf.contact" :key="info.id">
              <template v-slot:activator="{ on, attrs }">
                <v-hover v-slot="{ hover }">
                  <a
                    :href="info.link"
                    target="_blank"
                    class="mx-4 d-flex flex-column transition-swing pa-2 footerContact"
                    v-ripple
                    v-bind="attrs"
                    v-on="on"
                    :class="`elevation-${hover ? 10 : 0}`"
                  >
                    <v-icon size="36px">
                      {{ info.icon }}
                    </v-icon>
                    {{ info.text }}
                  </a>
                </v-hover>
              </template>
              <span>{{ info.tooltip }}</span>
            </v-tooltip>
          </v-col>
        </v-row>
      </v-card-title>
      <v-spacer></v-spacer>
      <v-card-text class="text-center">
        <a :href="about.acf.cv" download target="_blank">
          <button class="mainBtn mainLight">Download my CV</button>
        </a>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>Sógor József Máté</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("getAbout");
  },
  computed: {
    about: function () {
      return this.$store.getters.getAbout;
    },
  },
};
</script>

<style lang="scss" scoped>
.v-footer {
  position: fixed !important;
  right: 0 !important;
  left: unset !important;
  z-index: 0;
  height: 325px;
  width: 100%;
  .v-card {
    background: $midColor;
  }
  a {
    color: $lightColor;
  }
  .footerContact {
    font-size: 0.7rem;
  }
}
@media only screen and (min-width: 600px) {
  .v-footer {
    width: calc(100% - 64px);
    height: 250px;
    //right: 0 !important;
  }
}
</style>
