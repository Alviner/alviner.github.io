export default defineNuxtPlugin((nuxtApp) => {
  useHead({
    script: [
      {
        children: `
(function () {
  const isDarkMode =
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);
  document.documentElement.classList.toggle("dark", isDarkMode);
})();`,
        type: "text/javascript",
      },
    ],
  });
});
