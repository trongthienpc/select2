$(document).ready(function () {
  $("#get-photo-btn").click(function (event) {
    event.preventDefault();
    var photoId = $("#photo-id").val();
    var apiUrl = "https://jsonplaceholder.typicode.com/photos/" + photoId;
    var btn = $(this);
    var spinner = $(
      '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>'
    );

    btn.prop("disabled", true).html(spinner);

    $.ajax({
      url: apiUrl,
      type: "GET",
      dataType: "json",
      success: function (data) {
        var photoHtml =
          '<img src="' +
          data.url +
          '" alt="' +
          data.title +
          '" class="img-responsive">';
        $("#photo-container").html(photoHtml);
      },
      error: function (jqXHR, textStatus, errorThrown) {
        alert("Error: " + textStatus + " - " + errorThrown);
      },
      complete: function () {
        btn.prop("disabled", false).html("Get Photo");
      },
    });
  });
});
