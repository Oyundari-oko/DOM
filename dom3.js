const body = document.getElementsByTagName("body")[0];
const button = document.getElementsByTagName("button")[0];

function word() {
  const text = prompt("Ugvvlber bicne uu");
  if (text === "") alert("ym biceerei");
  const element = document.createElement("h1");
  element.innerHTML = text;
  body.appendChild(element);
}
word();

button.onclick = text;
