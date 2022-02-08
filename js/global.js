function fetch(url, callback) {
	const xhr = new XMLHttpRequest();

	xhr.onreadystatechange = () => {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				const response = JSON.parse(xhr.responseText);
				callback(response);
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
