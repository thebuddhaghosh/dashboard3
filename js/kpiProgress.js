const circularProgress = document.querySelectorAll(".circular-progress");

Array.from(circularProgress).forEach((progressBar) => {
  const progressValue = progressBar.querySelector(".percentage");
  const innerCircle = progressBar.querySelector(".inner-circle");

  let startValue = 0;
  const endValue = Number(progressBar.getAttribute("data-percentage"));
  const maxValue = 60; // total value (60/60)
  const speed = 50;

  const progressColor = progressBar.getAttribute("data-progress-color");
  const bgColor = progressBar.getAttribute("data-bg-color");
  const innerColor = progressBar.getAttribute("data-inner-circle-color");

  const progress = setInterval(() => {
    startValue++;

    // Update text
    progressValue.innerHTML  = `<span>${startValue}</span>/<strong>${maxValue}</strong>`;
    progressValue.style.color = progressColor;

    // Inner circle color
    innerCircle.style.backgroundColor = innerColor;

    // Calculate correct degree dynamically
    const degree = (startValue / maxValue) * 360;

    progressBar.style.background = `conic-gradient(
      ${progressColor} ${degree}deg,
      ${bgColor} 0deg
    )`;

    if (startValue >= endValue) {
      clearInterval(progress);
    }
  }, speed);
});