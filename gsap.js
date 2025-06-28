gsap.registerPlugin(TextPlugin);


gsap.to(".hero-h1", {
  text: "Hi, I’m Elias Abera",
  duration: 3,
  delay: 1,
  transformOrigin: "50% 50% -160px",
  opacity: 1,
  ease: "power3",
  stagger: 0.25,
});
gsap.to(".hero-p", {
  text: "A passionate Full-Stack Developer & AI/IoT Innovator",
  duration: 4,
  delay: 3,
  transformOrigin: "50% 50% -160px",
  opacity: 1,
  ease: "power3",
  stagger: 0.25,
});


