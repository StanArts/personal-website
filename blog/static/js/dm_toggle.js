let darkMode = localStorage.getItem("darkMode");
const checkbox = document.querySelector('input[name=theme]');

const enableDarkMode = () => {

  document.documentElement.setAttribute('data-theme', 'dark');

  document.documentElement.classList.add("darkmode");

  localStorage.setItem("darkMode", "enabled");
};

const disableDarkMode = () => {

  document.documentElement.setAttribute('data-theme', 'light');

  document.documentElement.classList.remove("darkmode");

  localStorage.setItem("darkMode", null)
}

if (darkMode === "enabled") {
  enableDarkMode();
}

checkbox.addEventListener('change', () => {
  darkMode = localStorage.getItem("darkMode");
  if (darkMode !== "enabled") {
    trans();
    enableDarkMode();
  }
  else {
    trans();
    disableDarkMode();
  }
});

      let trans = () => {
        document.documentElement.classList.add('transition');
        window.setTimeout(() => {
          document.documentElement.classList.remove('transition')
        }, 1000)
      }