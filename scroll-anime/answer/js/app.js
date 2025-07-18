document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("displayed");
            } else {
                entry.target.classList.remove("displayed");
            }});
        },{
            threshold: 1,});
            document.querySelectorAll(".box").forEach((box) => {
                observer.observe(box);});
            });
