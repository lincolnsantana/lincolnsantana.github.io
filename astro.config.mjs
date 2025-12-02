import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Substitua pelo nome do seu repositório
  // Se o repositório não for o principal (username.github.io), adicione o nome do repo aqui:
  // base: '/nome-do-repositorio', 
  site: 'https://lincolnsantana.github.io',

  vite: {
    plugins: [tailwindcss()],
  },
});