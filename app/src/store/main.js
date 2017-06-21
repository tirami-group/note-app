import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const notes = [
  {
    "id": 1,
    "title": "Customer Archetype",
    "date": "2017-05-22",
    "author": "Wenchuan Gu",
    "content": [
      {
        "image": "1-1.png",
        "audio": "1-1.ogg"
      },
      {
        "image": "1-2.png",
        "audio": "1-2.ogg"
      },
      {
        "image": "1-3.png",
        "audio": "1-3.ogg"
      }
    ]
  },

  {
    "id": 2,
    "title": "Customer Brchetype",
    "date": "2017-05-23",
    "author": "Wenchuan Gu",
    "content": [
      {
        "image": "1-1.png",
        "audio": "1-2.ogg"
      },
      {
        "image": "1-2.png",
        "audio": "1-1.ogg"
      },
      {
        "image": "1-3.png",
        "audio": "1-3.ogg"
      }
    ]
  },

  {
    "id": 3,
    "title": "Customer Crchetype",
    "date": "2017-05-24",
    "author": "Wenchuan Gu",
    "content": [
      {
        "image": "1-1.png",
        "audio": "1-3.ogg"
      },
      {
        "image": "1-2.png",
        "audio": "1-2.ogg"
      },
      {
        "image": "1-3.png",
        "audio": "1-1.ogg"
      }
    ]
  }
]

export default new Vuex.Store({
  state: {
    notes: notes,
    currentNote: null
  },
  mutations: {
    setActive (state, note) {
      state.currentNote = note
    }
  }
})