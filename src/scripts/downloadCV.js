export function setupDownloadCV() {
  document
    .getElementById("download-cv-btn")
    .addEventListener("click", function () {
      setTimeout(function () {
        const link = document.createElement("a");
        link.href = "/cv-pdf/CV.pdf";
        link.download = "CV.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }, 100);
    });
}