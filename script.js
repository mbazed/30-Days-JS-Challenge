function highlightSyntax(content) {
  const element = document.createElement("pre");
  element.className = "language-javascript";
  element.innerHTML = content;
  hljs.highlightElement(element);
  return element.innerHTML;
}

function loadFile(path) {
  fetch(path)
    .then((response) => {
      if (!response.ok) {
        throw new Error("HTTP error " + response.status);
      }
      return response.text();
    })
    .then((data) => {
      document.getElementById("filecontents").innerHTML = highlightSyntax(data);
    })
    .catch((error) => {
      console.error("Error fetching file: ", error);
      document.getElementById("filecontents").textContent =
        "Error fetching file: " + error;
    });
}

function loadScript(src) {
  console.clear();
  const script = document.createElement("script");
  script.src = src;
  document.body.append(script);
}

function handleClick(filePath) {
  loadFile(filePath);
  loadScript(filePath);
}
