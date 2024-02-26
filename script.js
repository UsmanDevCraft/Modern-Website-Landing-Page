// const back = document.querySelectorAll(".back");
// back.forEach(function(e){
//     var imgs = e.querySelectorAll("img");
//     var j = 0;
//     document.querySelector(".main").addEventListener("click", ()=>{
//         gsap.to(imgs[j], {
//             top:"-=100%",
//             ease: Expo.easeInOut,
//             duration: 1,
//             onComplete: function () {
//                 gsap.set(this._targets[0], {top: "100%"})
//             },
//         });
//         j === imgs.length-1 ? (j = 0) : j++;

//         gsap.to(imgs[j], {
//             top: "-=100%",
//             ease: Expo.easeInOut,
//             duration: 1,
//         });
//     });
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