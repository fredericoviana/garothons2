<template>
    <div class="login-container">
      <form @submit.prevent="login">
        <h2>Login</h2>
        <div class="input-group">
          <label for="username">Username:</label>
          <input type="text" id="username" v-model="username" required>
        </div>
        <div class="input-group">
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="password" required>
        </div>
        <button type="submit" :disabled="loading">Login</button>
        <!-- Elemento de carregamento -->
        <div v-if="loading" class="loading-overlay">
          Carregando...
        </div>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: '',
        loading: false
      };
    },
    methods: {
      login() {
        this.loading = true;
        setTimeout(() => {
          // Simula o processo de login com sucesso
          console.log("Logged in with", this.username, this.password);
          this.loading = false;
          // Redirecionar para a página principal ou dashboard após o login
          this.$router.push('/chat');
        }, 2000); // Delay de 2 segundos
      }
    }
  }
  </script>
  
  <style scoped>
  .login-container {
    position: relative;
    max-width: 300px;
    margin: 50px auto;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
    background-color: #fff;
    border-radius: 8px;
  }
  
  .input-group {
    margin-bottom: 20px;
  }
  
  input[type="text"],
  input[type="password"] {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  button {
    width: 100%;
    padding: 10px;
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  
  .loading-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    color: #000;
  }
  </style>
  