function go(idF){
   
    var  idFilme = idF;

    var params = new URLSearchParams();
    params.append("idFilme", idFilme);

    var url = "informacoes.html?" + params.toString();
    location.href = url;
  }