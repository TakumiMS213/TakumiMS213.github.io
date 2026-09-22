const year = document.querySelector("#year");

if (year) {
  year.textContent = new Date().getFullYear().toString();
}

const workList = document.querySelector("#work-list");

if (workList && Array.isArray(window.WORKS)) {
  window.WORKS.forEach((work) => {
    const article = document.createElement("article");
    article.className = work.muted ? "work-item muted" : "work-item";

    const body = document.createElement("div");

    const kicker = document.createElement("p");
    kicker.className = "work-kicker";
    kicker.textContent = work.type;

    const title = document.createElement("h3");
    title.textContent = work.title;

    const description = document.createElement("p");
    description.textContent = work.description;

    body.append(kicker, title, description);
    article.append(body);

    if (work.url) {
      const link = document.createElement("a");
      link.className = "text-link";
      link.href = work.url;
      link.target = "_blank";
      link.rel = "noreferrer";
      link.textContent = work.linkText || "View";
      article.append(link);
    }

    workList.append(article);
  });
}
