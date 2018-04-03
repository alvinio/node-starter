$(function () {

  $('.password-toggle').click(function () {
    var $this = $(this);

    if ($this.prev().attr('type') == 'password') {
      $this.prev().attr('type', 'text');
      $this.find('span').text('Hide');
    } else {
      $this.prev().attr('type', 'password');
      $this.find('span').text('Show');
    }

  });

  var validateEmail = function (elementValue) {
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(elementValue);
  };


  $('#email').keyup(function () {
    var value = $(this).val();
    var valid = validateEmail(value);

    if (!valid) {

      $(this).addClass('invalid');
      $(this).nextAll('div.invalid-feedback').first().css('display', 'block');

    } else {

      $(this).removeClass('invalid');
      $(this).nextAll('div.invalid-feedback').first().css('display', 'none');

    }
  });

});
