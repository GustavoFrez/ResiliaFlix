$('#rform').submit(false)
var mailbo = $('#emailbox').val();
$('#envia').on('click', function () {
  if (
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      $('#emailbox').val()
    )
  ) {
    var mailbo = $('#emailbox').val()
    
    $.ajax({
      url: true ,
      success: function () {
        $('#sucessR').addClass('show')
      }
    })

    document.getElementById('sucessR').innerHTML =
      'E-mail enviado com sucesso!' 
    return true
  }
})
