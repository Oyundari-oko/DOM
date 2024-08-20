const body = document.getElementsByTagName("body")[0];
body.style.display = "flex";
body.style.justifyContent = "center";
body.style.alignItems = "center";
body.style.height = "100vh";
body.style.gap = "20px";

for (let i = 0; i < 4; i++) {
  const box1 = document.createElement("div");
  body.appendChild(box1);
  const color = ["red", "blue", "yellow", "green"];
  box1.style.height = "200px";
  box1.style.width = "200px";
  box1.style.backgroundColor = color[i];
}
