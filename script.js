// SCRIPT FOR IMAGE EFFECT
Shery.imageEffect(".back", {
  style: 5,
  config: {
    a: { value: 1.49, range: [0, 30] },
    b: { value: -0.95, range: [-1, 1] },
    aspect: { value: 2.1584 },
    gooey: { value: true },
    infiniteGooey: { value: true },
    durationOut: { value: 1, range: [0.1, 5] },
    durationIn: { value: 1.5, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: true },
    maskVal: { value: 1.2, range: [1, 5] },
    scrollType: { value: 0 },
    geoVertex: { range: [1, 64], value: 1 },
    noEffectGooey: { value: false },
    onMouse: { value: 1 },
    noise_speed: { value: 1.16, range: [0, 10] },
    metaball: { value: 0.2, range: [0, 2] },
    discard_threshold: { value: 0.5, range: [0, 1] },
    antialias_threshold: { value: 0, range: [0, 0.1] },
    noise_height: { value: 0.5, range: [0, 2] },
    noise_scale: { value: 12.4, range: [0, 100] },
  },
  gooey: true,
});



// SCRIPT FOR TEXT ANIMATION
var elements = document.querySelectorAll(".elem");
elements.forEach((elem) => {
  let h1All = elem.querySelectorAll("h1");
  var index = 0;
  var animation = false;
  document.querySelector(".main").addEventListener("click", () => {
    if(!animation){
      animation = true;
      gsap.to(h1All[index], {
        top: "-=100%",
        duration: 1,
        ease: Expo.easeInOut,
        onComplete: function () {
          gsap.set(this._targets[0], {
            top: "100%",
          });
          animation = false;
        },
      });
  
      index === h1All.length - 1 ? (index = 0) : index++;
      gsap.to(h1All[index], {
        top: "-=100%",
        duration: 1,
        ease: Expo.easeInOut,
      });
    };
  });
});