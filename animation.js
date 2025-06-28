const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log("hello")
    }
  });
});
const section= document.querySelectorAll(".about");
section.forEach((el) => observer.observe(el));
