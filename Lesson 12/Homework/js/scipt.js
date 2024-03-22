$(document).ready(function () {
  $(".main_btna").on("click", function () {
    $(".overlay").fadeIn("slow");
    $(".modal").animate({ height: "toggle" }, 2000);
  });
  $("button.close").on("click", function () {
    $(".modal").animate({ height: "toggle" }, 2000);
    $(".overlay").fadeOut("slow");
  });
});
