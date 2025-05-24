// Chatbot functionality
d// Chatbot Functionality
const sendBtn = document.getElementById("send-btn");
const userInput = document.getElementById("user-input");
const chatWindow = document.getElementById("chat-window");

sendBtn.addEventListener("click", () => {
  const message = userInput.value.trim();
  if (!message) return;

  appendMessage("user", message);
  userInput.value = "";

  let response = "Sorry, I didn't quite get that. Can you please rephrase?";

  const msgLower = message.toLowerCase();
  if (msgLower.includes("roommate")) {
    response = "Looking for a roommate? Try using the search section above to match with someone compatible!";
  } else if (msgLower.includes("budget")) {
    response = "You can enter your budget in the search section to find suitable roommate options!";
  } else if (msgLower.includes("hello") || msgLower.includes("hi")) {
    response = "Hello! 👋 I'm here to help you find your ideal roommate.";
  } else if (msgLower.includes("website")) {
    response = "You can enter your website in the sign-up form under 'Your Website (optional)'.";
  }

  setTimeout(() => {
    appendMessage("bot", response);
  }, 500);
});

function appendMessage(sender, text) {
  const msg = document.createElement("div");
  msg.className = sender === "user" ? "user-message" : "bot-message";
  msg.textContent = (sender === "user" ? "🧑 " : "🤖 ") + text;
  chatWindow.appendChild(msg);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

// Roommate Search Function
function searchRoommate() {
  const location = document.getElementById("location").value.trim();
  const budget = document.getElementById("budget").value.trim();
  const preferences = document.getElementById("preferences").value;

  if (!location || !budget || !preferences) {
    alert("Please fill in all search fields.");
    return;
  }

  const results = [
    {
      name: "Anjali Sharma",
      city: location,
      budget,
      preference: preferences,
      image: "https://randomuser.me/api/portraits/women/68.jpg"
    },
    {
      name: "Rahul Mehra",
      city: location,
      budget,
      preference: preferences,
      image: "https://randomuser.me/api/portraits/men/76.jpg"
    },
    {
      name: "Sneha Iyer",
      city: location,
      budget,
      preference: preferences,
      image: "https://randomuser.me/api/portraits/women/65.jpg"
    }
  ];

  const container = document.getElementById("search-results");
  container.innerHTML = `<h3>Roommates in ${location}</h3>`;
  results.forEach(profile => {
    const card = document.createElement("div");
    card.className = "result-card";
    card.innerHTML = `
      <img src="${profile.image}" alt="${profile.name}" />
      <h4>${profile.name}</h4>
      <p><strong>Location:</strong> ${profile.city}</p>
      <p><strong>Budget:</strong> $${profile.budget}</p>
      <p><strong>Type:</strong> ${profile.preference}</p>
    `;
    container.appendChild(card);
  });
}
function initMap() {
  const mumbai = { lat: 19.0821978, lng: 72.74109939999999 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: mumbai,
  });
  const marker = new google.maps.Marker({
    position: mumbai,
    map: map,
  });
}

// Placeholder for Live Chat Integration
function openLiveChat() {
  alert("💬 Live chat is coming soon! In the meantime, ask our AI Roommate Assistant below 👇");
}
