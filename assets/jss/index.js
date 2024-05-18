document.querySelector("#winxp").addEventListener("click", function () {
  window.open("https://winxp.now.sh/", "", "width=600,height=600");
});
document.querySelector("#win98").addEventListener("click", function () {
  window.open("https://98.js.org", "", "width=600,height=600");
});
document.querySelector("#win95").addEventListener("click", function () {
  if (
    window.confirm(
      "You are being redirected to a third party website. If you want to stay on this website, click 'Cancel'. If you want to go, click 'Ok'."
    ) === true
  ) {
    window.open(
      "https://www.pcjs.org/software/pcx86/sys/windows/win95/4.00.950/"
    );
  }
});
document.querySelector("#winlong").addEventListener("click", function () {
  if (
    window.confirm(
      "Windows Longhorn was never released to the public so functionality is miminal. If you want more functionality, try out our other online VM's."
    ) === true
  ) {
    if (
      window.confirm(
        "You are being redirected to a third party website. If you want to stay on this website, click 'Cancel'. If you want to go, click 'Ok'."
      ) === true
    ) {
      window.open("https://scratch.mit.edu/projects/25057565/embed");
    }
  }
});
