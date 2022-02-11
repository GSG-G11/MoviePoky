(() => {
  const form = $("form");
  const moviesContainer = $(".movies-container");
  const liLabels = ["Rating: ", "Director: ", "Release Date: ", "Article: "];
  const wordsLength = 20;
  const apiKey = "beVf5aG00ErGZmhOp0Urm0GCywMCg0Ar";
  let searchTerm = "superman";
  let apiURL = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${searchTerm}&api-key=${apiKey}`;

  window.onload = () =>
    fetch(apiURL, renderArticles, ".movies-container", searchTerm);

  form.onsubmit = (e) => {
    e.preventDefault();
    const searchTerm = $("form input").value;

    if (searchTerm.trim() !== "") {
      apiURL = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${searchTerm}&api-key=${apiKey}`;
      fetch(apiURL, renderArticles, ".movies-container", searchTerm);
    }
  };

  function renderArticles(response) {
    toggleLoaderDisplay();
    removePreviousArticles();
    const articles = response.results;
    if (articles) {
      articles.forEach((article) => createArticle(article));
    } else {
      searchTerm = $("form input").value;
      noData(".movies-container", searchTerm);
    }
  }

  function removePreviousArticles() {
    [...moviesContainer.children].forEach((node) => node.remove());
  }

  function customSummary(txt) {
    const splittedTxt = txt.split(" ");
    return splittedTxt.length <= wordsLength
      ? txt
      : `${splittedTxt.slice(0, wordsLength).join(" ")}...`;
  }

  function createArticle(article) {
    const movie = createElement("div", "movie");
    const imageContainer = createElement("div", "image");
    // If no poster is available use the default poster image
    const src = !!article.multimedia
      ? article.multimedia.src
      : "../assets/images/not-available-poster.jpg";
    const movieImg = createImg(src, article.display_title);
    imageContainer.append(movieImg);

    const info = createElement("div", "info");
    const movieHeading = createElement("h3", "title", article.headline);
    const summary = createElement(
      "p",
      "summary",
      customSummary(article.summary_short)
    );
    summary.title = article.summary_short;
    const additionalInfo = createElement("ul", "additional-info");

    [article.mpaa_rating, article.byline, article.opening_date].forEach(
      (item, i) => {
        const li = createElement("li", "", liLabels[i]);
        const innerTag = createElement("span", "list-info", item);
        li.append(innerTag);
        additionalInfo.append(li);
      }
    );

    const lastLi = createElement("li", "", liLabels[3]);
    const articleLink = createLink(
      article.link.url,
      "list-info-url",
      "See article here"
    );
    lastLi.append(articleLink);
    additionalInfo.append(lastLi);
    info.append(movieHeading, summary, additionalInfo);
    movie.append(imageContainer, info);
    moviesContainer.append(movie);
  }
})();
