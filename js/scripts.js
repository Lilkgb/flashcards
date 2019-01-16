$(document).ready(function() {


  $("#js1").click(function() {
    $("#js").slideToggle("slow");
    $(".card").flip();
  });

  $("#operators1").click(function() {
    $("#operators").slideToggle("slow");
    $(".card").flip();
  });

  $("#variables1").click(function() {
    $("#variables").slideToggle("slow");
    $(".card").flip();
  });

  $("#varname1").click(function() {
    $("#varname").slideToggle("slow");
    $(".card").flip();
  });

  $("#functions1").click(function() {
    $("#functions").slideToggle("slow");
    $(".card").flip();
  });

  $("#methods1").click(function() {
    $("#methods").slideToggle("slow");
    $(".card").flip();
  });

  $("#arguments1").click(function() {
    $("#arguments").slideToggle("slow");
    $(".card").flip();
  });

  $("#parameters1").click(function() {
    $("#parameters").slideToggle("slow");
    $(".card").flip();
  });

  $("#return1").click(function() {
    $("#return").slideToggle("slow");
    $(".card").flip();
  });

  $("#chaining1").click(function() {
    $("#chaining").slideToggle("slow");
    $(".card").flip();
  });

  $("#strings1").click(function() {
    $("#strings").slideToggle("slow");
    $(".card").flip();
  });

  $("#booleans1").click(function() {
    $("#booleans").slideToggle("slow");
    $(".card").flip();
  });

  $("#undefined1").click(function() {
    $("#undefined").slideToggle("slow");
    $(".card").flip();
  });

  $("#nan1").click(function() {
    $("#nan").slideToggle("slow");
    $(".card").flip();
  });

  $("#escape1").click(function() {
    $("#escape").slideToggle("slow");
    $(".card").flip();
  });

  $("#alert1").click(function() {
    $("#alert").slideToggle("slow");
    $(".card").flip();
  });

  $("#comments1").click(function() {
    $("#comments").slideToggle("slow");
    $(".card").flip();
  });

  $("#jquery1").click(function() {
    $("#jquery").slideToggle("slow");
    $(".card").flip();
  });

  $("#attributes1").click(function() {
    $("#attributes").slideToggle("slow");
    $(".card").flip();
  });

  $("button#white").click(function() {
    $("body").removeClass();
    $("body").addClass("white-background");
  });

  $("button#black").click(function() {
    $("body").removeClass();
    $("body").addClass("black-background");
  });

  $("button#red").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background");
  });
});
