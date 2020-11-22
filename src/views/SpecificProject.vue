<template>
  <v-container>
    <v-img :src="project.acf.image.url" :alt="project.acf.image.alt" max-width="500" :contain="true" class="mx-auto heroMockup"> </v-img>
    <h1 class="text-center">{{ project.title.rendered }}</h1>

    <InfoCard :links="project.acf.links" :infos="project.acf.project_info"></InfoCard>
    <div class="projectContent" v-html="project.content.rendered"></div>
  </v-container>
</template>

<script>
import InfoCard from "@/components/subcomponents/ProjectInfo";
export default {
  data() {
    return {};
  },
  components: {
    InfoCard,
  },
  created() {
    this.$store.dispatch("getProjects");
  },
  computed: {
    allProjects: function () {
      return this.$store.getters.getProjects;
    },
    project: function () {
      let slug = this.$route.params.slug;
      let project = null;

      if (this.allProjects) {
        project = this.allProjects.find((x) => x.slug == slug);
      }
      return project;
    },
  },
};
</script>

<style lang="scss">
.heroMockup {
  max-height: 50vh;
}

.projectContent {
  h1,
  h2,
  h3,
  h4 {
    margin-top: 2rem;
    margin-bottom: 1rem;
  }
  figure {
    max-width: 100%;
    padding: 1rem;
    img {
      display: block;
      max-width: 100%;
      height: auto;
      margin: auto;
    }
  }

  .wp-block-table {
    color: $lightColor;
  }
  ul {
    color: $lightColor;
    margin-left: 1.5rem;
  }
}

@media only screen and (min-width: 600px) {
  .projectContent {
    .wp-block-columns,
    .wp-block-media-text {
      display: flex;
      justify-content: space-evenly;
      figure {
        position: relative;
        img {
          display: block;
          max-width: 100%;
          height: auto;
        }
      }
    }

    .wp-block-media-text {
      align-items: center;
      justify-content: space-between;
      position: relative;
      .wp-block-media-text__content {
        width: 60%;
      }
      figure {
        width: 40%;
      }
    }
    .has-media-on-the-right {
      flex-direction: row-reverse;
    }
    ul {
      margin-left: 3.5em;
    }
  }
}
</style>
