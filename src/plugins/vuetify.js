import { createVuetify } from 'vuetify';
import 'vuetify/styles';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { aliases, mdi } from 'vuetify/iconsets/mdi';
import '@mdi/font/css/materialdesignicons.css';

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
  theme: {
    defaultTheme: 'dark', 
    themes: {
      dark: {
        dark: true,
        colors: {
          primary: '#FF0000', 
          secondary: '#FFFFFF', 
          background: '#212121', 
          surface: '#303030', 
          accent: '#FF0000', 
          'on-background': '#FFFFFF', 
          'on-surface': '#FFFFFF', 
        },
      },
    },
  },
});

export default vuetify;