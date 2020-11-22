import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tech: null,
    about: null,
    projects: null,
    experience: null,
    education: null,
    isMobile: null
  },
  getters: {
    getTech(state) {
      return state.tech
    },

    getAbout(state) {
      return state.about
    },

    getProjects(state) {
      return state.projects
    },

    getExperience(state) {
      return state.experience
    },

    getEducation(state) {
      return state.education
    },

    getIsMobile(state) {
      return state.isMobile
    }


  },
  mutations: {
    SET_TECH(state, array) {
      state.tech = array
    },
  
    SET_PROJECTS(state, array) {
      state.projects = array
    },
  
    SET_EDUCATION(state, array) {
      state.education = array
    },
  
    SET_EXPERIENCE(state, array) {
      state.experience = array
    },
  
    SET_ABOUT(state, about) {
      state.about = about
    },
    SET_ISMOBILE(state, boolean) {
      state.isMobile = boolean
    }
  
  
  },
  actions: {
    async getTech({ state, commit }) {
      if (state.tech) return
      try {
        let tech = await fetch( `https://jozsef-sogor.com/portfolio/wp-json/wp/v2/tech`
        ).then(res => res.json())
        tech = tech
          .filter(el => el.status === "publish")
          .map(({ id, title, content, acf}) => ({
            id,
            title,
            content,
            acf
          }))
        commit("SET_TECH", tech)
      } catch (err) {
        console.log(err)
      }
    },

    async getProjects({ state, commit }) {
      if (state.projects) return
      try {
        let projects = await fetch( `https://jozsef-sogor.com/portfolio/wp-json/wp/v2/projects`
        ).then(res => res.json())
        projects = projects
          .filter(el => el.status === "publish")
          .map(({ id, slug, title, content, acf}) => ({
            id,
            slug,
            title,
            content,
            acf
          }))
        commit("SET_PROJECTS", projects)
      } catch (err) {
        console.log(err)
      }
    },

    async getEducation({ state, commit }) {
      if (state.education) return
      try {
        let edu = await fetch( `https://jozsef-sogor.com/portfolio/wp-json/wp/v2/education`
        ).then(res => res.json())
        edu = edu
          .filter(el => el.status === "publish")
          .map(({ id, title, acf}) => ({
            id,
            title,
            acf
          }))
        commit("SET_EDUCATION", edu)
      } catch (err) {
        console.log(err)
      }
    },

    async getExperience({ state, commit }) {
      if (state.experience) return
      try {
        let exp = await fetch( `https://jozsef-sogor.com/portfolio/wp-json/wp/v2/experience`
        ).then(res => res.json())
        exp = exp
          .filter(el => el.status === "publish")
          .map(({ id, title, content, acf}) => ({
            id,
            title,
            content,
            acf
          }))
        commit("SET_EXPERIENCE", exp)
      } catch (err) {
        console.log(err)
      }
    },

    async getAbout({ state, commit }) {
      if (state.about) return
      try {
        let about = await fetch( `https://jozsef-sogor.com/portfolio/wp-json/wp/v2/pages/48`
        ).then(res => res.json())
        about = {
            id: about.id,
            title: about.title.rendered,
            content: about.content.rendered,
            acf: about.acf
          }
        commit("SET_ABOUT", about)
      } catch (err) {
        console.log(err)
      }
    },

    setIsMobile(context, boolean) {
      context.commit('SET_ISMOBILE', boolean)
    }

  },
  modules: {
  }
})
