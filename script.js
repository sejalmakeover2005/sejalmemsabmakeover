function setupAnnouncementStrip() {
  const e = document.querySelector(".announcement-content");
  if (!e) return;
  const t = e.cloneNode(!0);
  e.parentElement.appendChild(t);
  const n = e.offsetWidth,
    a = Math.max(20, n / 50);
  (e.style.animationDuration = `${a}s`), (t.style.animationDuration = `${a}s`);
}
const lenis = new Lenis({
  duration: 1.2,
  easing: (e) => Math.min(1, 1.001 - Math.pow(2, -10 * e)),
  smoothWheel: !0,
});
function handleImageAnimation() {
  window.innerWidth > 768 &&
    gsap.fromTo(
      ".image-container",
      { bottom: "0%", rotation: -5 },
      {
        bottom: "10%",
        rotation: 5,
        scrollTrigger: {
          trigger: ".section",
          start: "top top",
          end: "bottom bottom",
          scrub: !0,
        },
      }
    );
}
lenis.on("scroll", ScrollTrigger.update),
  gsap.ticker.add((e) => {
    lenis.raf(1e3 * e);
  }),
  gsap.ticker.lagSmoothing(0),
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin),
  document.querySelectorAll('a[href^="#"]').forEach((e) => {
    e.addEventListener("click", function (e) {
      e.preventDefault(),
        gsap.to(window, {
          duration: 1,
          scrollTo: { y: this.hash },
          ease: "power2.inOut",
        });
    });
  }),
  ScrollTrigger.create({
    trigger: ".section",
    start: "top top",
    end: "bottom bottom",
    pin: ".text-container",
    pinSpacing: !1,
  }),
  handleImageAnimation(),
  window.addEventListener("resize", handleImageAnimation),
  gsap.from(".main-text span", {
    opacity: 0,
    x: -100,
    duration: 1,
    ease: "power2.out",
    delay: 0.5,
  }),
  gsap.from(".main-text", {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power2.out",
    delay: 0.7,
  }),
  gsap.from(".sub-text", {
    opacity: 0,
    y: 30,
    duration: 1,
    ease: "power2.out",
    delay: 0.9,
  }),
  gsap.from(".book-btn", {
    opacity: 0,
    y: 20,
    duration: 1,
    ease: "power2.out",
    delay: 1.1,
  }),
  gsap.to(".decoration-image.bottom-left", {
    opacity: 1,
    x: -50,
    duration: 1,
    ease: "power2.out",
    delay: 1.3,
  }),
  gsap.to(".decoration-image.top-right", {
    opacity: 1,
    x: 50,
    duration: 1,
    ease: "power2.out",
    delay: 1.3,
  }),
  gsap.from(".nav-links li", {
    opacity: 0,
    y: -20,
    duration: 0.5,
    stagger: 0.1,
    ease: "power2.out",
  });
const hamburger = document.querySelector(".hamburger"),
  mobileMenu = document.querySelector(".mobile-menu"),
  closeMenu = document.querySelector(".close-menu");
