const year = document.querySelector("#year");

if (year) {
  year.textContent = new Date().getFullYear().toString();
}

const workList = document.querySelector("#work-list");

function getYouTubeEmbedUrl(url) {
  try {
    const parsed = new URL(url);

    if (parsed.hostname === "youtu.be") {
      return `https://www.youtube.com/embed/${parsed.pathname.slice(1)}`;
    }

    if (parsed.hostname.includes("youtube.com")) {
      if (parsed.pathname.startsWith("/embed/")) {
        return parsed.href;
      }

      const videoId = parsed.searchParams.get("v");
      if (videoId) {
        return `https://www.youtube.com/embed/${videoId}`;
      }
    }
  } catch {
    return "";
  }

  return "";
}

function createWorkMedia(media) {
  if (!media || !media.src) {
    return null;
  }

  const figure = document.createElement("figure");
  figure.className = "work-media-item";

  let element = null;

  if (media.type === "image") {
    const image = document.createElement("img");
    image.src = media.src;
    image.alt = media.alt || "";
    image.loading = "lazy";
    element = image;
  }

  if (media.type === "video") {
    const video = document.createElement("video");
    video.src = media.src;
    video.controls = true;
    video.preload = "metadata";
    video.playsInline = true;

    if (media.poster) {
      video.poster = media.poster;
    }

    element = video;
  }

  if (media.type === "youtube") {
    const embedUrl = getYouTubeEmbedUrl(media.src);

    if (embedUrl) {
      const iframe = document.createElement("iframe");
      iframe.src = embedUrl;
      iframe.title = media.alt || "YouTube video";
      iframe.loading = "lazy";
      iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
      iframe.allowFullscreen = true;
      element = iframe;
    }
  }

  if (!element) {
    return null;
  }

  element.classList.add("work-media");
  figure.append(element);

  if (media.caption) {
    const caption = document.createElement("figcaption");
    caption.textContent = media.caption;
    figure.append(caption);
  }

  return figure;
}

function renderWorks() {
  if (!workList || !Array.isArray(window.WORKS)) {
    return;
  }

  workList.replaceChildren();
  window.WORKS.forEach((work) => {
    const article = document.createElement("article");
    article.className = work.muted ? "work-item muted" : "work-item";

    const main = document.createElement("div");
    main.className = "work-main";

    if (work.icon) {
      const icon = document.createElement("img");
      icon.className = "work-icon";
      icon.src = work.icon;
      icon.alt = work.iconAlt || `${work.title} のアイコン`;
      icon.loading = "lazy";
      main.append(icon);
    }

    const body = document.createElement("div");
    body.className = "work-copy";

    const kicker = document.createElement("p");
    kicker.className = "work-kicker";
    kicker.textContent = work.type;

    const title = document.createElement("h3");
    title.textContent = work.title;

    const description = document.createElement("p");
    description.textContent = work.description;

    body.append(kicker, title, description);
    main.append(body);

    if (work.url) {
      const link = document.createElement("a");
      link.className = "text-link";
      link.href = work.url;
      link.target = "_blank";
      link.rel = "noreferrer";
      link.textContent = work.linkText || "View";
      main.append(link);
    }

    if (work.slug) {
      const detailUrl = `work.html?id=${encodeURIComponent(work.slug)}`;
      article.classList.add("is-clickable");
      article.tabIndex = 0;
      article.setAttribute("role", "link");
      article.setAttribute("aria-label", `${work.title} の詳細を見る`);

      article.addEventListener("click", (event) => {
        if (event.target.closest("a, button, video, iframe")) {
          return;
        }

        window.location.href = detailUrl;
      });

      article.addEventListener("keydown", (event) => {
        if (event.key !== "Enter" && event.key !== " ") {
          return;
        }

        if (event.target.closest("a, button")) {
          return;
        }

        event.preventDefault();
        window.location.href = detailUrl;
      });
    }

    article.append(main);

    if (Array.isArray(work.media) && work.media.length > 0) {
      const mediaGrid = document.createElement("div");
      mediaGrid.className = "work-media-grid";

      work.media.forEach((media) => {
        const mediaElement = createWorkMedia(media);

        if (mediaElement) {
          mediaGrid.append(mediaElement);
        }
      });

      if (mediaGrid.children.length > 0) {
        article.append(mediaGrid);
      }
    }

    workList.append(article);
  });
}

const worksScript = document.createElement("script");
worksScript.src = `works.js?v=${Date.now()}`;
worksScript.onload = renderWorks;
worksScript.onerror = () => {
  if (workList) {
    workList.textContent = "Works の読み込みに失敗しました。ページを再読み込みしてください。";
  }
};
document.head.append(worksScript);
