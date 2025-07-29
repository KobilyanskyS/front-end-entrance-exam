export function setupEditableAnimate() {
  function handleInput(e) {
    const el = e.target;
    el.classList.add("input-anim");
    clearTimeout(el._animTimeout);
    el._animTimeout = setTimeout(() => {
      el.classList.remove("input-anim");
    }, 150);
  }

  document
    .querySelectorAll(".editable[contenteditable='true']")
    .forEach((el) => {
      el.addEventListener("input", handleInput);
    });
}