const items = document.querySelectorAll(".list-item");

items.forEach((item) => {
  const content = item.querySelector(".list-content");

  item.addEventListener("click", () => {
    const isOpen = item.classList.contains("active");

    if (isOpen) {
      content.style.height = "0px";
      item.classList.remove("active");
    } else {
      const contentHeight = content.scrollHeight;
      content.style.height = contentHeight + "px";
      item.classList.add("active");
    }
  });
});
