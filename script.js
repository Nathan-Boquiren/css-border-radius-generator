let cl = console.log;

// DOM ELements

const shape = document.getElementById("shape");

const topLeft_H_Slider = document.getElementById("tl-h-slider");
const topLeft_V_Slider = document.getElementById("tl-v-slider");

const topRight_H_Slider = document.getElementById("tr-h-slider");
const topRight_V_Slider = document.getElementById("tr-v-slider");

const bottomRight_H_Slider = document.getElementById("br-h-slider");
const bottomRight_V_Slider = document.getElementById("br-v-slider");

const bottomLeft_H_Slider = document.getElementById("bl-h-slider");
const bottomLeft_V_Slider = document.getElementById("bl-v-slider");

const sliders = document.querySelectorAll(".slider");

const valuesWrapper = document.getElementById("values-wrapper");
const valuesBtn = document.getElementById("values-container");
const copyMsg = document.getElementById("copy-msg");

// Slider event listener

sliders.forEach((slider) => {
  slider.addEventListener("input", updateShape);
});

function updateShape() {
  const tlH = topLeft_H_Slider.value;
  const tlV = topLeft_V_Slider.value;

  const trH = topRight_H_Slider.value;
  const trV = topRight_V_Slider.value;

  const brH = bottomRight_H_Slider.value;
  const brV = bottomRight_V_Slider.value;

  const blH = bottomLeft_H_Slider.value;
  const blV = bottomLeft_V_Slider.value;

  const borderRadiusStyle = `${tlH}% ${trH}% ${brH}% ${blH}% / ${tlV}% ${trV}% ${brV}% ${blV}%`;

  shape.style.borderRadius = borderRadiusStyle;

  updateValues(borderRadiusStyle);
}
// Update values container

function updateValues(borderRadiusStyle) {
  valuesWrapper.innerHTML = borderRadiusStyle;
}

// Initial shape
updateShape();

valuesBtn.addEventListener("click", () => {
  let valueToCopy = valuesWrapper.innerHTML;
  window.navigator.clipboard.writeText(valueToCopy);
  copyMsg.classList.add("show");
  setTimeout(() => {
    copyMsg.classList.remove("show");
  }, 1500);
});
