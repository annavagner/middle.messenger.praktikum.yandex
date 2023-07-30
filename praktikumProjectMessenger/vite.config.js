import { defineConfig } from 'vite';
import {resolve} from 'path';
import handlebars from 'vite-plugin-handlebars';

export default defineConfig({
  root: resolve(__dirname, 'src'),
  build: {
    outDir: resolve(__dirname, 'dist'),
  },
  plugins: [handlebars({
    partialDirectory: resolve(__dirname, 'src/partials'),
      context: {
        login: 'RobertOppen',
        password: 'password', 
        email: 'robertoppen@mail.ru',
        first_name: 'Robert',
        second_name: 'Oppen',
        phone: '88005553535',
        password_again: 'passwordagain',
      },
    }),
  ],
});  