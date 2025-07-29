export function setupEditableStorage() {
  const STORAGE_KEY = "editableContent";

  function saveContentImmediately(el) {
    const content = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    content[el.dataset.id] = el.innerHTML;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(content));
  }

  function loadContent() {
    const content = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    document
      .querySelectorAll(".editable[contenteditable='true']")
      .forEach((el) => {
        const savedContent = content[el.dataset.id];
        if (savedContent) {
          el.innerHTML = savedContent;
        }
      });
  }

  document.addEventListener("DOMContentLoaded", () => {
    loadContent();
    document
      .querySelectorAll(".editable[contenteditable='true']")
      .forEach((el) => {
        el.addEventListener("input", () => saveContentImmediately(el));
      });
  });
}