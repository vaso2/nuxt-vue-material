import Vue from 'vue'
import VueMaterial from 'vue-material'

Vue.use(VueMaterial, <%= JSON.stringify(options.materialOptions, null, 2) %>)
