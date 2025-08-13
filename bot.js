(function () {
  // Step 1: Inject CSS
  const style = document.createElement('style');
  style.innerHTML = `
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');
    
    #chatbot-icon {
      position: fixed;
      bottom: 30px;
      right: 30px;
      background: linear-gradient(135deg, #6e8efb, #a777e3);
      color: white;
      border-radius: 50%;
      width: 70px;
      height: 70px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 32px;
      cursor: pointer;
      box-shadow: 0 6px 16px rgba(0,0,0,0.2);
      z-index: 9999;
      transition: all 0.3s ease;
      border: none;
      outline: none;
    }
    
    #chatbot-icon:hover {
      transform: scale(1.1);
      box-shadow: 0 8px 20px rgba(0,0,0,0.3);
    }
    
    #chatbot-icon:active {
      transform: scale(0.95);
    }
    
    #chatbot-window {
      position: fixed;
      bottom: 120px;
      right: 30px;
      width: 350px;
      height: 500px;
      background: white;
      border-radius: 16px;
      box-shadow: 0 10px 25px rgba(0,0,0,0.15);
      display: none;
      flex-direction: column;
      z-index: 9999;
      overflow: hidden;
      font-family: 'Poppins', sans-serif;
      transition: all 0.3s ease;
      border: 1px solid #e0e0e0;
    }
    
    #chatbot-header {
      background: linear-gradient(135deg, #6e8efb, #a777e3);
      color: white;
      padding: 15px 20px;
      font-size: 16px;
      font-weight: 600;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    }
    
    #chatbot-close {
      background: none;
      border: none;
      color: white;
      font-size: 20px;
      cursor: pointer;
      padding: 0;
      line-height: 1;
    }
    
    #chatbot-messages {
      flex: 1;
      padding: 10px;
      overflow-y: auto;
      font-size: 14px;
      background-color: #f9f9f9;
      scroll-behavior: smooth;
    }
    
    .message {
      margin-bottom: 15px;
      max-width: 80%;
      padding: 10px 15px;
      border-radius: 18px;
      line-height: 1.4;
      position: relative;
      word-wrap: break-word;
      animation: fadeIn 0.3s ease;
    }
    
    .user-message {
      background: linear-gradient(135deg, #6e8efb, #a777e3);
      color: white;
      margin-left: auto;
      border-bottom-right-radius: 4px;
    }
    
    .bot-message {
      background: white;
      color: #333;
      margin-right: auto;
      border-bottom-left-radius: 4px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    
    .message-time {
      display: block;
      font-size: 11px;
      opacity: 0.7;
      margin-top: 5px;
      text-align: right;
    }
    
    #chatbot-input-container {
      border-top: 1px solid #e0e0e0;
      background: white;
      padding: 10px;
      display: flex;
      align-items: center;
    }
    
    #chatbot-input {
      flex: 1;
      border: 1px solid #e0e0e0;
      padding: 12px 15px;
      font-size: 14px;
      border-radius: 24px;
      outline: none;
      transition: all 0.3s ease;
      font-family: 'Poppins', sans-serif;
    }
    
    #chatbot-input:focus {
      border-color: #a777e3;
      box-shadow: 0 0 0 2px rgba(167, 119, 227, 0.2);
    }
    
    #chatbot-send {
      background: linear-gradient(135deg, #6e8efb, #a777e3);
      color: white;
      border: none;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-left: 10px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease;
    }
    
    #chatbot-send:hover {
      transform: scale(1.05);
    }
    
    #chatbot-send:active {
      transform: scale(0.95);
    }
    
    #chatbot-send svg {
      width: 20px;
      height: 20px;
      fill: white;
    }
    
    .typing-indicator {
      display: inline-flex;
      padding: 10px 15px;
      background: white;
      border-radius: 18px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      margin-bottom: 15px;
    }
    
    .typing-dot {
      width: 8px;
      height: 8px;
      background: #a777e3;
      border-radius: 50%;
      margin: 0 3px;
      animation: typingAnimation 1.4s infinite ease-in-out;
    }
    
    .typing-dot:nth-child(1) {
      animation-delay: 0s;
    }
    
    .typing-dot:nth-child(2) {
      animation-delay: 0.2s;
    }
    
    .typing-dot:nth-child(3) {
      animation-delay: 0.4s;
    }
    
    @keyframes typingAnimation {
      0%, 60%, 100% { transform: translateY(0); }
      30% { transform: translateY(-5px); }
    }
    
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    /* Scrollbar styling */
    #chatbot-messages::-webkit-scrollbar {
      width: 6px;
    }
    
    #chatbot-messages::-webkit-scrollbar-track {
      background: #f1f1f1;
      border-radius: 10px;
    }
    
    #chatbot-messages::-webkit-scrollbar-thumb {
      background: #c1c1c1;
      border-radius: 10px;
    }
    
    #chatbot-messages::-webkit-scrollbar-thumb:hover {
      background: #a777e3;
    }
  `;

  const websiteName = window.location.hostname;
  alert(websiteName);
  document.head.appendChild(style);

  // Step 2: Create Chat Icon
  const icon = document.createElement('button');
  icon.id = 'chatbot-icon';
  icon.innerHTML = '💬';
  icon.setAttribute('aria-label', 'Open chatbot');
  document.body.appendChild(icon);

  // Step 3: Create Chat Window
  const chatbot = document.createElement('div');
  chatbot.id = 'chatbot-window';
  chatbot.innerHTML = `
    <div id="chatbot-header">
      <span>Virtual Assistant</span>
      <button id="chatbot-close" aria-label="Close chatbot">×</button>
    </div>
    <div id="chatbot-messages"></div>
    <div id="chatbot-input-container">
      <input type="text" id="chatbot-input" placeholder="Type your message..." aria-label="Type your message" />
      <button id="chatbot-send" aria-label="Send message">
        <svg viewBox="0 0 24 24">
          <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path>
        </svg>
      </button>
    </div>
  `;
  document.body.appendChild(chatbot);

  // Step 4: Toggle Chat Window
  const chatWindow = document.getElementById('chatbot-window');
  const closeBtn = document.getElementById('chatbot-close');
  
  icon.addEventListener('click', () => {
    chatWindow.style.display = chatWindow.style.display === 'none' ? 'flex' : 'none';
  });
  
  closeBtn.addEventListener('click', () => {
    chatWindow.style.display = 'none';
  });

  // Step 5: Enhanced Messaging Logic
  const input = document.getElementById('chatbot-input');
  const sendBtn = document.getElementById('chatbot-send');
  const messages = document.getElementById('chatbot-messages');

  // function getCurrentTime() {
  //   const now = new Date();
  //   return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  // }

  function addMessage(text, sender) {
    const msgContainer = document.createElement('div');
    msgContainer.className = `message ${sender}-message`;
    
    const msgText = document.createElement('div');
    msgText.textContent = text;
    
    const msgTime = document.createElement('span');
    msgTime.className = 'message-time';
    // msgTime.textContent = getCurrentTime();
    
    msgContainer.appendChild(msgText);
    msgContainer.appendChild(msgTime);
    messages.appendChild(msgContainer);
    messages.scrollTop = messages.scrollHeight;
  }

  function showTypingIndicator() {
    const typing = document.createElement('div');
    typing.className = 'typing-indicator';
    typing.id = 'typing-indicator';
    typing.innerHTML = `
      <div class="typing-dot"></div>
      <div class="typing-dot"></div>
      <div class="typing-dot"></div>
    `;
    messages.appendChild(typing);
    messages.scrollTop = messages.scrollHeight;
  }

  function hideTypingIndicator() {
    const typing = document.getElementById('typing-indicator');
    if (typing) typing.remove();
  }

  function sendToAPI(userText) {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      entry: [
        {
          messaging: [
            {
              sender: { id: "boat" },
              message: { text: userText }
            }
          ]
        }
      ]
    });

    showTypingIndicator();
    
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("https://docschats.onrender.com/reply", requestOptions)
      .then(response => response.text())
      .then(result => {
        hideTypingIndicator();
        try {
          const parsed = JSON.parse(result);
          if (parsed.reply) {
            addMessage(parsed.reply, 'bot');
          } else {
            addMessage("I'm not sure how to respond to that.", 'bot');
          }
        } catch (e) {
          addMessage("I'm having trouble understanding. Could you rephrase that?", 'bot');
        }
      })
      .catch(error => {
        hideTypingIndicator();
        addMessage("Sorry, I'm having connection issues. Please try again later.", 'bot');
        console.error(error);
      });
  }

  function handleSend() {
    const text = input.value.trim();
    if (text) {
      addMessage(text, 'user');
      input.value = '';
      sendToAPI(text);
    }
  }

  sendBtn.addEventListener('click', handleSend);
  
  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  });

  // Initial greeting
  setTimeout(() => {
    addMessage("Hello! How can I assist you today?", 'bot');
  }, 1000);
})();
