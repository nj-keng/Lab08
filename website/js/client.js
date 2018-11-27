$(document).ready(function() {
console.log("in client");
  $('#agility').click(function(e) {

    // don't allow the anchor to visit the link
    e.preventDefault();

    $.ajax({
      url: "/get-character",
      dataType: "html",
      type: "GET",
      data: {format: "agility-list"},
      success: function(data) {
        console.log("SUCCESS HTML:", data);
        $("#div_char_container").html(data);

      },
      error: function(jqXHR, textStatus, errorThrown) {
        $("#div_char_container").text(jqXHR.statusText);
        console.log("ERROR:", jqXHR, textStatus, errorThrown);
      }
    });
  });

  $('#power').click(function(e) {

    // don't allow the anchor to visit the link
    e.preventDefault();

    $.ajax({
      url: "/get-character",
      dataType: "html",
      type: "GET",
      data: {
        format: "power-list"
      },
      success: function(data) {
        console.log("SUCCESS HTML:", data);
        $("#div_char_container").html(data);

      },
      error: function(jqXHR, textStatus, errorThrown) {
        $("#div_char_container").text(jqXHR.statusText);
        console.log("ERROR:", jqXHR, textStatus, errorThrown);
      }

    });
  });

  $('#control').click(function(e) {

    // don't allow the anchor to visit the link
    e.preventDefault();

    $.ajax({
      url: "/get-character",
      dataType: "html",
      type: "GET",
      data: {
        format: "control-list"
      },
      success: function(data) {
        console.log("SUCCESS HTML:", data);
        $("#div_char_container").html(data);

      },
      error: function(jqXHR, textStatus, errorThrown) {
        $("#div_char_container").text(jqXHR.statusText);
        console.log("ERROR:", jqXHR, textStatus, errorThrown);
      }

    });
  });




  // GET A LIST OF 'THINGS' FROM THE SERVER AS JSON DATA
  $('#offence').click(function(e) {

    // don't allow the anchor to visit the link
    e.preventDefault();

    $.ajax({
      url: "/get-character",
      dataType: "json",
      type: "GET",
      data: {
        format: "offence-list"
      },
      success: function(data) {
        console.log("SUCCESS JSON:", data);
        var div = $("#div_char_container");
        let htmlStr = "<ul>";
        for (let i = 0; i < data.length; i++) {
          htmlStr += "<li><div class='div_char'><img src='../img/" + data[i] + ".png' alt='test_image' class='img_char'><p class='name_char'>" + data[i] +"</p></div></li>";
        }
        htmlStr += "</ul>";
        div.html(htmlStr);

      },
      error: function(jqXHR, textStatus, errorThrown) {
        $("#div_char_container").text(jqXHR.statusText);
        console.log("ERROR:", jqXHR, textStatus, errorThrown);
      }
    });
  });

  $('#recovery').click(function(e) {

    // don't allow the anchor to visit the link
    e.preventDefault();

    $.ajax({
      url: "/get-character",
      dataType: "json",
      type: "GET",
      data: {
        format: "recovery-list"
      },
      success: function(data) {
        console.log("SUCCESS JSON:", data);
        var div = $("#div_char_container");
        let htmlStr = "<ul>";
        for (let i = 0; i < data.length; i++) {
          htmlStr += "<li><div class='div_char'><img src='../img/" + data[i] + ".png' alt='test_image' class='img_char'><p class='name_char'>" + data[i] +"</p></div></li>";
        }
        htmlStr += "</ul>";
        div.html(htmlStr);

      },
      error: function(jqXHR, textStatus, errorThrown) {
        $("#div_char_container").text(jqXHR.statusText);
        console.log("ERROR:", jqXHR, textStatus, errorThrown);
      }
    });
  });

  $('#beginner').click(function(e) {

    // don't allow the anchor to visit the link
    e.preventDefault();

    $.ajax({
      url: "/get-character",
      dataType: "json",
      type: "GET",
      data: {
        format: "beginner-list"
      },
      success: function(data) {
        console.log("SUCCESS JSON:", data);
        var div = $("#div_char_container");
        let htmlStr = "<ul>";
        for (let i = 0; i < data.length; i++) {
          htmlStr += "<li><div class='div_char'><img src='../img/" + data[i] + ".png' alt='test_image' class='img_char'><p class='name_char'>" + data[i] +"</p></div></li>";
        }
        htmlStr += "</ul>";
        div.html(htmlStr);

      },
      error: function(jqXHR, textStatus, errorThrown) {
        $("#div_char_container").text(jqXHR.statusText);
        console.log("ERROR:", jqXHR, textStatus, errorThrown);
      }
    });
  });



});
