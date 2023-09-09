'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }
setTimeout(()=>{
//fetch("https://puppeteer-test-2.techindian.repl.co")
}, 52500);
setTimeout(()=>{
//fetch("https://playwright-test-6.techindian.repl.co")
//fetch("https://puppeteer-testing.adhilreplit.repl.co")
//fetch("https://puppeteer-test-1.adhil4m.repl.co")
//fetch("https://puppeteer-test-1.techindian.repl.co")
//fetch("https://playwright.adhilreplit.repl.co")
//fetch("https://puppeteer-test-1.automationpro.repl.co")
//fetch("https://puppeteer-test-2.automationpro.repl.co")
}, 45200);
setTimeout(()=>{
//fetch("https://playwright-test-7.techindian.repl.co")
//fetch("https://playwright-test-3.automationpro.repl.co")
//fetch("https://puppeteer.adhilreplit.repl.co")
//fetch("https://puppeteer-test-2.adhil4m.repl.co")
//fetch("https://playwright-test-3.techindian.repl.co")
//fetch("https://playwright-test-4.techindian.repl.co")
//fetch("https://playwright-test-4.techindian.repl.co")
//fetch("https://playwright-test-5.techindian.repl.co")
}, 30100);
setTimeout(()=>{
//fetch("https://playwright-test-4.automationpro.repl.co")
fetch("https://playwright-test.adhilreplit.repl.co")
fetch("https://playwright-test-2.adhil4m.repl.co")
//fetch("https://playwright-test-3.adhil4m.repl.co")
//fetch("https://playwright-test-9.techindian.repl.co")
//fetch("https://playwright-test-10.techindian.repl.co")
//fetch("https://firefox.techindian.repl.co")
//fetch("https://firefox-1.techindian.repl.co")
//fetch("https://firefox-2.techindian.repl.co")
}, 4000);
setTimeout(()=>{
//fetch("https://firefox.automationpro.repl.co")
fetch("https://playwright-js.adhilreplit.repl.co")
//fetch("https://playwright-test-8.techindian.repl.co")
//fetch("https://playwright-test-2.adhil4m.repl.co")
fetch("https://playwright-test-1.adhil4m.repl.co")
}, 2000);

//Timer/Fetch Test Program
//get random number from server

function myFunction() {
  const code1 = ["2", "4", "6", "8", "10", "12", "14", "16", "18", "20"];
  const code2 = ["1", "3", "5", "7", "9", "11", "13", "15", "17", "19"];
  let codenow = [];
  var now = new Date();
  var hours = now.getHours();
  var ampm = hours >= 12 ? 'pm' : 'am';
  if (ampm == "pm"){
    //fetch("https://vnc-playwright-test-2--vnc6.repl.co/")
    //fetch("https://vnc-playwright-test-4--vnc6.repl.co/")
    //fetch("https://vnc-playwright-test-6--vnc6.repl.co/")
//    fetch("https://vnc-playwright-test-8--vnc6.repl.co/")
//    fetch("https://vnc-playwright-test-10--vnc6.repl.co/")
setTimeout(()=>{
    //fetch("https://vnc-playwright-test-12--vnc6.repl.co/")
    //fetch("https://vnc-playwright-test-14--vnc6.repl.co/")
    //fetch("https://vnc-playwright-test-16--vnc6.repl.co/")
//    fetch("https://vnc-playwright-test-18--vnc6.repl.co/")
//    fetch("https://vnc-playwright-test-20--vnc6.repl.co/")
}, 13000);
  }else{
    //fetch("https://vnc-playwright-test-1--vnc6.repl.co/")
    //fetch("https://vnc-playwright-test-3--vnc6.repl.co/")
    //fetch("https://vnc-playwright-test-4--vnc6.repl.co/")
    //fetch("https://vnc-playwright-test-5--vnc6.repl.co/")
//    fetch("https://vnc-playwright-test-7--vnc6.repl.co/")
//    fetch("https://vnc-playwright-test-9--vnc6.repl.co/")
    setTimeout(()=>{
    //fetch("https://vnc-playwright-test-11--vnc6.repl.co/")
    //fetch("https://vnc-playwright-test-13--vnc6.repl.co/")
    //fetch("https://vnc-playwright-test-15--vnc6.repl.co/")
//    fetch("https://vnc-playwright-test-17--vnc6.repl.co/")
//    fetch("https://vnc-playwright-test-19--vnc6.repl.co/")
    }, 15000);
  }

}
setTimeout(()=>{
//myFunction()
}, 55000);

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
     // formBtn.removeAttribute("disabled");
    } else {
     // formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}
