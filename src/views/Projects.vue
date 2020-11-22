<template>
  <article class="projects">
    <h1>Some of my projects</h1>
    <v-row wrap :justify="false">
      <v-col
        cols="12"
        sm="4"
        v-for="project of allProjects"
        :key="project.id"
        class="projectContainer"
      >
        <Project :project="project"></Project>
      </v-col>
    </v-row>
  </article>
</template>

<script>
import Project from "../components/ProjectCard";
export default {
  components: {
    Project,
  },
  created() {
    this.$store.dispatch("getProjects");
  },
  computed: {
    allProjects: function () {
      return this.$store.getters.getProjects;
    },
  },
};
</script>

<style lang="scss" scoped>
.projectContainer {
  &:nth-child(even) {
    background: $midColor;
  }
}
</style>
