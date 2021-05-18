filmesId = [];
//console.log(filmesId); Se eu quiser ver os ids pelo navegador.

$("form").submit(false);

$(".btn-search").on('click', function()
{
    var busca = $('#search').val();
    var urlStr = "https://www.omdbapi.com/?apikey=f5a096fa&s=" + busca + "&plot=full&r=json";
    $.ajax({
        'url':urlStr,
        'success': function(dados)
        {   
            $("body").addClass('aparecer')
            $("#movie-cards").html(``);
            var dadosBusca = dados.Search;
            
            if( dadosBusca != undefined)
            {
                for( var i=0; i<dadosBusca.length; i++ )
                {   
                    filmesId.push(dadosBusca[i].imdbID);

                    $.ajax({
                        'url':"https://www.omdbapi.com/?apikey=f5a096fa&i=" + filmesId[i] + "&plot=short&r=json",
                        'success': function(resultado)
                        {
                            $(`         
                            
                                <div class="cardm">

                                    <div class="card-left">
                                        <img src="${resultado.Poster}">
                                    </div>

                                <div class="card-right">
                                    <h1>${resultado.Title}</h1>
                                    
                                    <div class="card-right-info">
                                        <ul>
                                            <li>${resultado.Year}</li>
                                            <li>${resultado.Runtime}</li>
                                            <li>${resultado.Genre}</li>
                                            <li>${resultado.Rated}</li>
                                        </ul>

                                        <p>${resultado.Plot}</p>

                                        <ul>
                                            <li>Diretor: ${resultado.Director}</li>
                                            <li>Elenco: ${resultado.Actors}</li>
                                            <li>País: ${resultado.Country}</li>
                                        </ul>
                                        <p>Nota: ${resultado.Ratings[0].Value}</p>
                                        
                                    </div>
                                    
                                </div>

                            `).appendTo($("#movie-cards"));
                        }
                    });
                } 
                filmesId = [];
            }
            else 
            {   
                $("div.card-error").remove();
                $("#movie-cards").append($(`<div class="card-error"> <p> Nenhum filme encontrado! </p> </div>`));
            }            
        }            
    });
});

