const copyBtn = document.getElementById("copy-btn");
const copyText = document.getElementById("copy-text");

copyBtn.addEventListener("click", () => {
  const textarea = document.createElement("textarea");
  textarea.value = copyText.textContent;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
  alert("Text copied to clipboard!");
});

// ***********************
// const copyBtn = document.getElementById("copy-btn");
// const copyInput = document.getElementById("copy-input");

// copyBtn.addEventListener("click", () => {
//   copyInput.style.display = "block";
//   copyInput.select();
//   document.execCommand("copy");
//   copyInput.style.display = "none";
//   alert("Text copied to clipboard!");
// });


