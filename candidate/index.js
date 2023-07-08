$(document).ready(function() {
  $(document).on('submit', '#search-form', function(e) {
    e.preventDefault();
    var location = $('#location').val();
    var job_role = $('#job_role').val();
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/users',
      data: {
        location: location,
        job_role: job_role
      },
      success: function(data) {
        $('.results').html(data);
      }
    });
  });
});

