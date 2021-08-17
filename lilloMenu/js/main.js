M.AutoInit();

document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".fixed-action-btn");
  var instances = M.FloatingActionButton.init(elems, {
    direction: "left",
    hoverEnabled: false,
  });
});



document.addEventListener("DOMContentLoaded", function () {
  var el = document.querySelector('.tabs');
  var instance = M.Tabs.init(el, {
    swipeable : true,
  });
});