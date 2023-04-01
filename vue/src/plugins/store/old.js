import { createStore } from "vuex";
import Api from "../app/common/services/Api.js";


const store = createStore({
  state: {

    search: "",
    posts: {
      data: []
    },
    post: {
      data: null,
    },

  },
  getters: {},
  actions: {
    register({ commit }, user) {
      return Api.post('/register', user)
        .then(({ data }) => {
          commit('setUser', data.user)
          commit('setToken', data.token)
          commit("notify", {
            message: "Zarejestrowano",
            type: "success"
          })
          return data
        }).catch(error => {
          commit("notify", "Spróbuj ponowie", "error")
          throw error
        })
    },

    getPosts({ commit }, params) {
      return Api.get('/posts', {
        params
      })
        .then(({ data }) => {
          commit('setPosts', data.data)
        })
    },
    getPost({ commit }, id) {
      return Api.get(`/posts/${id}`)
        .then(({ data }) => {
          commit('setPost', data.data)
        })
    },
    updatePost({ commit, state }, id) {
      return Api.put(`/posts/${id}`, state.post.data).then(() => {
        commit("notify", {
          message: "Post zaktualizowany",
          type: "success"
        })
      }).catch(() => {
        commit("notify", {
          message: "Coś poszło nie tak - spróbuj ponownie",
          type: "error"
        })
      })
    },
    getUser({ commit }, id) {
      return Api.get(`/user`)
        .then(({ data }) => {
          commit('setUser', data)
        })
    },
    deletePost({ commit }, id) {
      return Api.delete(`/posts/${id}`).then(() => {
        commit("notify", {
          message: "Post usunięty",
          type: "success"
        })
      }).catch(() => {
        commit("notify", {
          message: "Coś poszło nie tak - spróbuj ponownie",
          type: "error"
        })
      })
    }
  },
  mutations: {
    setToken(state, token) {
      state.user.token = token
      localStorage.setItem("TOKEN", token)
    },
    setUser(state, user) {
      state.user.data = user
    },
    setPost(state, post) {
      state.post.data = post
    },
    setSearch(state, search) {
      state.search = search
    },
    setPosts(state, posts) {
      state.posts.data = posts
    },
    logout(state) {
      state.user.data = null
      state.user.token = null
      localStorage.removeItem("TOKEN")
    },
    notify(state, { message, type }) {
      state.notification.message = message
      state.notification.type = type
      state.notification.show = true
      setTimeout(() => {
        state.notification.show = false
      }, 4000)
    }
  },
  modules: {},
})
export default store
