const navToggle = document.querySelector(".nav‑toggle");
const siteNav = document.getElementById("siteNav");

navToggle.addEventListener("click", () => {
  siteNav.classList.toggle("show");
  navToggle.classList.toggle("open");
});

const nutriToggle = document.getElementById("nutriToggle");
const extraRows = document.querySelectorAll(".extra-row");

nutriToggle.addEventListener("click", () => {
  const isExpanded = nutriToggle.getAttribute("aria-expanded") === "true";
  extraRows.forEach(row => {
    if (isExpanded) {
      row.hidden = true;
      row.removeAttribute("data-visible");
    } else {
      row.hidden = false;
      row.setAttribute("data-visible", "true");
    }
  });
  nutriToggle.setAttribute("aria-expanded", String(!isExpanded));
});

const quoteToggle = document.getElementById("quoteToggle");
const quoteForm = document.getElementById("quoteForm");
const quoteMessage = document.getElementById("quoteMessage");

quoteToggle?.addEventListener("click", () => {
  const isOpen = quoteForm.hidden === false;
  quoteForm.hidden = isOpen;
  quoteToggle.setAttribute("aria-expanded", String(!isOpen));
});

const submitQuote = document.getElementById("submitQuote");

submitQuote?.addEventListener("click", (e) => {
  e.preventDefault();
  const email = document.getElementById("quoteEmail");
  const details = document.getElementById("quoteDetails");

  if (!email.value.trim() || !details.value.trim()) {
    alert("Please fill out all required fields in the quote form.");
    return;
  }

  quoteForm.hidden = true;
  quoteMessage.hidden = false;
});

const orderForm = document.getElementById("order-form");
const orderContainer = document.getElementById("orderContainer");
const orderConfirmation = document.getElementById("orderConfirmation");
const orderThanks = document.getElementById("orderThanks");
const newOrderBtn = document.getElementById("newOrderBtn");

orderForm?.addEventListener("submit", (e) => {
  e.preventDefault();

  const fields = orderForm.querySelectorAll("input, select, textarea");
  let allFilled = true;

  fields.forEach(field => {
    if (field.required && !field.value.trim()) {
      allFilled = false;
    }
  });

  if (!allFilled) {
    alert("Please fill out all required fields in the order form.");
    return;
  }

  const name = orderForm["cust-name"].value || "Friend";
  orderThanks.textContent = `Thanks, ${name}! Your order has been received.`;
  orderContainer.hidden = true;
  orderConfirmation.hidden = false;
});

newOrderBtn?.addEventListener("click", () => {
  orderForm.reset();
  orderContainer.hidden = false;
  orderConfirmation.hidden = true;
});
