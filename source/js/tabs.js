document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelector('.tabs');
  const page = document.querySelector('.page-main');
  const tabsBtn = document.querySelectorAll('.tabs-btn');
  const tabsContent = document.querySelectorAll('.reviews__card');

  if (page) {
    page.addEventListener('click', (evt) => {
      // evt.preventDefault();
      if (evt.target.classList.contains('tabs-btn')) {
        const tabsPath = evt.target.dataset.tabsPath;
        tabsBtn.forEach(el => {el.classList.remove('tabs__link--active')});
        tabs.querySelector(`[data-tabs-path="${tabsPath}"]`).classList.add('tabs__link--active');
        tabsHandler(tabsPath);
      }
    });
  }

  const tabsHandler = (path) => {
    tabsContent.forEach(el => {el.classList.remove('reviews__card--active')});
    document.querySelector(`[data-tabs-target="${path}"]`).classList.add('reviews__card--active');
  };
});

