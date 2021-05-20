$('#rform').submit(false)

$('#envia').on('click', function () {
  if (
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      $('#emailbox').val()
    )
  ) {
    var mailbo = $('#emailbox').val()
    var urlStr = 'https://www.omdbapi.com/?apikey=f5a096fa&s=filme&plot=full&r=json%27';
    $.ajax({
      url: urlStr ,
      success: function () {
        $('#sucessR').addClass('show')
      }
    })

    document.getElementById('sucessR').innerHTML =
      'E-mail enviado com sucesso!' 
    return true
  }
})
