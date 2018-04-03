$('#btnForm').click(function(event) {

  var form = $('#authForm');

  if (form[0].checkValidity() === false) {
    event.preventDefault();
    event.stopPropagation();
  }

  form.addClass('was-validated');
});

