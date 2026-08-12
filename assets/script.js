let perfil = {
    nome: "Salomão Faleta",
    cargo: "Violista",
    email: "📧 salomaooviola@gmail.com",
    telefone: "📞 (71) 98660-1699",
    cidade: "📍 Salvador-BA",
    foto: "./assets/img/salomao.jpeg"
};

document.getElementById("nome").innerHTML = perfil.nome;
document.getElementById("cargo").innerHTML = perfil.cargo;
document.getElementById("email").innerHTML = perfil.email;
document.getElementById("telefone").innerHTML = perfil.telefone;
document.getElementById("cidade").innerHTML = perfil.cidade
document.getElementById("foto").src = perfil.foto;