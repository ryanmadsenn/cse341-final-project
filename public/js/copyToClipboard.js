function copyToClipboard(elementId) {
  var copyText = document.getElementById(elementId).textContent;
  var tempInput = document.createElement("input");
  tempInput.value = copyText;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
  alert("Copied to clipboard: " + copyText);
}
