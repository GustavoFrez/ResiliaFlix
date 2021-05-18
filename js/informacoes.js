var params = new URLSearchParams(window.location.search), idFilme = params.get("idFilme");


$.ajax({
    'url':"https://www.omdbapi.com/?apikey=f5a096fa&i=" + idFilme + "&plot=full&r=json",
                        'success': function(resultado){
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

                                    <p>
                                    ${resultado.Plot}
                                    </p>

                                    <ul>
                                        <li>Diretor: ${resultado.Director}</li><br>
                                        <li>Elenco: ${resultado.Actors}</li><br>
                                        <li>País: ${resultado.Country}</li><br>
                                        <li>Nota: ${resultado.Ratings[0].Value}</li>
                                    </ul>
                                    
                                    
                                </div>
                                
                            </div>

                        `).appendTo($("#movie-cards"));
                        }
})