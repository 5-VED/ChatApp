const socket = io();
const chatForm = document.getElementById("chat-form");
const chatMessages = document.querySelector(".chat-messages");
const recieveMsg = document.getElementById(".message");

let fromUser = "John";
let toUser = "Maria";

//Submit Message
chatForm.addEventListener("submit", (e) => {
  e.preventDefault(); //prevents default logging into file
  const msg = e.target.elements.msg.value;
  socket.emit("chatMessage", msg);
  document.getElementById("msg").value = " ";
});

// const append = (message) => {
//   const messageElement = document.createElement("div");
//   messageElement.innerText = message;
//   messageElement.classList.add("message");
//   recieveMsg.append(chatMessages);
// };

socket.on("recieve", (data) => {
  append(`${data.message}`);
});
