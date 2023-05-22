/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
DataHoje= new Date();
$('#ano').html(DataHoje.getFullYear())

fetch("assets/arquivos/dados.json").then((resposta)=>{
    resposta.json().then((dados)=>{
        if($('#meutelefone').length){
            $('#meutelefone').html(dados.telefone)
        }
        if($('#meuemail').length){
            $('#meuemail').html(dados.email)
        }

        if($('#sobremim').length){
            $('#sobremim').html(dados.sobremim)
        }

        if($('#curriculo').length){
            var trabalhos= dados.experiencia

            trabalhos.forEach((trabalho)=>{
                

                $('#curriculo').append(`<div class="card shadow border-0 rounded-4 mb-5"><div class="card-body p-5"><div class="row align-items-center gx-5"><div class="col text-center text-lg-start mb-4 mb-lg-0"><div class="bg-light p-4 rounded-4"><div class="text-primary fw-bolder mb-2">${trabalho.inicio} - ${trabalho.fim}</div><div class="small fw-bolder">${trabalho.cargo}</div><div class="small text-muted">${trabalho.empresa}</div><div class="small text-muted">${trabalho.cidade}</div></div></div><div class="col-lg-8"><div>${trabalho.descricao}</div></div></div></div></div>`)

            })
        }

        if($('#educacao').length){
            var escolas = dados.educacao
            escolas.forEach((eds)=>{
                $('#educacao').append(`<div class="card shadow border-0 rounded-4 mb-5"><div class="card-body p-5"><div class="row align-items-center gx-5"><div class="col text-center text-lg-start mb-4 mb-lg-0"><div class="bg-light p-4 rounded-4"><div class="text-primary fw-bolder mb-2">${eds.inicio} - ${eds.fim}</div><div class="small fw-bolder">${eds.instituicao}</div><div class="small text-muted">${eds.cidade}</div><div class="small text-muted">${eds.curso}</div></div></div><div class="col-lg-8"><div>${eds.descricao}</div></div></div></div></div>`)

            })

        }

        if($('#habilidades').length){
            var habilidades = dados.habilidades
            var ind = 0
            var linha = 1
            //$('#habilidades').append(`<div class="row row-cols-1 row-cols-md-3 mb-4 linha${linha}"></div>`)
            

            for(var z = 0;z < habilidades.length; z++){
                console.log(ind % 3 == 0,habilidades[z])
                
                ind += 1
                if(ind == 1){
                    $('#habilidades').append(`<div class="row row-cols-1 row-cols-md-3 mb-4 linha${linha}"></div>`)
                    var jql = `#habilidades .linha${linha}`
                    
                    $(jql).append(`<div class="col mb-4 mb-md-0"><div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">${habilidades[z]}</div></div> `)
                }else{
                    $(`#habilidades .linha${linha}`).append(`<div class="col mb-4 mb-md-0"><div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">${habilidades[z]}</div></div> `)   
                }

                if(ind == 3){
                    console.log('Seria para reiniciar')
                    ind=0
                    linha += 1
                }

            }
        }

        if($('#linguagens').length){
            var linguagens = dados.linguagens
            var ind = 0
            var linha = 1

            for(var z = 0;z < linguagens.length; z++){
                console.log(ind % 3 == 0,linguagens[z])
                
                ind += 1
                if(ind == 1){
                    $('#linguagens').append(`<div class="row row-cols-1 row-cols-md-3 mb-4 linha${linha}"></div>`)
                    var jql = `#linguagens .linha${linha}`
                    
                    $(jql).append(`<div class="col mb-4 mb-md-0"><div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">${linguagens[z]}</div></div> `)
                }else{
                    $(`#linguagens .linha${linha}`).append(`<div class="col mb-4 mb-md-0"><div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">${linguagens[z]}</div></div> `)   
                }

                if(ind == 3){
                    console.log('Seria para reiniciar')
                    ind=0
                    linha += 1
                }

            }
        }

        if($('#projetos').length){
            var projetos = dados.projetos

            projetos.forEach((pr)=>{
                $('#projetos').append(`<div class="card mb-3 shadow rounded-4 mb-2"><img src="${pr.capa}" class="card-img-top rounded-topo" alt="banner do projeto"><div class="card-body"><h5 class="card-title">${pr.nome}</h5><p class="card-text">${pr.descricao}</p><a href="${pr.link}" class="btn btn-success ms-2">Visitar</a></div></div>`)
            })

            

//`<div class="card overflow-hidden shadow rounded-4 border-0 mb-5"><div class="card-body p-0"><div class="d-flex align-items-center"><div class="p-5"><h2 class="fw-bolder">${pr.nome}</h2><p>${pr.descricao}</p><br><a href="" class="btn btn-success ms-2">Visitar</a></div><img class="img-fluid" src="${pr.capa}" alt="..." /></div></div></div>`
        }


    })
})