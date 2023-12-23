function setTheme() {
  const root = document.documentElement;
  const newTheme = root.className === "light" ? "dark" : "light";
  root.className = newTheme;

  const moonSvg = document.querySelector("svg.moon");

  const currentColor = moonSvg.getAttribute("fill");

  const newColor = currentColor === "white" ? "black" : "white";
  moonSvg.setAttribute("fill", newColor);
  const svgs = document.querySelectorAll("aside path:not(.settings)");
  const settingSVG = document.querySelector("aside path.settings");
  const currentSettingFill = settingSVG.getAttribute("stroke");
  const newSettingFill = currentSettingFill === "white" ? "black" : "white";
  settingSVG.setAttribute("stroke", newSettingFill);

  svgs.forEach(function (svg) {
    const currentSVGFill = svg.getAttribute("fill");
    const newSVGFill = currentSVGFill === "white" ? "black" : "white";
    svg.setAttribute("fill", newSVGFill);
    const currentSVGStroke = svg.getAttribute("stroke");
    const newSVGStroke = currentSVGStroke === "white" ? "black" : "white";
    svg.setAttribute("stroke", newSVGStroke);
  });
}

document.querySelector("svg.moon").addEventListener("click", setTheme);
