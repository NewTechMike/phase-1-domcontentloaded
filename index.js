// Your code goes here
document.addEventListener("DOMContentLoaded", () => {
  console.log("The Dom has loaded")
  const doc = document.querySelector('#text');
  console.log(doc)
  doc.textContent = 'This is really cool!'
} );
console.log(
  "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
);