if (hamburger && mobileMenu) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active"), mobileMenu.classList.toggle("active");
  });

  // Close menu when clicking close button
  if (closeMenu) {
    closeMenu.addEventListener("click", () => {
      mobileMenu.classList.remove("active"),
        hamburger.classList.remove("active");
    });
  }

  // Close menu when clicking on menu links
  const e = mobileMenu.querySelectorAll("a");
  e.length > 0 &&
    e.forEach((e) => {
      e.addEventListener("click", () => {
        mobileMenu.classList.remove("active"),
          hamburger.classList.remove("active");
      });
    });

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
      mobileMenu.classList.remove("active"),
        hamburger.classList.remove("active");
    }
  });
}
const servicesData = [
    {
      name: "Bridal Makeup",
      price: "₹15,000",
      img1: "https://i.pinimg.com/1200x/71/bd/ff/71bdff5c694d793a629f4d64a2d9e399.jpg",
      img2: "https://i.pinimg.com/736x/ed/d0/df/edd0df096bceb90e027389d02706ec74.jpg",
      category: "makeup",
    },
    {
      name: "Sider Makeup",
      price: "₹6,000",
      img1: "https://i.pinimg.com/736x/2a/0b/0c/2a0b0ce5d6a57607f73df8521bd95377.jpg",
      img2: "https://i.pinimg.com/736x/c0/3d/e4/c03de4e0bec1550b1d9b2d9bced39056.jpg",
      category: "makeup",
    },
    {
      name: "Party Makeup",
      price: "₹4,000",
      img1: "https://i.pinimg.com/736x/62/01/26/620126f72300813a704c94855cf6bb3b.jpg",
      img2: "https://i.pinimg.com/736x/19/08/08/1908088fd6a7afc6c4fe5a55c022e917.jpg",
      category: "makeup",
    },
    {
      name: "Sangeet Makeup",
      price: "₹7,000",
      img1: "https://i.pinimg.com/1200x/a9/9d/9a/a99d9af33a3a93e15bf4a3fef04888f6.jpg",
      img2: "https://i.pinimg.com/736x/35/d9/1f/35d91f8edb3d8816f1ba7869905c747f.jpg",
      category: "makeup",
    },
    {
      name: "Haldi Makeup",
      price: "₹3,500",
      img1: "https://i.pinimg.com/736x/9e/f6/3e/9ef63e1806e51e2c482a92931f0b15bd.jpg",
      img2: "https://i.pinimg.com/736x/75/ae/ab/75aeab80dcb51fa4a86491696e7c388a.jpg",
      category: "makeup",
    },
    {
      name: "Mehandi Makeup",
      price: "₹4,000",
      img1: "https://i.pinimg.com/736x/41/16/a7/4116a777c72c2702ca9bc7185ad24489.jpg",
      img2: "https://i.pinimg.com/1200x/7e/39/03/7e3903c77cc9138e938bf3febcdc2c4c.jpg",
      category: "makeup",
    },
    {
      name: "Groom Makeup",
      price: "₹2,000",
      img1: "https://i.pinimg.com/1200x/71/95/f5/7195f5dc8c5330e9c9282d6f2295ce36.jpg",
      img2: "https://i.pinimg.com/736x/9e/05/ae/9e05ae7b1be6a54cb8f19dbe48761d06.jpg",
      category: "makeup",
    },
    {
      name: "Hairstyle",
      price: "₹8,000",
      img1: "https://i.pinimg.com/736x/93/09/ec/9309ec900b92529b53d7bb9ab634c9c4.jpg",
      img2: "https://i.pinimg.com/736x/7b/9f/fa/7b9ffa2bea684cd774806c950f17e76b.jpg",
      category: "hair",
    },
    {
      name: "Haircut & Styling",
      price: "₹2,500",
      img1: "https://i.pinimg.com/736x/c2/d0/f4/c2d0f4275fb00c800ba273c708375419.jpg",
      img2: "https://i.pinimg.com/1200x/18/23/a9/1823a9e0bebd80b7e86ea80689a8e16b.jpg",
      category: "hair",
    },
    {
      name: "Hair Chemicals",
      price: "₹7,000",
      img1: "https://i.pinimg.com/1200x/2a/73/6d/2a736d8616c96358688eeab6d1a085c0.jpg",
      img2: "https://i.pinimg.com/1200x/69/16/0d/69160d7be31a78741b7a925ad3fec9d4.jpg",
      category: "hair",
    },
    {
      name: "Face and Body treatments",
      price: "₹5,000",
      img1: "https://i.pinimg.com/736x/1a/eb/c8/1aebc869c07279823f66e6d35e8d5557.jpg",
      img2: "https://i.pinimg.com/1200x/b1/ca/55/b1ca55c0c593e5860d84718c1141f93a.jpg",
      category: "skin",
    },
    {
      name: "Facial",
      price: "₹2,000",
      img1: "https://i.pinimg.com/1200x/8c/9f/a7/8c9fa7dbc6e87d9a2d83c5bf0acf7874.jpg",
      img2: "https://i.pinimg.com/1200x/57/9b/cc/579bcce2b8c36c2c2a8e764d6565af0d.jpg",
      category: "skin",
    },
    {
      name: "Cleanup",
      price: "₹4,500",
      img1: "https://i.pinimg.com/736x/e8/23/db/e823dbc6f78c5256824ef44dd4e24a48.jpg",
      img2: "https://i.pinimg.com/736x/a1/32/e2/a132e2bd0ae39c1b56c3dfd4b4f6a75a.jpg",
      category: "skin",
    },
    {
      name: "D-Tan Treatment",
      price: "₹1,800",
      img1: "https://i.pinimg.com/1200x/a3/af/a6/a3afa6350ce9415dab855a9ccdc2742b.jpg",
      img2: "https://i.pinimg.com/1200x/86/24/96/86249669d6cb25d9dcc5053a8f22bd78.jpg",
      category: "skin",
    },
    {
      name: "Body Waxing",
      price: "₹4,500",
      img1: "https://i.pinimg.com/736x/a2/93/d3/a293d32b9c524aa4526a59e48a9ea3c1.jpg",
      img2: "https://i.pinimg.com/736x/cf/bc/f7/cfbcf7828ad19967ca785c83f6dd8485.jpg",
      category: "skin",
    },
    {
      name: "Body Polishing & more",
      price: "₹4,500",
      img1: "https://i.pinimg.com/736x/d4/7c/5f/d47c5f007c80eb65409c173d10dabef3.jpg",
      img2: "https://i.pinimg.com/1200x/5d/0c/ed/5d0ced66453076be0e9df481560b1174.jpg",
      category: "skin",
    },
    {
      name: "Nail Extensions",
      price: "₹3,500",
      img1: "https://i.pinimg.com/736x/8c/bf/2d/8cbf2d156c9cd8aece7985fd6823607e.jpg",
      img2: "https://i.pinimg.com/736x/69/f5/2f/69f52fd9257f574ff0d52e3a8859e636.jpg",
      category: "nail",
    },
    {
      name: "False Nails (all Types)",
      price: "₹2,500",
      img1: "https://i.pinimg.com/736x/92/0d/d6/920dd6c76a85d7fdf5c14b69e08194ce.jpg",
      img2: "https://i.pinimg.com/736x/1a/29/1d/1a291dddbef99bfc06ef92a6206c2035.jpg",
      category: "nail",
    },
    {
      name: "Manicure",
      price: "₹2,500",
      img1: "https://i.pinimg.com/736x/51/2d/5e/512d5e07f23c022431b352b19e9ec435.jpg",
      img2: "https://i.pinimg.com/736x/30/ee/4f/30ee4fd898b7d019adfce5c248af3335.jpg",
      category: "nail",
    },
    {
      name: "Pedicure",
      price: "₹2,500",
      img1: "https://i.pinimg.com/1200x/43/51/45/435145513ce9f09e3755958a744abf27.jpg",
      img2: "https://i.pinimg.com/736x/c9/67/b4/c967b4471f85bf5fa062fe99d64d8302.jpg",
      category: "nail",
    },
    {
      name: "Nail Art Design",
      price: "₹2,500",
      img1: "https://i.pinimg.com/736x/c8/0d/6c/c80d6c1d905eec675820d386f306d3a1.jpg",
      img2: "https://i.pinimg.com/736x/b6/d2/f0/b6d2f0fca514c6215e8294554e82759e.jpg",
      category: "nail",
    },
    {
      name: "Bridal Mehandi",
      price: "₹12,000",
      img1: "https://i.pinimg.com/736x/60/01/12/6001127282094ed96d562510e0865d59.jpg",
      img2: "https://i.pinimg.com/736x/17/48/fd/1748fd5db6d1ccb1250b681f7b763f60.jpg",
      category: "mehandi",
    },
    {
      name: "Groom Mehandi",
      price: "₹3,000",
      img1: "https://i.pinimg.com/736x/2b/1c/94/2b1c94b4887b0f9612655b94c1c07b6b.jpg",
      img2: "https://i.pinimg.com/736x/28/5c/2a/285c2af0968e779bc9fc21b255b21afd.jpg",
      category: "mehandi",
    },
    {
      name: "Sider Mehandi",
      price: "₹3,000",
      img1: "https://i.pinimg.com/736x/1f/c8/11/1fc8113435ed794ae231941ed05c48aa.jpg",
      img2: "https://i.pinimg.com/736x/67/39/0a/67390a43c3dc2faa0eb76043ab4b4148.jpg",
      category: "mehandi",
    },
    {
      name: "Designer Dress Rental",
      price: "₹6,000/day",
      img1: "https://i.pinimg.com/736x/ed/ee/a7/edeea779afef51e85ae465e9b680a495.jpg",
      img2: "https://i.pinimg.com/736x/9c/4d/70/9c4d70fbdd1b59a60f2cc41677aaa333.jpg",
      category: "rental",
    },
    {
      name: "Traditional Jewellery Set",
      price: "₹4,000/day",
      img1: "https://i.pinimg.com/736x/37/d8/03/37d803e77a2a1da7c56f3cf691add774.jpg",
      img2: "https://i.pinimg.com/736x/fc/c7/cb/fcc7cb801c8db06aeb06f76d2e1bc1c2.jpg",
      category: "rental",
    },
  ],
  tabButtons = document.querySelectorAll(".tab-button"),
  cardsContainer = document.getElementById("cards-container");
