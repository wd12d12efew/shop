'use strict';
document.addEventListener("DOMContentLoaded", function () {
    const priceElements = document.querySelectorAll(".price");
    const quantityElements = document.querySelectorAll(".quantity");
  
    priceElements.forEach((priceElement, index) => {
      priceElement.addEventListener("click", function () {
        const count = parseInt(priceElement.getAttribute("data-count"));
  
        // При нажатии на цену устанавливаем начальное количество равным 1
        if (count === 0) {
          priceElement.setAttribute("data-count", "1");
          countElements[index].textContent = "1";
        }
  
        // Показываем количество и кнопки
        priceElement.style.display = "none";
        quantityElements[index].classList.remove("hidden");
      });
    });
  
    const increaseButtons = document.querySelectorAll(".increase");
    const decreaseButtons = document.querySelectorAll(".decrease");
    const countElements = document.querySelectorAll(".count");
  
    increaseButtons.forEach((button, index) => {
      button.addEventListener("click", function () {
        const count = parseInt(countElements[index].textContent);
        countElements[index].textContent = count + 1;
  
        // Обновляем значение атрибута data-count
        priceElements[index].setAttribute("data-count", (count + 1).toString());
      });
    });
  
    decreaseButtons.forEach((button, index) => {
      button.addEventListener("click", function () {
        const count = parseInt(countElements[index].textContent);
  
        if (count > 0) {
          countElements[index].textContent = count - 1;
  
          // Обновляем значение атрибута data-count
          priceElements[index].setAttribute("data-count", (count - 1).toString());
        }
  
        // Если количество достигло 0, то возвращаем цену и скрываем количество и кнопки
        if (count === 1) {
          priceElements[index].style.display = "block";
          quantityElements[index].classList.add("hidden");
        }
      });
    });
  });
  
  