// Resolve theme before the first paint to avoid a light flash.
(() => {
  let theme;
  try {
    theme = localStorage.getItem('portfolio-theme');
  } catch {}
  document.documentElement.dataset.theme =
    theme === 'dark' || theme === 'light'
      ? theme
      : matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
})();
