
// main tabs //
document.addEventListener('DOMContentLoaded', () => {
   const tabs = document.querySelector('.tabs');
   const tabsBtn = document.querySelectorAll('.tabs__btn');
   const tabsContent = document.querySelectorAll('.tabs__content');

   if (tabs) {
      tabs.addEventListener('click', (e) => {
         if (e.target.classList.contains('tabs__btn')) {
            const tabsPath = e.target.dataset.tabsPath;
            tabsHandler(tabsPath);
         }
      });
   }

   const tabsHandler = (path) => {
      tabsBtn.forEach(el => { el.classList.remove('tabs__btn--active') });
      document.querySelector(`[data-tabs-path="${path}"]`).classList.add('tabs__btn--active');

      tabsContent.forEach(el => { el.classList.remove('tabs__content--active') });
      document.querySelector(`[data-tabs-target="${path}"]`).classList.add('tabs__content--active');
   };

});



// tabs repair-cost //
document.addEventListener('DOMContentLoaded', () => {
   const tabs = document.querySelector('.repair-cost__tabs');
   const tabsBtn = document.querySelectorAll('.repair-cost__btn');
   const tabsContent = document.querySelectorAll('.repair-cost__content');

   if (tabs) {
      tabs.addEventListener('click', (e) => {
         if (e.target.classList.contains('repair-cost__btn')) {
            const tabsPath = e.target.dataset.tabsPath;
            tabsHandler(tabsPath);
         }
      });
   }

   const tabsHandler = (path) => {
      tabsBtn.forEach(el => { el.classList.remove('repair-cost__btn--active') });
      document.querySelector(`[data-tabs-path="${path}"]`).classList.add('repair-cost__btn--active');

      tabsContent.forEach(el => { el.classList.remove('repair-cost__content--active') });
      document.querySelector(`[data-tabs-target="${path}"]`).classList.add('repair-cost__content--active');
   };

});