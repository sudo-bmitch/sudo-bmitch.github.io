$(() => {
  $(".show-wizard").click(() => {
    if (typeof ga !== 'undefined') {
      ga('send', 'event', 'Menu', 'click-wizard');
    }
    $("#welcomeModal").modal();
  });
});
