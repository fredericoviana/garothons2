<template>
  <div class="chat-container">
    <div class="sidebar">
      <!-- Menus -->
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Settings</li>
      </ul>
    </div>
    <div class="chat-area">
      <!-- Área de Histórico de Chat -->
      <div class="chat-history">
        <div class="message" v-for="msg in messages" :key="msg.id">
          {{ msg.text }}
        </div>
      </div>
      <!-- Espaço para digitar novas mensagens -->
      <div class="chat-input">
        <input type="text" v-model="newMessage" @keyup.enter="sendMessage">
        <button @click="sendMessage">Send</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      messages: [],
      newMessage: ''
    };
  },
  methods: {
    sendMessage() {
      if (this.newMessage.trim() !== '') {
        this.messages.push({
          id: this.messages.length + 1,
          text: this.newMessage
        });
        this.newMessage = '';
      }
    }
  }
}
</script>

<style scoped>
.chat-container {
  display: flex;
  height: 100vh;
}

.sidebar {
  width: 200px;
  background-color: #f0f0f0;
  padding: 20px;
}

.chat-area {
  flex: 1;
  display: flex;
  flex-direction: column;
  border-left: 1px solid #ccc;
}

.chat-history {
  flex: 1;
  overflow-y: auto;
  padding: 20px;
}

.chat-input {
  display: flex;
  padding: 10px;
  background-color: #fff;
  border-top: 1px solid #ccc;
}

.chat-input input {
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  margin-right: 10px;
}

.chat-input button {
  padding: 10px 20px;
  cursor: pointer;
}
</style>
