const greetings = [
  "Hello, World!",
  "Hola, Mundo!",
  "Bonjour, Monde!",
  "Hallo, Welt!",
];

let index = 0;

document.getElementById("change-btn").addEventListener("click", function () {
  index = (index + 1) % greetings.length;
  document.getElementById("greeting").textContent = greetings[index];
});
