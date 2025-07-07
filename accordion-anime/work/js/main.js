
const liItems = document.querySelectorAll(".list-item");

liItems.forEach((liItem) => {
  const inner = liItem.querySelector(".list-content");

  liItem.addEventListener("click", () => {
    const open = liItem.classList.contains("active");

    if (open){
      inner.style.height = "0px";
      liItem.classList.remove("active");
    }
    else {
      const innerHeight = inner.scrollHeight;
      inner.style.height = innerHeight + "px";
      liItem.classList.add("active");
    }
  });
});