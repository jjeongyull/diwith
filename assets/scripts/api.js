function load_today_count() {
  $.ajax({
      type: "GET",
      url: "https://menteimo.com/diwith.php",
      dataType: 'text',  // Specify that the response should be treated as text
      success: function (result) {
          console.log(result);

          // Handle the result as a string
      },
      error: function (xhr, ajaxOptions, thrownError) {
          console.log(xhr.status);
          console.log(thrownError);
      }
  });
}