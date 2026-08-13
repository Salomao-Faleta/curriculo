
let Sf = {
    pessoal: {
        nome: "Salomão Faleta",
        cargo: "Violista",
        email: "📧 salomaooviola@gmail.com",
        telefone: "📞 (71) 98660-1699",
        cidade: "📍 Salvador-BA",
        foto: "./assets/img/salomao.jpeg"
    },
    formacao: {
        curso: "Bacharelado em Música – Viola (em andamento)",
        ufba: "Universidade Federal da Bahia • 2026 – 2030"
    },
    competencias: {
        compItens: [
            "Trabalho em Equipe",
            "Memorização de Peças",
            "Experiência em Orquestras",
            "Performance em Turnês",
            "Experiência Orquestral",
            "Interpretação Musical"
        ]
    },
    idiomas: {
        idomaItens:[
            'Inglês: Intermediário (A1-B2)',
            'Espanhol: Básico (A1-A2)',
        ]
    },

};


// HEADER
document.getElementById("nome").innerHTML = Sf.pessoal.nome;
document.getElementById("cargo").innerHTML = Sf.pessoal.cargo;
document.getElementById("email").innerHTML = Sf.pessoal.email;
document.getElementById("telefone").innerHTML = Sf.pessoal.telefone;
document.getElementById("cidade").innerHTML = Sf.pessoal.cidade;
document.getElementById("foto").src = Sf.pessoal.foto;

// FORMAÇÃO
document.getElementById("curso").innerHTML = Sf.formacao.curso;
document.getElementById("ufba").innerHTML = Sf.formacao.ufba;

// COMPETÊNCIAS
let listaCompetencias = document.getElementById("lista-competencias");
Sf.competencias.compItens.forEach((competencia) => {
    let li = document.createElement("li");
    li.innerHTML = `<p>${competencia}</p>`;
    listaCompetencias.appendChild(li);
});

// IDIOMAS
let listaIdiomas = document.getElementById("lista-idiomas");
Sf.idiomas.idomaItens.forEach((idioma) => {
    let li = document.createElement("li");
    li.innerHTML = `<p>${idioma}</p>`;
    listaIdiomas.appendChild(li);
});