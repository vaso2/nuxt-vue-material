import Vue from 'vue'
import 'vue-material/dist/vue-material.min.css'

<% if (options.components) { %>
  import  { <%=options.components.join(',')%> } from 'vue-material/dist/components'
  <% options.components.forEach((component) => { %>
    Vue.use(<%=component%>)
  <% }) %>
<% } else { %>
  import VueMaterial from 'vue-material'
  Vue.use(VueMaterial)
<% } %>
