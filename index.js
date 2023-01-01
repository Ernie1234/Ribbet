let path = document.querySelector("path");
let pathLength = path.getTotalLength();

path.style.strokeDasharray = pathLength + " " + pathLength;

path.style.strokeDashoffset = pathLength;

window.addEventListener("scroll", () => {
  var scrollPercentage =
    (document.documentElement.scrollTop + document.body.scrollTop) /
    (document.documentElement.scrollHeight -
      document.documentElement.clientHeight);

  var drawLength = pathLength * scrollPercentage;

  path.style.strokeDashoffset = pathLength - drawLength;
});

var rellax = new Rellax(".rellax", {
  breakpoints: [600, 800, 1000, 1200],
});

// , {
//   horizontal: true,
//   vertical: false,
// }
