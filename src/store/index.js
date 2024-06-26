import { createStore } from 'vuex'

export default createStore({
   // works like a variable
  state: {    

  },
  getters: {
    //used to preview code
  },
  mutations: {
    //use this to change/update the state
    //committing a mutation
    setAboutMe(state,payload){
     state.aboutMe = payload 
    },
    setProjects(state,payload){
     state.projects = payload 
    },
    setEducation(state,payload){
     state.education = payload 
    },
    setSkills(state,payload){
     state.skills = payload 
    },
    setWorkExp(state,payload){
     state.workExp = payload 
    },
    setTestimonial(state,payload){
     state.testimonial = payload 
    }
    
  },
  actions: {
    //run all async code
    //dispatching
    async getAboutMe({commit}){
      let fetchInfo = await fetch('https://itz-marcus.github.io/First_API/data/data.json')
      let data = await fetchInfo.json()
      let {aboutMe,projects,education,skills,workExp,testimonial} = data
      commit('setAboutMe',aboutMe)
      commit('setProjects',projects)
      commit('setEducation',education)
      commit('setSkills',skills)
      commit('setWorkExp',workExp)
      commit('setTestimonial',testimonial)
      console.log(aboutMe);
      // context.commit('setAboutMe',aboutMe)
    }
  },
  modules: {
    //to separate and organize your code 
  }
})
