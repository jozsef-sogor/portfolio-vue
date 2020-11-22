<template>
  <v-container>
    <v-row justify="space-around">
      <v-card width="500" class="experienceCard">
        <v-img height="200px" :src="img">
          <v-card-title class="white--text mt-16 text-center">
            <h3 class="text-center ml-auto mr-auto">
              {{ title }}
            </h3>
          </v-card-title>
        </v-img>

        <v-card-text>
          <!--<v-timeline align-top :dense="title == 'Experience' ? false : true || $vuetify.breakpoint.xs">-->
          <v-timeline align-top dense>
            <v-timeline-item v-for="(exp, index) in experience" :key="exp.id" color="dark" large class="mb-4">
              <template v-slot:icon v-if="exp.acf.logo">
                <v-avatar>
                  <img :src="exp.acf.logo.url" />
                </v-avatar>
              </template>
              <template v-slot:opposite v-if="exp.content">
                <span v-html="exp.content.rendered"></span>
                <button class="mainBtn mainLight" v-if="index == 0" @click="scrollToBottom">Get in touch</button>
              </template>
              <div>
                <div class="font-weight-normal">
                  <p class="mb-0">{{ exp.acf.date }}</p>

                  <strong>{{ exp.title.rendered }}</strong>
                </div>
                <div>{{ exp.acf.title }}</div>
                <p class="lowOpacity">{{ exp.acf.location }}</p>
                <template v-if="exp.content">
                  <span v-html="exp.content.rendered"></span>
                  <button class="mainBtn mainLight" v-if="index == 0" @click="scrollToBottom">Get in touch</button>
                </template>
              </div>
            </v-timeline-item>
          </v-timeline>
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: ["title", "experience", "img"],
  methods: {
    scrollToBottom: function () {
      window.scrollTo(0, document.body.scrollHeight);
    },
  },
};
</script>

<style lang="scss" scoped>
.experienceCard {
  background: $midColor;
  color: $lightColor;
  font-family: $bodyFont;
  word-break: keep-all;
  div {
    color: $lightColor;
  }
  .lowOpacity {
    opacity: 0.5;
  }
}
</style>
