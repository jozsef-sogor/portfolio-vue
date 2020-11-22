<template>
  <v-card elevation="7" dark max-width="500" class="mx-auto mt-10">
    <v-card-title class="textcenter">Project Info</v-card-title>
    <v-card-text>
      <ul>
        <li v-for="(info, index) of infos" :key="index">
          <strong>{{ info.info_title }}:</strong> {{ info.info_text }}
        </li>
      </ul>
    </v-card-text>
    <v-card-actions class="d-flex flex-wrap">
      <v-tooltip
        v-for="(link, index) of links"
        :key="index"
        bottom
        :disabled="!link.disabled"
        class="mx-auto"
      >
        <template v-slot:activator="{ on, attrs }">
          <div
            @click="link.link ? openTab(link.link) : ''"
            v-bind="attrs"
            v-on="on"
            class="mx-auto my-2"
          >
            <v-btn :disabled="link.disabled" tile large>
              <v-icon>{{ link.icon }}</v-icon>
              {{ link.text }}</v-btn
            >
          </div>
        </template>
        <span v-if="link.reason">{{ link.reason }}</span>
      </v-tooltip>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: ["infos", "links"],
  methods: {
    openTab: function (link) {
      window.open(link, "_blank");
    },
  },
};
</script>

<style></style>
