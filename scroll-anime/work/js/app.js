document.addEventListener("DOMContentLoaded",() => {
  const see = new IntersectionObserver((inObjects) => {
    inObjects.forEach((inObject) => {
      if (inObject.isIntersecting) {
        inObject.target.classList.add("displayed");
      } else {
        inObject.target.classList.remove("displayed");
      }
    });
  },{
    threshold: 1,});
  
  document.querySelectorAll(".box").forEach((box) => {
    see.observe(box);
  });
});