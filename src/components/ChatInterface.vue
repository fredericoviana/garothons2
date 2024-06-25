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
        <div v-for="msg in messages" :key="msg.id"
             :class="{'user-message': msg.sender === 'user', 'bot-message': msg.sender === 'bot'}">
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
      newMessage: '',
      // Mock de respostas automáticas
      autoResponses: [
        "Olá! Como posso ajudar você hoje?",
        "Estou aqui para responder suas perguntas. Pergunte-me qualquer coisa!",
        "Isso é interessante! Continue...",
        "Poderia fornecer mais detalhes?",
        "Obrigado por essa informação. Tem outra pergunta?"
      ]
    };
  },
  methods: {
    sendMessage() {
      if (this.newMessage.trim() !== '') {
        this.addMessage(this.newMessage, 'user');
        this.autoReply();
        this.newMessage = '';
      }
    },
    addMessage(text, sender) {
      this.messages.push({
        id: this.messages.length + 1,
        text: text,
        sender: sender
      });
    },
    autoReply() {
      // Simula uma pequena demora antes da resposta automática
      setTimeout(() => {
        const reply = this.autoResponses[Math.floor(Math.random() * this.autoResponses.length)];
        this.addMessage(reply, 'bot');
      }, 1000); // Ajuste o tempo de demora conforme necessário
    }
  }
}
</script>


<style scoped>
.chat-container {
  display: flex;
  height: 100vh;
  font-family: 'Arial', sans-serif;
  color: #333;
  background-color: #f9f9f9;
}

.sidebar {
  width: 250px;
  background-color: #2c3e50;
  color: #fff;
  padding: 20px;
  display: flex;
  flex-direction: column;
}

.sidebar ul {
  list-style: none;
  padding: 0;
}

.sidebar li {
  margin: 10px 0;
  padding: 10px;
  background-color: #34495e;
  text-align: center;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.sidebar li:hover {
  background-color: #1abc9c;
}

.chat-area {
  flex: 1;
  display: flex;
  flex-direction: column;
  border-left: 2px solid #bdc3c7;
}

.chat-history {
  flex: 1;
  overflow-y: auto;
  padding: 20px;
  background-color: #ecf0f1;
}

.user-message {
  text-align: right;
  margin: 5px;
  padding: 10px;
  background-color: #dff9fb;
  border-radius: 12px;
  border-bottom-right-radius: 0;
}

.bot-message {
  text-align: left;
  margin: 5px;
  padding: 10px;
  background-color: #f1f2f6;
  border-radius: 12px;
  border-bottom-left-radius: 0;
}

.chat-input {
  padding: 10px;
  background-color: #fff;
  display: flex;
  border-top: 2px solid #bdc3c7;
}

.chat-input input {
  flex: 1;
  padding: 10px 15px;
  border: 2px solid #bdc3c7;
  border-radius: 5px;
  margin-right: 10px;
  font-size: 16px;
}

.chat-input button {
  padding: 10px 20px;
  background-color: #2ecc71;
  border: none;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.chat-input button:hover {
  background-color: #27ae60;
}
</style>

