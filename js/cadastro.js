$(document).ready(function(){
    $('#validationCustom05').focusout(function(){
        let cep = $('#validationCustom05').val();
        cep = cep.replace('-', '');

        let urlId = 'https://viacep.com.br/ws/'+ cep +'/json/';

        $.ajax({
            url: urlId,
            type: 'get',
            dataType: 'json',
            success: function(data){
                console.log(data)
                $('#rua').val(data.logradouro);
                $('#bairro').val(data.bairro);
                $('#cidade').val(data.localidade);
                $('#estado').val(data.uf);
            },
            error: function(erro){
                console.log(erro)
            }
        })
    })
})
$('#validationCustom04').click(function(){
    const senha = $('#validationCustom03').val;
    const confSenha = $('#validationCustom04').val;
    if(senha == confSenha){
        
    }
})






































/*let botaoEnviar = jQuery('#botaoCadastro').click(function(){
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
console.log(cep)*/