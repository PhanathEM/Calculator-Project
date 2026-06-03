const display = document.getElementById("display");
const themeBtn = document.getElementById("theme-btn");

/* ==========================
   Calculator Functions
========================== */

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

/* ==========================
   Theme Persistence
========================== */

window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark");
    themeBtn.innerHTML = "<i class=\"bi bi-sun\"></i>";
  } else {
    themeBtn.innerHTML = "<i class=\"bi bi-moon\"></i>";
  }
});

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    themeBtn.innerHTML = "<i class=\"bi bi-sun\"></i>";
  } else {
    localStorage.setItem("theme", "light");
    themeBtn.innerHTML = "<i class=\"bi bi-moon\"></i>";
  }
});

/* ==========================
   Keyboard Support
========================== */

document.addEventListener("keydown", (e) => {
  if (!isNaN(e.key) || "+-*/.".includes(e.key)) {
    appendValue(e.key);
  }

  if (e.key === "Enter") {
    e.preventDefault();
    calculate();
  }

  if (e.key === "Backspace") {
    deleteLast();
  }

  if (e.key === "Escape") {
    clearDisplay();
  }
});
