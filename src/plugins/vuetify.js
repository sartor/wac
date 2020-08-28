import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import i18n from '@/i18n'
import '@/sass/overrides.sass'

Vue.use(Vuetify)

const theme = {
  primary: '#9c27b0',
  secondary: '#673ab7',
  accent: '#607d8b',
  error: '#f44336',
  warning: '#ffc107',
  info: '#3f51b5',
  success: '#4caf50',
}

export default new Vuetify({
  lang: {
    t: (key, ...params) => i18n.t(key, params),
  },
  theme: {
    themes: {
      dark: theme,
      light: theme,
    },
  },
})
