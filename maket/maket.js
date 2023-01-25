//Объявление
const modulTitle = document.querySelectorAll(".modul_title");

const checkboxGroup = document.querySelector(".checkbox-group__last");
const showBtn = document.querySelector(".show-btn");

const cards = document.querySelector(".cards");
const cardMore = document.querySelectorAll("#card_more");
const cardBtn = document.querySelector(".card-btn");

const anyBtn = document.querySelector('input[name="chx5"]');
const inputs = document.querySelector(".row_1");
const inputsList = document.querySelector(".row_1").childNodes;

const resetFilters = document.querySelector(".reset-filters");
const allInput = document.querySelectorAll("input");

const filterMenuOpen = document.querySelector(".filter-menu-open");
const filterMenuClose = document.querySelector(".filter-menu-close");
const navContainer = document.querySelector(".nav-container");

//Скрытие контента в модулях
modulTitle.forEach(function (item) {
  item.addEventListener("click", function () {
    item.nextElementSibling.classList.toggle("modul_body__active");
    item.lastElementChild.classList.toggle("modul_arrow__active");
  });
});

//Показать дополнительные пункты модуля "Дополнительные опции"
showBtn.addEventListener("click", function () {
  checkboxGroup.classList.toggle("show");
  if (showBtn.textContent === "Показать еще") {
    showBtn.textContent = "Скрыть";
  } else {
    showBtn.textContent = "Показать еще";
  }
});

// Показать еще 3 карточки
cardBtn.addEventListener("click", function () {
  cardMore.forEach(function (item) {
    item.classList.add("card_more__show");
  });
});

//Кнопка "Любая"
anyBtn.addEventListener("click", function () {
  inputsList.forEach(function (item) {
    item.checked = false;
  });
});
inputs.addEventListener("click", function () {
  anyBtn.checked = false;
});

//Кнопка "Сбросить фильтры"
resetFilters.addEventListener("click", function () {
  allInput.forEach(function (item) {
    item.checked = false;
  });
});

//Отмена действия над классом "open" при width > 900px
filterMenuOpen.addEventListener("click", function () {
  navContainer.classList.toggle("translate");
});

//Открыть/Закрыть меню фильтров добавлением класса "open"
filterMenuOpen.addEventListener("click", function () {
  if (
    filterMenuOpen.innerHTML ===
    '<img class="filter-menu-open_img" src="/img/x.svg" alt="">'
  ) {
    filterMenuOpen.innerHTML =
      '<img class="filter-menu-open_img" src="/img/filter.svg" alt="">';
  } else {
    filterMenuOpen.innerHTML =
      '<img class="filter-menu-open_img" src="/img/x.svg" alt="">';
  }
});
