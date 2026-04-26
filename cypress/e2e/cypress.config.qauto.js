import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'https://qauto.forstudy.space',
    env: {
      email: 'alina_test@mail.com',
      password: 'Test1234'
    }
  }
});