function renderCards(e) {
  cardsContainer.innerHTML = "";
  servicesData
    .filter((t) => t.category === e)
    .forEach((e, t) => {
      const n = document.createElement("div");
      (n.className = "card"),
        (n.style.display = "block"),
        (n.style.opacity = 0),
        (n.style.transform = "translateY(30px)"),
        (n.innerHTML = `\n                <div class="card-image">\n                    <img class="front-image" src="${e.img1}" alt="${e.name}">\n                    <img class="back-image" src="${e.img2}" alt="${e.name} Back">\n                </div>\n                <div class="card-content">\n                    <div class="card-info">\n                        <h3 class="card-title">${e.name}</h3>\n                        <p class="card-price">${e.price}</p>\n                    </div>\n            <a href="#book" class="book-btn">Book Now <span><i class="ri-arrow-right-line"></i></span></a>\n                </div>\n            `),
        cardsContainer.appendChild(n),
        gsap.to(n, {
          opacity: 1,
          y: 0,
          duration: 0.4,
          delay: 0.1 * t,
          ease: "power2.out",
        });
    });
}
tabButtons.forEach((e) => {
  e.addEventListener("click", () => {
    const t = e.getAttribute("data-tab");
    tabButtons.forEach((e) => e.classList.remove("active")),
      e.classList.add("active"),
      renderCards(t);
  });
}),
  document.addEventListener("DOMContentLoaded", () => {
    renderCards("makeup");
  }),
  document.addEventListener("click", function (e) {
    const t = e.target.closest(".book-btn");
    if (!t) return;
    e.preventDefault();
    const n = t.closest(".card"),
      a = n.querySelector(".card-title").textContent,
      i = n.querySelector(".card-price").textContent,
      o = `https://wa.me/919216323136?text=${encodeURIComponent(
        `Hello Sejal Memsab, I want to book the following service:\n\nService: ${a}\nPrice: ${i}\n\nPlease confirm availability.`
      )}`;
    window.open(o, "_blank");
  }),
  gsap.registerPlugin(ScrollTrigger);
const scrollReveal = document.getElementById("scroll-reveal"),
  lines = gsap.utils.toArray(scrollReveal.querySelectorAll(".line"));
