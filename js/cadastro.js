let botaoEnviar = jQuery('#botaoCadastro').click(function(){
    console.log('botao funfa')
    validaCep()
})


async function validaCep(){
    const cep = $('#validationCustom05').value
    let request = $.ajax({
        'url': ' viacep.com.br/cep/json/',
        'cep': {
            'numero': request,
        },
        'success': function(response){
            document.querySelector('#content').innerHTML = `<h1>Certo</h1>`
        }
    })
    console.log(request)
}
const cep = $('#validationCustom05').value
console.log(cep)