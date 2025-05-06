'use strict'

import { getAllMusicas, getMusicasPorID } from "./musica.js"

function formatarDuracao(iso) {
    const data = new Date(iso)
    const minutos = data.getUTCMinutes().toString().padStart(2, '0')
    const segundos = data.getUTCSeconds().toString().padStart(2, '0')
    return `${minutos}m${segundos}s`
}

function formatarData(iso) {
    const data = new Date(iso)
    return data.toLocaleDateString('pt-BR')
}

function criarCard(musica) {
    const container = document.getElementById('container')

    const novaDiv = document.createElement('div')
    novaDiv.classList.add('cardMusica')
    novaDiv.innerHTML = `
        <h2>${musica.nome}</h2>
        <p><strong>Duração:</strong> ${formatarDuracao(musica.duracao)}</p>
        <p><strong>Lançamento:</strong> ${formatarData(musica.data_lancamento)}</p>
        <p class="letra">${musica.letra}</p>
        <a href="${musica.link}" target="_blank">Ouvir música</a>
    `
    container.appendChild(novaDiv)
}

async function exibirMusicas() {
    const musicas = await getAllMusicas()
    const container = document.getElementById('container')
    container.replaceChildren() // limpa antes de exibir
    musicas.forEach(criarCard)
}

async function exibirPesquisa(evento) {
    if (evento.key === 'Enter') {
        const termo = evento.target.value.trim()
        const container = document.getElementById('container')

        if (termo === '') {
            exibirMusicas()
            return
        }

        const musicas = await getMusicasPorID(termo)
        container.replaceChildren()
        musicas.forEach(criarCard)
    }
}

function novoContato(){
    document.querySelector('main').className = 'form-show'
}

function voltarHome(){
    document.querySelector('main').className = 'card-show'
}

exibirMusicas()


document.getElementById('nome-contato').addEventListener('keydown',exibirPesquisa)
document.getElementById('novo-contato').addEventListener('click', novoContato)
document.getElementById('cancelar').addEventListener('click', voltarHome)