gsap.set(lines, { opacity: 0.1, filter: "blur(4px)" }),
  gsap.set(scrollReveal, { rotate: 3 }),
  gsap.to(scrollReveal, {
    rotate: 0,
    ease: "none",
    scrollTrigger: {
      trigger: scrollReveal,
      start: "top bottom",
      end: "top center",
      scrub: !0,
      toggleActions: "play none none reverse",
    },
  }),
  gsap.to(lines, {
    opacity: 1,
    filter: "blur(0px)",
    ease: "none",
    stagger: 0.3,
    scrollTrigger: {
      trigger: scrollReveal,
      start: "top bottom-=20%",
      end: "bottom bottom",
      scrub: !0,
      toggleActions: "play none none reverse",
    },
  });
const imageReveal = document.getElementById("image-reveal"),
  image = imageReveal.querySelector("img");
function initializeParallaxEffect() {
  document.querySelectorAll(".sm-course-image");
  const e = document.querySelectorAll(".sm-course-card");
  function t() {
    const t = window.scrollY,
      n = window.innerHeight;
    e.forEach((e, a) => {
      const i = e.offsetTop,
        o = e.offsetHeight,
        s = e.querySelector(".sm-course-image");
      if (t + n > i && t < i + o) {
        const e = 50 * ((t + n - i) / (n + o) - 0.5);
        s.style.transform = `translateY(${e}px) scale(1.1)`;
      }
    });
  }
  let n = !1;
  window.addEventListener(
    "scroll",
    function () {
      n ||
        (requestAnimationFrame(t),
        (n = !0),
        setTimeout(() => {
          n = !1;
        }, 16));
    },
    { passive: !0 }
  ),
    t();
}
function initializeButtonInteractions() {
  const e = document.querySelectorAll(".sm-enroll-btn"),
    t = [
      "Beauty & Makeup Course",
      "Mehandi Classes",
      "Hairstyles Classes",
      "Nail Art Course",
    ];
  e.forEach((e, n) => {
    e.addEventListener("click", function (a) {
      a.preventDefault(),
        (e.style.transform = "scale(0.95)"),
        setTimeout(() => {
          e.style.transform = "";
        }, 150);
      const i = `https://wa.me/919216323136?text=${encodeURIComponent(
        `Hello Sejal Memsab, I want to enroll in the following course:\n\nCourse: ${t[n]}\n\nPlease share the course details and availability.`
      )}`;
      window.open(i, "_blank");
    });
  });
}
gsap.set(image, { opacity: 0.3, filter: "blur(10px)" }),
  gsap.to(image, {
    opacity: 1,
    filter: "blur(0px)",
    ease: "none",
    scrollTrigger: {
      trigger: imageReveal,
      start: "top bottom",
      end: "top center",
      scrub: !0,
      toggleActions: "play none none reverse",
    },
  }),
  document.addEventListener("DOMContentLoaded", function () {
    initializeParallaxEffect(), initializeButtonInteractions();
  }),
  document.addEventListener("click", function (e) {
    const t = e.target.closest(".enroll-btn");
    if (!t || !t.closest(".sm-course-card")) return;
    e.preventDefault();
    const n = t.closest(".sm-course-card").querySelector(".sm-course-title");
    if (!n) return;
    const a = n.textContent.trim(),
      i = `https://wa.me/919216323136?text=${encodeURIComponent(
        `Hello Sejal, I want to enroll in:\n\nCourse: ${a}`
      )}`;
    (t.style.transform = "scale(0.95)"),
      setTimeout(() => (t.style.transform = ""), 150),
      setTimeout(() => window.open(i, "_blank"), 150);
  });
const observer = new IntersectionObserver(
  (e) => {
    e.forEach((e) => {
      e.isIntersecting &&
        ((e.target.style.animation = "sm-slideUpFade 0.8s ease forwards"),
        (e.target.style.opacity = "1"));
    });
  },
  { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
);
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".sm-course-card").forEach((e, t) => {
    (e.style.opacity = "0"),
      (e.style.transform = "translateY(50px)"),
      (e.style.animationDelay = 0.2 * t + "s"),
      observer.observe(e);
  });
});
const style = document.createElement("style");
(style.textContent =
  "\n  @keyframes sm-slideUpFade {\n    to {\n      opacity: 1;\n      transform: translateY(0);\n    }\n  }\n"),
  document.head.appendChild(style);
