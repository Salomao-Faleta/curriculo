let Sf = {
    pessoal: {
        nome: "Salomão Faleta",
        cargo: "Violista",
        email: "📧 salomaooviola@gmail.com",
        telefone: "📞 (71) 98660-1699",
        cidade: "📍 Salvador-BA",
        foto: "./assets/img/salomao.jpeg"
    },
    formacao:{
        curso: "Bacharelado em Música – Viola (em andamento)",
        ufba: "Universidade Federal da Bahia • 2026 – 2030"
    },
    competencias:{
        
    }
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