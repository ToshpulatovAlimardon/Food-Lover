window.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tabheader__item"),
  tabContents = document.querySelectorAll('.tab_content'),
  tabParents = document.querySelector('.tabheader__items')

  function hideTabContents() {
    tabContents.forEach(tabContent => {
      tabContent.style.display = 'none'
    })
  }

  hideTabContents();
})