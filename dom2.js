function text() {
  const h1 = document.createElement("h1");
  const text = document.createTextNode("Hellooo");
  h1.appendChild(text);
  body.appendChild(h1);
}
const body = document.getElementsByTagName("body")[0];
const button = document.getElementsByTagName("button")[0];
button.onclick = text;
