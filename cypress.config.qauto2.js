import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'https://qauto.forstudy.space',
  },

  env: {
    email: 'guest',
    password: 'welcome2qauto'
  }
})