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
