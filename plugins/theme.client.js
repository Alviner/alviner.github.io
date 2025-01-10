export default defineNuxtPlugin((nuxtApp) => {
  if (import.meta.client) {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.text = `
(function () {
  const isDarkMode =
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);
  document.documentElement.classList.toggle("dark", isDarkMode);
})();`;
    const head = document.head;
    head.insertBefore(script, head.firstChild);
  }
});
