import Vuex from 'vuex';

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: [
        {
          id: '1',
          title: 'sample-title',
          previewText: 'texttexttext'
        },
        {
          id: '1',
          title: 'sample-title2',
          previewText: 'texttexttext'
        }
      ]
    },

    getters: {
      loadedPosts(state) {
        return state.loadedPosts;
      }
    }
  })
}

export default createStore;