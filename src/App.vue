<template>
  <div id="app">
    <ChatInterface/>
  </div>
</template>

<script>
import ChatInterface from './components/ChatInterface.vue'

export default {
  name: 'App',
  components: {
    ChatInterface
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

.message {
  margin: 5px 0;
  padding: 10px;
  background-color: #fff;
  border: 1px solid #bdc3c7;
  border-radius: 5px;
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

