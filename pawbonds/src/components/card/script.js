window.onload = pageReady;
function pageReady() {
  // desktop menu elements
  const learnMoreBtn = document.getElementsByClassName("learnMoreBtn");
  const ummooCard = document.getElementsByClassName("ummooCard");
  const ummooCardContainer = document.getElementsByClassName("ummooCardContainer");
  let currentCardIndex = null;

  // mouse enter
  Array.from(ummooCardContainer).forEach((ummooCardContainer, index) => {
    ummooCardContainer.onmouseover = ummooCardContainerMouseEnter;
    function ummooCardContainerMouseEnter() {
        const ummooCardContainer = document.getElementsByClassName("ummooCardContainer");
      currentCardIndex = index;
      ummooCardContainer[currentCardIndex].style.backgroundColor = "rgba(243, 248, 252, 1)";
      ummooCardContainer[currentCardIndex].style.border = "1px solid #e6e6e7ff";
      learnMoreBtn[currentCardIndex].style.transform = "translateY(-10%)";
    }
  });
  // mouse leave
  Array.from(ummooCardContainer).forEach((ummooCardContainer, index) => {
    ummooCardContainer.onmouseleave = ummooCardContainerMouseLeave;
    function ummooCardContainerMouseLeave() {
        const ummooCardContainer = document.getElementsByClassName("ummooCardContainer");
      currentCardIndex = index;
      ummooCardContainer[currentCardIndex].style.border = "none";
      ummooCardContainer[currentCardIndex].style.backgroundColor = "transparent";
      learnMoreBtn[currentCardIndex].style.transform = "translateY(-90%)";
    }
  });

  // 🍇
}
