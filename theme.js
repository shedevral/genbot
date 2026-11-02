// Apply the saved theme before styles load to prevent a bright flash.
window.GenBotTheme = (() => {
  let theme = 'light';
  try {
    const saved = localStorage.getItem('genbot-theme');
    if (saved === 'dark' || saved === 'light') theme = saved;
  } catch {}
  function apply(value) {
    theme = value === 'dark' ? 'dark' : 'light';
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', theme === 'dark' ? '#151b20' : '#f5f7f8');
  }
  apply(theme);
  return {
    get: () => theme,
    set(value) {
      apply(value);
      try { localStorage.setItem('genbot-theme', theme); } catch {}
    }
  };
})();
