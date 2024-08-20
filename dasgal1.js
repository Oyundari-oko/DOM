const body = document.getElementsByTagName("body")[0];

const input1 = document.createElement("input");
input1.style.border = "dashed green 2px";
input1.style.width = "50px";
body.appendChild(input1);

const newElement = document.createElement("select");
const option1 = document.createElement("option");
//option1.value = "+";
option1.innerHTML = "+";
newElement.appendChild(option1);
const option2 = document.createElement("option");
//option2.value = "-";
option2.innerHTML = "-";
newElement.appendChild(option2);
const option3 = document.createElement("option");
//option3.value = "/";
option3.innerHTML = "/";
newElement.appendChild(option3);
const option4 = document.createElement("option");
//option4.value = "*";
option4.innerHTML = "*";
newElement.appendChild(option4);

body.appendChild(newElement);

const input2 = document.createElement("input");
input2.style.width = "50px";
input2.style.border = "dashed blue 2px";
body.appendChild(input2);

const tentsuu = document.createElement("button");
tentsuu.innerHTML = "=";
body.appendChild(tentsuu);

const input3 = document.createElement("input");
input3.readOnly = "true";
input3.style.width = "50px";
body.appendChild(input3);

function hariu() {
  const selecters = newElement.value;
  if (selecters === "+") {
    result = Number(input1.value) + Number(input2.value);
    input3.value = result;
  }
  if (selecters === "-") {
    result = Number(input1.value) - Number(input2.value);
    input3.value = result;
  }
  if (selecters === "/") {
    result = Number(input1.value) / Number(input2.value);
    input3.value = result;
  }
  if (selecters === "*") {
    result = Number(input1.value) * Number(input2.value);
    input3.value = result;
  }
}
hariu();

tentsuu.onclick = hariu;
