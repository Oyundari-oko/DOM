const box = document.getElementsByClassName("box");
for (let i = 0; i < box.length; i++) {
  box[i].innerHTML = i + 1;
  box[i].style.backgroundColor = "red";
  box[i].style.fontSize = "50px";
  box[i].style.color = "white";
}
