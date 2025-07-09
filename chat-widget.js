(function() {
  const widget = `
    <style>
      #chatbot-btn {
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: #007bff;
        color: white;
        padding: 12px;
        border-radius: 50%;
        cursor: pointer;
        z-index: 9999;
      }
      #chatbot-box {
        position: fixed;
        bottom: 80px;
        right: 20px;
        width: 300px;
        height: 400px;
        background: #fff;
        border: 1px solid #ccc;
        display: none;
        flex-direction: column;
        z-index: 9999;
      }
      #chatbot-messages {
        flex: 1;
        padding: 10px;
        overflow-y: auto;
      }
      #chatbot-input {
        display: flex;
      }
      #chatbot-input input {
        flex: 1;
        padding: 5px;
      }
      #chatbot-input button {
        background: #007bff;
        color: white;
        border: none;
        padding: 5px 10px;
      }
    </style>
    <div id="chatbot-btn">💬</div>
    <div id="chatbot-box">
      <div id="chatbot-messages"></div>
      <div id="chatbot-input">
        <input type="text" id="chatbot-input-text" placeholder="Say something..." />
        <button onclick="sendChat()">Send</button>
      </div>
    </div>
    <script>
      document.getElementById('chatbot-btn').onclick = () => {
        const box = document.getElementById('chatbot-box');
        box.style.display = box.style.display === 'flex' ? 'none' : 'flex';
      };
      function sendChat() {
        const input = document.getElementById('chatbot-input-text');
        const msg = input.value;
        const container = document.getElementById('chatbot-messages');
        container.innerHTML += '<div>You: ' + msg + '</div>';
        container.innerHTML += '<div>Bot: This is a hardcoded reply!</div>';
        input.value = '';
      }
    </script>
  `;
  const div = document.createElement("div");
  div.innerHTML = widget;
  document.body.appendChild(div);
})();
