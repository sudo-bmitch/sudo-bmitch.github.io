$(()=>{
  $(".dark-mode").click(()=>{
    $(document.body).toggleClass("dark-mode");
    const isDark = $(document.body).hasClass("dark-mode");
    if (typeof ga !== 'undefined') {
      ga('send', 'event', 'Nav', 'dark', isDark ? "enabled": "disabled");
    }
  })
})
