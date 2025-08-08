(function () {
  // CSS inject karna
  const style = document.createElement('style');
  style.innerHTML = `
    #chatbot-icon {
      position: fixed;
      bottom: 20px;
      right: 20px;
      background: #007bff;
      color: white;
      border-radius: 50%;
      width: 60px;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 28px;
      cursor: pointer;
      box-shadow: 0 4px 8px rgba(0,0,0,0.2);
      z-index: 9999;
    }
    #chatbot-window {
      position: fixed;
      bottom: 90px;
      right: 20px;
      width: 300px;
      height: 400px;
      background: white;
      border-radius: 10px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.3);
      display: none;
      flex-direction: column;
      z-index: 9999;
      overflow: hidden;
    }
    #chatbot-header {
      background: #007bff;
      color: white;
      padding: 10px;
      font-size: 16px;
    }
    #chatbot-messages {
      flex: 1;
      padding: 10px;
      overflow-y: auto;
      font-size: 14px;
    }
    #chatbot-input {
      display: flex;
      border-top: 1px solid #ccc;
    }
    #chatbot-input input {
      flex: 1;
      border: none;
      padding: 10px;
      font-size: 14px;
    }
    #chatbot-input button {
      background: #007bff;
      color: white;
      border: none;
      padding: 10px;
      cursor: pointer;
    }
  `;
  document.head.appendChild(style);

  // HTML inject karna
  const icon = document.createElement('div');
  icon.id = 'chatbot-icon';
  icon.innerHTML = '💬';
  document.body.appendChild(icon);

  const chatbot = document.createElement('div');
  chatbot.id = 'chatbot-window';
  chatbot.innerHTML = `
    <div id="chatbot-header">Chatbot</div>
    <div id="chatbot-messages"></div>
    <div id="chatbot-input">
      <input type="text" placeholder="Type a message..." />
      <button>Send</button>
    </div>
  `;
  document.body.appendChild(chatbot);

  // JS functionality
  const chatWindow = document.getElementById('chatbot-window');
  icon.addEventListener('click', () => {
    chatWindow.style.display = chatWindow.style.display === 'none' ? 'flex' : 'none';
  });

  const input = chatbot.querySelector('input');
  const sendBtn = chatbot.querySelector('button');
  const messages = chatbot.querySelector('#chatbot-messages');

  function addMessage(text, sender) {
    const msg = document.createElement('div');
    msg.textContent = (sender === 'user' ? 'You: ' : 'Bot: ') + text;
    messages.appendChild(msg);
    messages.scrollTop = messages.scrollHeight;
  }

  sendBtn.addEventListener('click', () => {
    const text = input.value.trim();
    if (text) {
      addMessage(text, 'user');
      input.value = '';
      setTimeout(() => addMessage("This is a static reply!", 'bot'), 500);
    }
  });

})();
