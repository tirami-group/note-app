import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const notes = [
  {
    "id": 1,
    "title": "Customer Archetype",
    "content": [
      {
        "image": "1-1.png"
      },
      {
        "image": "1-2.png"
      },
      {
        "image": "1-3.png"
      }
    ]
  },

  {
    "id": 2,
    "title": "Customer Archetype",
    "content": [
      {
        "image": "1-1.png"
      },
      {
        "image": "1-1.png"
      },
      {
        "image": "1-3.png"
      }
    ]
  },

  {
    "id": 3,
    "title": "Customer Archetype",
    "content": [
      {
        "image": "1-1.png"
      },
      {
        "image": "1-2.png"
      },
      {
        "image": "1-3.png"
      }
    ]
  }
]

export default new Vuex.Store({
  state: {
    notes: notes,
    currentNote: null
  },
  mutation: {
    setActive (state, note) {
      state.currentNote = note
    }
  }
})