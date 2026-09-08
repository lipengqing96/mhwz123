/* GSAP Animations - LuxeRank */
(function() {
  "use strict";
  function initWhenReady() {
    if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
      setTimeout(initWhenReady, 50);
      return;
    }
    ScrollTrigger.matchMedia({
      "(min-width: 1024px)": function() { initAnimations(); },
      "(max-width: 1023px)": function() { initAnimations(); }
    });
  }
  function initAnimations() {
    gsap.utils.toArray("[data-gsap-reveal]").forEach(function(el) {
      gsap.from(el, { scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none reverse" }, y: 40, opacity: 0, duration: 0.8, ease: "power2.out" });
    });
    gsap.utils.toArray(".gsap-stagger").forEach(function(container) {
      var cards = container.querySelectorAll(".gsap-card");
      if (cards.length > 0) {
        gsap.from(cards, { scrollTrigger: { trigger: container, start: "top 80%", toggleActions: "play none none reverse" }, y: 50, opacity: 0, duration: 0.6, stagger: 0.1, ease: "power2.out" });
      }
    });
    var heroBg = document.querySelector("[data-parallax-bg]");
    if (heroBg) {
      var section = heroBg.closest("section");
      if (section) {
        gsap.to(heroBg, { scrollTrigger: { trigger: section, start: "top bottom", end: "bottom top", scrub: true }, y: -80, ease: "none" });
      }
    }
    gsap.utils.toArray("[data-float]").forEach(function(el, i) {
      gsap.to(el, { y: i % 2 === 0 ? -12 : 12, duration: 2 + i * 0.3, repeat: -1, yoyo: true, ease: "sine.inOut" });
    });
    gsap.utils.toArray("[data-gold-line]").forEach(function(el) {
      gsap.from(el, { scrollTrigger: { trigger: el, start: "top 90%", toggleActions: "play none none reverse" }, scaleX: 0, duration: 0.8, ease: "power2.out", transformOrigin: "left center" });
    });
    gsap.utils.toArray("[data-counter]").forEach(function(el) {
      var target = parseInt(el.dataset.counter);
      if (isNaN(target)) return;
      var obj = { val: 0 };
      gsap.to(obj, { scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none reverse" }, val: target, duration: 2, ease: "power1.out", onUpdate: function() { el.textContent = Math.floor(obj.val).toLocaleString() + (el.dataset.suffix || ""); } });
    });
    ScrollTrigger.refresh();
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initWhenReady);
  } else {
    initWhenReady();
  }
})();
