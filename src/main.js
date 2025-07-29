import { setupDownloadCV } from "./scripts/downloadCV.js";
import { setupEditableAnimate } from "./scripts/editable-animate.js";
import { setupEditableStorage } from "./scripts/editable-storage.js";
import { createRipple } from "./scripts/ripple.js";

// Инициализация
setupDownloadCV();
setupEditableAnimate();
setupEditableStorage();

// Пример использования ripple-эффекта
document.querySelectorAll(".ripple-btn").forEach((btn) => {
  btn.addEventListener("click", createRipple);
});