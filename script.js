const actions = [
  { text: "Biked instead of drove", co2: 2 },
  { text: "Ate a vegetarian meal", co2: 1.5 },
  { text: "Used a reusable water bottle", co2: 0.1 },
  { text: "Turned off lights when not needed", co2: 0.2 },
  { text: "Washed clothes in cold water", co2: 0.5 },
];

const listContainer = document.getElementById("actions-list");
const totalDisplay = document.getElementById("total");

let totalSaved = 0;

// Load from localStorage if available
if (localStorage.getItem("climateTotal")) {
  totalSaved = parseFloat(localStorage.getItem("climateTotal"));
  totalDisplay.textContent = totalSaved.toFixed(2);
}

actions.forEach((action, index) => {
  const div = document.createElement("div");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = `action-${index}`;

  checkbox.addEventListener("change", function () {
    if (this.checked) {
      totalSaved += action.co2;
    } else {
      totalSaved -= action.co2;
    }
    totalDisplay.textContent = totalSaved.toFixed(2);
    localStorage.setItem("climateTotal", totalSaved.toFixed(2));
  });

  const label = document.createElement("label");
  label.htmlFor = checkbox.id;
  label.textContent = `${action.text} (+${action.co2}kg CO₂)`;

  div.appendChild(checkbox);
  div.appendChild(label);
  listContainer.appendChild(div);
});