const testimonials = [
  {
    avatar:
      "https://i.pinimg.com/1200x/87/8c/df/878cdf76bf128afc7e2b882072326229.jpg",
    name: "Priya S.",
    role: "Wedding Client",
    text: " when I saw myself. Not because it was ‘perfect’ — but because I looked like ME, just… happier. Sejal didn’t cover my freckles — she highlighted them. My husband whispered ‘I forgot how beautiful you are’ — worth every rupee.",
  },
  {
    avatar:
      "https://i.pinimg.com/736x/ea/01/66/ea016667baf7ffed5e0077ca16a072ba.jpg",
    name: "Ananya M.",
    role: "First Makeup Session",
    text: "I told Sejal ‘I’m not photogenic, don’t waste your time’ — she laughed and said ‘Let me be the judge’. 2 hours later? I took 87 selfies. 87. My boyfriend is now jealous of my cheekbones. Book her. Seriously.",
  },
  {
    avatar:
      "https://i.pinimg.com/736x/81/8b/6a/818b6a11c90d14d16d7f2a5e1704e7a5.jpg",
    name: "Mrs. Kapoor & Riya",
    role: "Mother-Daughter Glam",
    text: "Went for a simple ‘get-together’ look. Sejal made us match — but not ‘matchy-matchy’. My daughter said ‘Maa, you look like a Bollywood mom now!’ — best compliment ever. We’re booking her for Diwali already.",
  },
  {
    avatar:
      "https://i.pinimg.com/736x/b2/1a/eb/b21aebed9e2a79b9dd02f64dea5e5556.jpg",
    name: "Neha R.",
    role: "Corporate Headshots",
    text: "I hate photos. Hate them. Sejal didn’t just ‘do my makeup’ — she calmed my nerves, made me laugh, and said ‘Your power is in your eyes — let’s make them speak’. My boss said ‘Whoa, new energy!’ — all thanks to her.",
  },
  {
    avatar:
      "https://i.pinimg.com/736x/8b/5a/55/8b5a553490271f46572e32f9733b1b55.jpg",
    name: "Divya P.",
    role: "Sangeet Night",
    text: "I wanted ‘bold’. Sejal gave me ‘bold but still me’. Glitter, winged liner, glow — but not overdone. Danced all night — makeup didn’t budge. 10/10 would cry happy tears again.",
  },
  {
    avatar:
      "https://i.pinimg.com/736x/b3/2b/5d/b32b5d6529ab702768ec91a6965eb23b.jpg",
    name: "Ayesha K.",
    role: "“Just For Me” Session",
    text: "I didn’t book for an event. I booked because I felt… invisible. Sejal didn’t rush. She asked about my favorite color, my insecurities, my dreams. By the end?",
  },
];
class TestimonialSlider {
  constructor() {
    (this.currentIndex = 0),
      (this.track = document.getElementById("testimonialTrack")),
      (this.prevBtn = document.getElementById("prevBtn")),
      (this.nextBtn = document.getElementById("nextBtn")),
      (this.testimonials = []),
      this.init();
  }
  init() {
    this.createTestimonialCards(),
      this.bindEvents(),
      this.updateSlider(),
      this.startAutoSlide();
  }
  createTestimonialCards() {
    this.track &&
      ((this.track.innerHTML = ""),
      testimonials.forEach((e) => {
        const t = document.createElement("div");
        (t.className = "testimonial-card"),
          (t.innerHTML = `\n                        <div class="quote-icon">"</div>\n                        <p class="testimonial-text">${e.text}</p>\n                        <div class="customer-info">\n                            <img src="${e.avatar}" alt="${e.role}" class="customer-avatar">\n                            <div class="customer-details">\n                                <h4>${e.name}</h4>\n                                <p>${e.role}</p>\n                            </div>\n                        </div>\n                    `),
          this.track.appendChild(t);
      }),
      this.updateTestimonials());
  }
  updateTestimonials() {
    if (!this.track) return;
    const e = this.track.querySelectorAll(".testimonial-card");
    (this.testimonials = Array.from(e)),
      (this.currentIndex = 0),
      this.updateSlider();
  }
  bindEvents() {
    this.prevBtn &&
      this.prevBtn.addEventListener("click", () => this.previous()),
      this.nextBtn && this.nextBtn.addEventListener("click", () => this.next()),
      document.addEventListener("keydown", (e) => {
        "ArrowLeft" === e.key && this.previous(),
          "ArrowRight" === e.key && this.next();
      }),
      this.track &&
        (this.track.addEventListener("mouseenter", () => this.pauseAutoSlide()),
        this.track.addEventListener("mouseleave", () =>
          this.resumeAutoSlide()
        ));
  }
  next() {
    this.testimonials.length <= 1 ||
      ((this.currentIndex = (this.currentIndex + 1) % this.testimonials.length),
      this.updateSlider());
  }
  previous() {
    this.testimonials.length <= 1 ||
      ((this.currentIndex =
        (this.currentIndex - 1 + this.testimonials.length) %
        this.testimonials.length),
      this.updateSlider());
  }
  updateSlider() {
    this.track &&
      0 !== this.testimonials.length &&
      (this.track.style.transform = `translateX(-${100 * this.currentIndex}%)`);
  }
  startAutoSlide() {
    this.autoSlideInterval = setInterval(() => {
      this.testimonials.length > 1 && this.next();
    }, 5e3);
  }
  pauseAutoSlide() {
    this.autoSlideInterval &&
      (clearInterval(this.autoSlideInterval), (this.autoSlideInterval = null));
  }
  resumeAutoSlide() {
    !this.autoSlideInterval &&
      this.testimonials.length > 1 &&
      this.startAutoSlide();
  }
}
document.addEventListener("DOMContentLoaded", () => {
  window.testimonialSlider = new TestimonialSlider();
}),
  document.addEventListener("DOMContentLoaded", function () {
    const e = document.getElementById("smContactForm"),
      t = document.getElementById("smContactSuccessMessage");
    e.addEventListener("submit", function (n) {
      n.preventDefault(),
        (function () {
          let t = !0;
          const n = e.querySelectorAll(
            ".sm-contact-form-input, .sm-contact-form-select"
          );
          n.forEach((e) => {
            e.classList.remove("error"),
              e.value.trim() || (e.classList.add("error"), (t = !1));
          });
          const a = /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            i = document.getElementById("smContactEmail");
          a.test(i.value) || (i.classList.add("error"), (t = !1));
          return t;
        })() &&
          (function () {
            const n = e.querySelector(".sm-contact-submit-btn"),
              a = n.textContent;
            (n.disabled = !0),
              (n.textContent = "Sending..."),
              fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: new FormData(e),
              })
                .then((e) => e.json())
                .then((n) => {
                  n.success &&
                    ((t.style.opacity = 1),
                    setTimeout(() => {
                      t.style.opacity = 0;
                    }, 5e3),
                    e.reset());
                })
                .catch(() => {})
                .finally(() => {
                  (n.disabled = !1),
                    (n.textContent = a),
                    setTimeout(() => {
                      t.classList.remove("show");
                    }, 5e3);
                });
          })();
    });
    e.querySelectorAll(
      ".sm-contact-form-input, .sm-contact-form-select"
    ).forEach((e) => {
      e.addEventListener("focus", function () {
        this.classList.remove("error");
      });
    });
  }),
  document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);
    const e = document.querySelectorAll(".gallery-temp-polaroid"),
      t = document.querySelector(".gallery-temp-btn");
    gsap.set(".gallery-temp-header", { opacity: 0, y: 20 }),
      gsap.set(".gallery-temp-title", { opacity: 0, y: 50 }),
      gsap.set(".gallery-temp-subtitle", { opacity: 0, y: 50 }),
      gsap.set(".gallery-temp-btn", { opacity: 0, y: 30 }),
      gsap.set(".gallery-temp-polaroid", { opacity: 0, y: 50 });
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".gallery-temp-container",
          start: "top center",
          end: "bottom center",
          toggleActions: "play none none reverse",
          markers: !1,
        },
      })
      .to(
        [
          ".gallery-temp-header",
          ".gallery-temp-title",
          ".gallery-temp-subtitle",
          ".gallery-temp-btn",
        ],
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
      )
      .to(
        ".gallery-temp-polaroid",
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power3.out" },
        "-=0.8"
      ),
      window.innerWidth > 768 &&
        e.forEach((e) => {
          e.addEventListener("mouseenter", function () {
            this.style.zIndex = "30";
          }),
            e.addEventListener("mouseleave", function () {
              setTimeout(() => {
                this.style.zIndex = "1";
              }, 300);
            });
        }),
      t &&
        t.addEventListener("click", function () {
          (this.style.transform = "scale(0.95)"),
            setTimeout(() => {
              this.style.transform = "scale(1)";
            }, 150);
        }),
      window.addEventListener("resize", function () {
        window.innerWidth <= 768 &&
          e.forEach((e) => {
            (e.style.transform = "none"), (e.style.position = "static");
          });
      });
  }),
  document.addEventListener("DOMContentLoaded", function () {
    const e = window.supabase.createClient(
        "https://zyccqzskdnxbdujqrwfx.supabase.co",
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp5Y2NxenNrZG54YmR1anFyd2Z4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg1NTkzMDUsImV4cCI6MjA3NDEzNTMwNX0.EOcASUc2J_zUdvfzQNYuvtXFCREBliKDA6HxmKquPTk"
      ),
      t = document.getElementById("reviewForm"),
      n = document.getElementById("starRating"),
      a = document.getElementById("ratingValue"),
      i = document.getElementById("testimonialTrack");
    function o(e, t) {
      e.forEach((e, n) => {
        n < t
          ? (e.classList.add("filled"), (e.innerHTML = "★"))
          : (e.classList.remove("filled"), (e.innerHTML = "☆"));
      });
    }
    async function s() {
      try {
        const { data: t, error: n } = await e
          .from("reviews")
          .select("*")
          .order("created_at", { ascending: !1 });
        if (n) throw n;
        t &&
          t.length > 0 &&
          i &&
          (function (e) {
            if (!i) return;
            (i.innerHTML = ""),
              e.forEach((e) => {
                const t = (function (e) {
                  const t = document.createElement("div");
                  t.className = "testimonial-card";
                  const n =
                      ((o = e.review),
                      (s = 150),
                      o.length <= s
                        ? o
                        : o.substring(0, s).replace(/\s+\S*$/, "") + "..."),
                    a = e.name.charAt(0).toUpperCase(),
                    i = e.stars || 5;
                  var o, s;
                  if (
                    ((t.innerHTML = `\n                    <div class="quote-icon">"</div>\n                    <p class="testimonial-text">${n}</p>\n                    ${
                      e.review.length > 150
                        ? '<span class="see-more-link" data-id="' +
                          (e.id || "") +
                          '">See More</span>'
                        : ""
                    }\n                    <div class="testimonial-rating">\n                        ${c(
                      i
                    )}\n                    </div>\n                    <div class="customer-info">\n                        <div class="customer-avatar">${a}</div>\n                        <div class="customer-details">\n                            <h4>${
                      e.name
                    }</h4>\n                            <p>Client Review</p>\n                        </div>\n                    </div>\n                `),
                    e.review.length > 150)
                  ) {
                    const n = t.querySelector(".see-more-link");
                    n &&
                      n.addEventListener("click", () =>
                        (function (e) {
                          let t = document.querySelector(".review-modal");
                          t ||
                            ((t = document.createElement("div")),
                            (t.className = "review-modal"),
                            (t.innerHTML =
                              '\n                        <div class="modal-content">\n                            <button class="modal-close">&times;</button>\n                            <div class="modal-header">\n                                <div class="modal-avatar"></div>\n                                <div class="modal-name"></div>\n                                <div class="modal-rating"></div>\n                            </div>\n                            <div class="modal-review"></div>\n                        </div>\n                    '),
                            document.body.appendChild(t));
                          const n = t.querySelector(".modal-content"),
                            a = t.querySelector(".modal-close"),
                            i = e.name.charAt(0).toUpperCase();
                          (n.querySelector(".modal-avatar").textContent = i),
                            (n.querySelector(".modal-name").textContent =
                              e.name),
                            (n.querySelector(".modal-rating").innerHTML = c(
                              e.stars
                            )),
                            (n.querySelector(".modal-review").textContent =
                              e.review),
                            t.classList.add("show"),
                            a.addEventListener("click", r),
                            t.addEventListener("click", function (e) {
                              e.target === t && r();
                            }),
                            document.addEventListener("keydown", function (e) {
                              "Escape" === e.key &&
                                t.classList.contains("show") &&
                                r();
                            });
                        })(e)
                      );
                  }
                  return t;
                })(e);
                i.appendChild(t);
              }),
              (function () {
                if (!i) return;
                [
                  {
                    avatar:
                      "https://i.pinimg.com/1200x/87/8c/df/878cdf76bf128afc7e2b882072326229.jpg",
                    name: "Priya S.",
                    role: "Wedding Client",
                    text: " when I saw myself. Not because it was 'perfect' — but because I looked like ME, just… happier. Sejal didn't cover my freckles — she highlighted them. My husband whispered 'I forgot how beautiful you are' — worth every rupee.",
                  },
                  {
                    avatar:
                      "https://i.pinimg.com/736x/ea/01/66/ea016667baf7ffed5e0077ca16a072ba.jpg",
                    name: "Ananya M.",
                    role: "First Makeup Session",
                    text: "I told Sejal 'I'm not photogenic, don't waste your time' — she laughed and said 'Let me be the judge'. 2 hours later? I took 87 selfies. 87. My boyfriend is now jealous of my cheekbones. Book her. Seriously.",
                  },
                  {
                    avatar:
                      "https://i.pinimg.com/736x/81/8b/6a/818b6a11c90d14d16d7f2a5e1704e7a5.jpg",
                    name: "Mrs. Kapoor & Riya",
                    role: "Mother-Daughter Glam",
                    text: "Went for a simple 'get-together' look. Sejal made us match — but not 'matchy-matchy'. My daughter said 'Maa, you look like a Bollywood mom now!' — best compliment ever. We're booking her for Diwali already.",
                  },
                  {
                    avatar:
                      "https://i.pinimg.com/736x/b2/1a/eb/b21aebed9e2a79b9dd02f64dea5e5556.jpg",
                    name: "Neha R.",
                    role: "Corporate Headshots",
                    text: "I hate photos. Hate them. Sejal didn't just 'do my makeup' — she calmed my nerves, made me laugh, and said 'Your power is in your eyes — let's make them speak'. My boss said 'Whoa, new energy!' — all thanks to her.",
                  },
                  {
                    avatar:
                      "https://i.pinimg.com/736x/8b/5a/55/8b5a553490271f46572e32f9733b1b55.jpg",
                    name: "Divya P.",
                    role: "Sangeet Night",
                    text: "I wanted 'bold'. Sejal gave me 'bold but still me'. Glitter, winged liner, glow — but not overdone. Danced all night — makeup didn't budge. 10/10 would cry happy tears again.",
                  },
                  {
                    avatar:
                      "https://i.pinimg.com/736x/b3/2b/5d/b32b5d6529ab702768ec91a6965eb23b.jpg",
                    name: "Ayesha K.",
                    role: "Just For Me Session",
                    text: "I didn't book for an event. I booked because I felt… invisible. Sejal didn't rush. She asked about my favorite color, my insecurities, my dreams. By the end?",
                  },
                ].forEach((e) => {
                  const t = document.createElement("div");
                  (t.className = "testimonial-card"),
                    (t.innerHTML = `\n                        <div class="quote-icon">"</div>\n                        <p class="testimonial-text">${e.text}</p>\n                        <div class="customer-info">\n                            <img src="${e.avatar}" alt="${e.role}" class="customer-avatar">\n                            <div class="customer-details">\n                                <h4>${e.name}</h4>\n                                <p>${e.role}</p>\n                            </div>\n                        </div>\n                    `),
                    i.appendChild(t);
                });
              })(),
              window.testimonialSlider &&
                window.testimonialSlider.updateTestimonials();
          })(t);
      } catch (t) {}
    }
    function r() {
      const e = document.querySelector(".review-modal");
      e && e.classList.remove("show");
    }
    function c(e) {
      let t = "";
      for (let n = 1; n <= 5; n++)
        t += `<span class="modal-star">${n <= e ? "★" : "☆"}</span>`;
      return t;
    }
    function l(e, n) {
      const a = document.querySelector(".success-message, .error-message");
      a && a.remove();
      const i = document.createElement("div");
      (i.className = "success" === n ? "success-message" : "error-message"),
        (i.textContent = e),
        t && t.parentNode && t.parentNode.insertBefore(i, t),
        setTimeout(() => {
          i.parentNode && i.remove();
        }, 5e3);
    }
    !(function () {
      s(),
        n &&
          a &&
          (function () {
            const e = n.querySelectorAll(".star");
            e.forEach((t) => {
              t.addEventListener("click", function () {
                const t = parseInt(this.getAttribute("data-rating"));
                e.forEach((e, n) => {
                  n < t
                    ? (e.classList.add("filled"), (e.innerHTML = "★"))
                    : (e.classList.remove("filled"), (e.innerHTML = "☆"));
                }),
                  (a.value = t);
              }),
                t.addEventListener("mouseenter", function () {
                  const t = parseInt(this.getAttribute("data-rating"));
                  o(e, t);
                }),
                t.addEventListener("mouseleave", function () {
                  const t = parseInt(a.value);
                  o(e, t);
                });
            });
          })();
      t &&
        t.addEventListener("submit", async function (i) {
          i.preventDefault();
          const r = new FormData(this),
            c = r.get("name"),
            d = parseInt(r.get("stars")),
            m = r.get("review");
          if (!c.trim() || !m.trim() || d < 1 || d > 5)
            l("Please fill in all fields and select a rating.", "error");
          else
            try {
              const { data: i, error: r } = await e
                .from("reviews")
                .insert([{ name: c.trim(), stars: d, review: m.trim() }])
                .select();
              if (r) throw r;
              l(
                "Thank you for your review! It has been submitted successfully.",
                "success"
              ),
                t.reset(),
                (a.value = "5"),
                o(n.querySelectorAll(".star"), 0),
                s();
            } catch (p) {
              l(
                "There was an error submitting your review. Please try again.",
                "error"
              );
            }
        });
    })();
    const d = document.createElement("style");
    (d.textContent ="\n .see-more-link {\n                    color: #8a2154;\n                    cursor: pointer;\n                    text-decoration: underline;\n                    font-weight: 500;\n                    display: block;\n                    margin: 10px 0;\n                    font-size: 0.9rem;\n                }\n                \n                .see-more-link:hover {\n                    color: #be226d;\n                }\n\n                .review-modal {\n                    position: fixed;\n                    top: 0;\n                    left: 0;\n                    width: 100%;\n                    height: 100%;\n                    background: rgba(0, 0, 0, 0.7);\n                    display: flex;\n                    align-items: center;\n                    justify-content: center;\n                    z-index: 1000;\n                    opacity: 0;\n                    visibility: hidden;\n                    transition: all 0.3s ease;\n                    backdrop-filter: blur(5px);\n                }\n\n                .review-modal.show {\n                    opacity: 1;\n                    visibility: visible;\n                }\n\n                .modal-content {\n                    background: white;\n                    border-radius: 20px;\n                    padding: 40px;\n                    max-width: 600px;\n                    width: 90%;\n                    max-height: 80vh;\n                    overflow-y: auto;\n                    position: relative;\n                    transform: scale(0.8);\n                    transition: transform 0.3s ease;\n                }\n\n                .review-modal.show .modal-content {\n                    transform: scale(1);\n                }\n\n                .modal-close {\n                    position: absolute;\n                    top: 20px;\n                    right: 20px;\n                    background: #8a2154;\n                    color: white;\n                    border: none;\n                    width: 40px;\n                    height: 40px;\n                    border-radius: 50%;\n                    cursor: pointer;\n                    font-size: 1.2rem;\n                    display: flex;\n                    align-items: center;\n                    justify-content: center;\n                    transition: background 0.3s ease;\n                }\n\n                .modal-close:hover {\n                    background: #be226d;\n                }\n\n                .modal-header {\n                    margin-bottom: 20px;\n                    padding-right: 40px;\n                }\n\n                .modal-avatar {\n                    width: 60px;\n                    height: 60px;\n                    border-radius: 50%;\n                    background: #8a2154;\n                    color: white;\n                    display: flex;\n                    align-items: center;\n                    justify-content: center;\n                    font-weight: bold;\n                    font-size: 1.5rem;\n                    text-transform: uppercase;\n                    margin-bottom: 15px;\n                }\n\n                .modal-name {\n                    font-size: 1.5rem;\n                    font-weight: 600;\n                    color: #8a2154;\n                    margin-bottom: 10px;\n                }\n\n                .modal-rating {\n                    display: flex;\n                    gap: 3px;\n                    margin-bottom: 20px;\n                }\n\n                .modal-star {\n                    color: #ffd700;\n                    font-size: 1.2rem;\n                }\n\n                .modal-review {\n                    color: #5c4033;\n                    line-height: 1.7;\n                    font-size: 1.1rem;\n                }\n\n                .error-message {\n                    background: #e74c3c;\n                    color: white;\n                    padding: 15px 20px;\n                    border-radius: 10px;\n                    text-align: center;\n                    margin-bottom: 20px;\n                    opacity: 0;\n                    transform: translateY(-20px);\n                    transition: all 0.3s ease;\n                }\n\n                .error-message.show {\n                    opacity: 1;\n                    transform: translateY(0);\n                }\n            "),
      document.head.appendChild(d);
  });
