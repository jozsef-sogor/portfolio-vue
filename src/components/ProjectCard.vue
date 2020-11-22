<template>
  <v-responsive aspect-ratio="1 / 1" class="projectCard" @click="$router.push(`/projects/${project.slug}`)">
    <v-img :src="project.acf.image.url" :alt="project.acf.image.alt" :contain="true" :aspect-ratio="9 / 8" class="mx-auto px-4 cardImg my-3"> </v-img>
    <h3>{{ project.title.rendered }}</h3>
  </v-responsive>
</template>

<script>
export default {
  props: ["project"],
};
</script>

<style lang="scss" scoped>
.projectCard {
  text-align: center;
  cursor: pointer;
  .cardImg {
    transition: 0.3s;
  }
  /*.v-img {
    display: block;
    padding: 1rem;
    width: 70%;
    height: auto;
    margin: 0 auto;
    transition: 0.3s;
  } */
  &:hover {
    .cardImg {
      margin-top: 4px !important;
      margin-bottom: 20px !important;
    }
  }
}
</style>
