function fetch(url, callback, selector) {
  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      switch (xhr.status) {
        case 200:
          const response = JSON.parse(xhr.responseText);
          callback(response);
          break;
        case 404:
          noData(selector);
          break;
        case xhr.status.toString().startsWith("5"):
          serverCrash();
          break;
      }
    }
  };

  xhr.open("GET", url);
  xhr.send();
}

function $(selector) {
  return document.querySelector(selector);
}

function createElement(tagName, className = "", txtContent = "") {
  const element = document.createElement(tagName);
  element.className = className;
  element.textContent = txtContent;
  return element;
}

function createImg(src, alt = "Movie Photo", className = "") {
  const img = document.createElement("img");
  img.src = src;
  img.alt = alt;
  img.className = className;
  return img;
}

function createLink(href, className = "", txtContent = "") {
  const link = document.createElement("a");
  link.href = href;
  link.className = className;
  link.textContent = txtContent;
  link.target = "_blank";
  return link;
}

function pageNotFound() {
  location.href = "/html/404.html";
}

function serverCrash() {
  location.href = "/html/500.html";
}

function noData(selector) {
  const card = $(selector);
  const messeg = createImg("../assets/images/nodata.jpg", "No Data", "");
  card.appendChild(messeg);
}