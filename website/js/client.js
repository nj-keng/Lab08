$(document).ready(function() {

  $('#mainMenu #getHTMLList').click(function(e) {

    // don't allow the anchor to visit the link
    e.preventDefault();

    $.ajax({
      url: "/ajax-GET-list",
      dataType: "html",
      type: "GET",
      data: {
        format: "html-list"
      },
      success: function(data) {
        console.log("SUCCESS HTML:", data);
        $("#content").html(data);

      },
      error: function(jqXHR, textStatus, errorThrown) {
        $("#p1").text(jqXHR.statusText);
        console.log("ERROR:", jqXHR, textStatus, errorThrown);
      }

    });
  });


  // GET A LIST OF 'THINGS' FROM THE SERVER AS JSON DATA
  $('#mainMenu #getJSONList').click(function(e) {

    // don't allow the anchor to visit the link
    e.preventDefault();

    $.ajax({
      url: "/ajax-GET-list",
      dataType: "json",
      type: "GET",
      data: {
        format: "json-list"
      },
      success: function(data) {
        console.log("SUCCESS JSON:", data);
        var div = $("#content");
        let htmlStr = "<ul>";
        for (let i = 0; i < data.length; i++) {
          htmlStr += "<li>" + data[i] + "</li>";
        }
        htmlStr += "</ul>";
        div.html(htmlStr);

      },
      error: function(jqXHR, textStatus, errorThrown) {
        $("#p1").text(jqXHR.statusText);
        console.log("ERROR:", jqXHR, textStatus, errorThrown);
      }
    });
  });

});
