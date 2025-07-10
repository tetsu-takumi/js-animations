const listItems = document.querySelectorAll(".list-item");
listItems.forEach((item) => {
  const inner = item.querySelector(".list-content");

  item.addEventListener("click", () => {
    const open = item.classList.contains("active");

    if (open) {
      inner.style.height = "0px";
      item.classList.remove("active");
    }

  else {
      const innerHeight = inner.scrollHeight;
      inner.style.height = innerHeight + "px";
      item.classList.add("active");
    }
  });
});