filmesId = [];
//console.log(filmesId); Se eu quiser ver os ids pelo navegador.

$("form").submit(false);

$(".btn-search").on('click', function()
{
    var titulo = $('#search').val();
    var urlStr = "https://www.omdbapi.com/?apikey=f5a096fa&s=" + titulo + "&plot=full&r=json";
    $.ajax({
        'url':urlStr,
        'success': function(dados)
        {   
            $("div.movie-info").html(``);
            var dadosBusca = dados.Search;
            
            if( dadosBusca != undefined)
            {
                for( var i=0; i<dadosBusca.length; i++ )
                {   
                    filmesId.push(dadosBusca[i].imdbID);

                    $.ajax({
                        'url':"https://www.omdbapi.com/?apikey=f5a096fa&i=" + filmesId[i] + "&plot=full&r=json",
                        'success': function(resultado)
                        {
                            $("div.movie-info").append($(`
                            
                            <div>
                            
                            <img src= ${resultado.Poster}>
                            <h1>${resultado.Title}</h1>
                            <p>${resultado.Genre}</p>
                            <p>${resultado.Runtime}</p>
                            <p>${resultado.Rated}</p>
                            <p>${resultado.Director}</p>
                            <p>${resultado.Actors}</p>

                            </div>

                            `));
                        }
                    });
                } 
                filmesId = [];
            }
            else 
            {   
                $("p").remove();
                $("body").append($(`<div> <p> Nenhum filme encontrado! </p> </div>`));
            }            
        }            
    });
});