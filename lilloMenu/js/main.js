// M.AutoInit();

document.addEventListener('DOMContentLoaded',function(){
  var modal_view = document.querySelectorAll('.modal');
  var btn_action = document.querySelectorAll(".fixed-action-btn");
  var el = document.querySelector('.tabs');
  var instances = M.Modal.init(modal_view)
  var instances = M.FloatingActionButton.init(btn_action, {
    direction: "left",
    hoverEnabled: false,
  });
  var instance = M.Tabs.init(el, {
    swipeable : true,
  });
})


// document.addEventListener('DOMContentLoaded', function() {
//   var elems = document.querySelectorAll('.modal');
//   var instances = M.Modal.init(elems);
// });


// document.addEventListener("DOMContentLoaded", function () {
//   var elems = document.querySelectorAll(".fixed-action-btn");
//   var instances = M.FloatingActionButton.init(elems, {
//     direction: "left",
//     hoverEnabled: false,
//   });
// });


// document.addEventListener("DOMContentLoaded", function () {
//   var el = document.querySelector('.tabs');
//   var instance = M.Tabs.init(el, {
//     swipeable : true,
//   });
// });