module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],

  css: {
    loaderOptions: {
      scss: {
        prependData: `
        @import "@/assets/scss/_variables.scss";
        @import "@/assets/scss/global.scss";
        `
      }
    }
  }
}