const shineElement = document.createElement("h1");
const textContent = document.createTextNode("HELLO");
shineElement.appendChild(textContent);
const body = document.getElementsByTagName("body")[0];
body.appendChild(shineElement);

const newElement = document.createElement("img");
newElement.src =
  "https://cdn.britannica.com/87/138787-050-33727493/Belovezhskaya-Forest-Poland.jpg";
body.appendChild(newElement);

//const boxElement = document.getElementsByTagName("body")[0];
//body.style.display = "flex";
//body.style.justifyContent = "center";
//body.style.alignItems = "center";
//body.style.height = "100vh";

//for (let i = 0; i < 4; i++) {
//const box1 = document.createElement("div");
//body.appendChild(box1);
//box1.style.height = "100px";
//box1.style.width = "100px";
//box1.style.backgroundColor = "pur";
//}
//body.appendChild(boxElement);
