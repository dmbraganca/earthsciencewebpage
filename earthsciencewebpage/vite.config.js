import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        maps: resolve(__dirname, 'maps.html'),
        plateTectonics: resolve(__dirname, 'plate-tectonics.html'),
        weathering: resolve(__dirname, 'weathering.html'),
        fluvial: resolve(__dirname, 'fluvial.html'),
        climate: resolve(__dirname, 'climate.html'),
        references: resolve(__dirname, 'references.html'),
      },
    },
  },
})
