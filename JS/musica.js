"use strict"


export async function getAllMusicas(){
    const url = "http://localhost:8080/v1/controle-musicas/musica"
    const response = await fetch(url)
    const data = await response.json()

    return data.musics
}

export async function getMusicasPorID(id){
    const url = `http://localhost:8080/v1/controle-musicas/musica/${id}`
    const response = await fetch(url)
    const data = await response.json()

    return data
}

async function postMusica(musica){
    const url = "http://localhost:8080/v1/controle-musicas/musica"
    const options = {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(musica)
    }
    const response = await fetch(url, options)

    return response.ok
}

async function putMusicas(musica, id) {
    const url = `http://localhost:8080/v1/controle-musicas/musica/${id}`
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(musica)
    }
    const response = await fetch(url, options)

    return response.ok
}

async function deleteMusica(id) {
    const url = `http://localhost:8080/v1/controle-musicas/musica/${id}`
    const options = {
        method: 'DELETE',
        headers: {
            'Content-Type' : 'application/json'
        }
    }
    const response = await fetch(url, options)

    return response.ok
}


let musica = {
    "nome" : "teste_musga",
    "duracao" : "00:01:10",
    "data_lancamento" : "2025-04-28",
    "letra" : "Musgasssssss, teste",
    "link" : "https://youtu.be.com/devVini"
}