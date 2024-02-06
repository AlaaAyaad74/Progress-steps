const under = document.getElementById("under");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const nums = document.querySelectorAll(".num");

let currentActive = 1;

nextButton.addEventListener("click", () => {
  currentActive++;
  if (currentActive > nums.length) {
    currentActive = nums.length;
  }

  /**enable prev Button */
  if (currentActive > 1) {
    prevButton.disabled = false;
  }
  update();
});

prevButton.addEventListener("click", () => {
  currentActive--;
  if (currentActive <= 1) {
    currentActive = 1;
    prevButton.disabled = true;
  }
  update();
  //   nums[currentActive - 1].classList.remove("active");
});
function update() {
  nums.forEach((num, index) => {
    if (index < currentActive) {
      num.classList.add("active");
    } else {
      num.classList.remove("active");
    }
  });
  const actives = document.querySelectorAll(".active");
  under.style.width = ((actives.length - 1) / (nums.length - 1)) * 100 + "%";
  if (currentActive >= 4) {
    nextButton.disabled = true;
  } else {
    nextButton.disabled = false;
  }
}
