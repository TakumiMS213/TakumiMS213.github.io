const year = document.querySelector("#year");

if (year) {
  year.textContent = new Date().getFullYear().toString();
}

const params = new URLSearchParams(window.location.search);
const workId = params.get("id");

const detailArticle = document.querySelector("#detail-article");
const detailError = document.querySelector("#article-error");
const detailIcon = document.querySelector("#detail-icon");
const detailType = document.querySelector("#detail-type");
const detailTitle = document.querySelector("#detail-title");
const detailDescription = document.querySelector("#detail-description");
const detailActions = document.querySelector("#detail-actions");
const articleBody = document.querySelector("#article-body");

function showError(message) {
  if (detailArticle) {
    detailArticle.hidden = true;
  }

  if (detailError) {
    detailError.hidden = false;
    detailError.textContent = message;
  }
}

function renderHeader(work) {
  document.title = `${work.title} | TakumiMS213 Portfolio`;

  detailType.textContent = work.type || "Work";
  detailTitle.textContent = work.title || "";
  detailDescription.textContent = work.description || "";

  if (work.icon) {
    detailIcon.src = work.icon;
    detailIcon.alt = work.iconAlt || `${work.title} のアイコン`;
    detailIcon.hidden = false;
  } else {
    detailIcon.hidden = true;
  }

  detailActions.replaceChildren();

  if (work.url) {
    const link = document.createElement("a");
    link.className = "button primary";
    link.href = work.url;
    link.target = "_blank";
    link.rel = "noreferrer";
    link.textContent = work.linkText || "View";
    detailActions.append(link);
  }
}

async function loadArticle(work) {
  const markdownPath = `works/${work.slug}.md?v=${Date.now()}`;

  try {
    const response = await fetch(markdownPath, { cache: "no-store" });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const markdown = await response.text();

    if (!window.marked) {
      throw new Error("Markdown renderer is unavailable.");
    }

    articleBody.innerHTML = window.marked.parse(markdown);
    detailError.hidden = true;
    detailArticle.hidden = false;
  } catch (error) {
    showError("詳細記事を読み込めませんでした。works/" + work.slug + ".md が存在するか確認してください。");
  }
}

function startDetailPage() {
  if (!workId) {
    showError("作品が指定されていません。Works一覧から作品を選択してください。");
    return;
  }

  if (!Array.isArray(window.WORKS)) {
    showError("Worksデータを読み込めませんでした。");
    return;
  }

  const work = window.WORKS.find((item) => item.slug === workId);

  if (!work) {
    showError("指定された作品が見つかりませんでした。");
    return;
  }

  renderHeader(work);
  loadArticle(work);
}

const worksScript = document.createElement("script");
worksScript.src = `works.js?v=${Date.now()}`;
worksScript.onload = startDetailPage;
worksScript.onerror = () => showError("Worksデータを読み込めませんでした。");
document.head.append(worksScript);
