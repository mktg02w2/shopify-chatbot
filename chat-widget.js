<script>
  document.getElementById('chatbot-btn').onclick = () => {
    const box = document.getElementById('chatbot-box');
    box.style.display = box.style.display === 'flex' ? 'none' : 'flex';
  };

  async function sendChat() {
    const input = document.getElementById('chatbot-input-text');
    const msg = input.value.trim();
    const container = document.getElementById('chatbot-messages');

    if (!msg) return;

    // Show user's message
    container.innerHTML += `<div>You: ${msg}</div>`;
    input.value = '';

    try {
      const response = await fetch("https://us-central1-YOUR_PROJECT_ID.cloudfunctions.net/chatWithGPT", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ message: msg })
      });

      const data = await response.json();

      // Show AI's reply
      container.innerHTML += `<div>Bot: ${data.reply}</div>`;
    } catch (error) {
      console.error("Chat error:", error);
      container.innerHTML += `<div style="color:red;">Bot: Error getting response</div>`;
    }

    // Scroll to latest message
    container.scrollTop = container.scrollHeight;
  }
</script>

