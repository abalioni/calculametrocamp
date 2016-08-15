(function () {
  'use strict';

  $(document).ready(function () {
    $('#calcBtn').click( function () {
      var m1 = $('#m1').val(),
          b1 = $('#b1').val(),
          m2 = $('#m2').val(),
          b2 = $('#b2').val(),
          mediaSpan = $('#media'),
          mb1,
          mb2,
          medpar,
          medfina;



          medpar = ((m1*0.16) + (b1*0.24) + (m2*0.24) + (b2*0.36));
          mediaSpan.html(medpar);
          console.log(medpar);

    })
  });


}());
