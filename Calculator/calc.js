// element
const resultShow = document.getElementById("discalc");
const btns = document.querySelectorAll(".btns button");

// init element
let current = "";
let oper = "";
let firstValue = "";

// button events
btns.forEach((btn) => {
  btn.addEventListener("click", function () {
    // buttons value
    const value = btn.textContent;

    // reset input
    if (value === "C") {
      current = "";
      oper = "";
      firstValue = "";
      resultShow.value = "";
    } else if (value === "=") {
      // equalization and show the result
      if (current && oper && firstValue) {
        resultShow.value = eval(`${firstValue} ${oper} ${current}`);
        // reset after equal
        current = "";
        oper = "";
        firstValue = "";
      }
    } else if (["+", "-", "*", "/"].includes(value)) {
      // operations
      if (current !== "") {
        oper = value;
        firstValue = current;
        current = "";
      }
    } else {
      current += value;
      resultShow.value = current;
    }
  });
});
