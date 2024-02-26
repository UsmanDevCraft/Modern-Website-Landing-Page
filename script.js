// const backgrounds = [
//     "images/img_01.JPG",
//     "images/img_03.JPG",
//     "images/img_04.JPG",
//     "images/img_02.JPG",
// ];
// const back = document.querySelector("#back");
// let currentBackgroundIndex = 0;
// // console.log(back);
// back.addEventListener("click", ()=>{
//     gsap.to('body', {
//         backgroundImage: backgrounds[currentBackgroundIndex]
//     });
//     currentBackgroundIndex = (currentBackgroundIndex + 1) % backgrounds.length;
// });


const elem = document.querySelectorAll(".elem");


elem.forEach(function(e){
    var h1s = e.querySelectorAll("h1");
    var index = 0;
    document.querySelector(".main").addEventListener("click", ()=>{
    gsap.to(h1s[index], {
        top: "-=100%",
        ease: Expo.easeInOut,
        duration: 1,
        onComplete: function () {
            gsap.set(this._targets[0], {top: "100%"})
        },
    });

    index === h1s.length-1 ? (index = 0) : index++;

    gsap.to(h1s[index], {
        top: "-=100%",
        ease: Expo.easeInOut,
        duration: 1,
    });
});
});