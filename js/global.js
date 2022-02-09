function fetch(url, callback, selector, input) {
  const xhr = new XMLHttpRequest();
  console.log(input);
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      switch (xhr.status) {
        case 200:
          const response = JSON.parse(xhr.responseText);
          callback(response);
          break;
        case 404:
          if (!url.includes("pokeapi.co/api/v2/pokemon/")) {
            pageNotFound();
          }
          noData(selector, input);
          break;
        case 500:
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
  location.href = "MoviePoky/html/404.html";
}

function serverCrash() {
  location.href = "MoviePoky/html/500.html";
}

function noData(selector, input) {
  const noDataContent = createElement("div", "noDataContent", "");
  const card = $(selector);
  const img = createImg("../assets/images/nodata.jpg", "No Data", "noDataImg");
  noDataContent.appendChild(img);
  const messeg = createElement(
    "p",
    "textMesseg",
    `Sorry, we don't have ${input}`
  );
  noDataContent.appendChild(messeg);
  card.appendChild(noDataContent);
}
