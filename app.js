//Getting ELements

const input = document.querySelector("#input");
const copyBtn = document.querySelector("#copyBtn");
const passBtn = document.querySelector("#passBtn");
const txt = document.querySelector("p");

//FUnctions
const generatePassword = (length = 6) => {
  const passCharacters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*?|";
  let password = "";

  for (let i = 0; i < length; i++) {
    let number = Math.floor(Math.random() * passCharacters.length);
    password += passCharacters[number];
    input.value = password;
  }
};

const copyToClipboard = () => {
  if (!input.value) {
    alert("Please Generate Password First");
    return;
  }
  navigator.clipboard.writeText(input.value);
  txt.style.display = "block";
  txt.innerHTML = "Successfully Copied To Clipboard";
  setTimeout(() => {
    txt.style.display = "none";
  }, 1000);
};

//...........EvenListners...........//
passBtn.addEventListener("click", () =>
  generatePassword(prompt("Enter Length for your Password", 6))
);

copyBtn.addEventListener("click", copyToClipboard);
