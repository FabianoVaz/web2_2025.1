const miolo = document.querySelector("#container")

fetch("http://localhost:3000/eventos")
.then( resposta => resposta.json())
.then( eventos => {
        eventos.forEach(evento => {
            miolo.innerHTML += `
                <div class="evento">
                    <h2>${evento.nome}</h2>
                    <p class="data">📅 ${evento.data}</p>
                    <p class="local">📍 ${evento.local}</p>
                    <p>${evento.descricao}</p>
                </div>`
        })
})
.catch(console.log("Deu erro na API"))