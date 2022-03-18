var avatarAdms = ["https://uploads.spiritfanfiction.com/usuarios/avatares/201405/pixeltyrell-406289-120320221714.gif",
                  "https://uploads.spiritfanfiction.com/usuarios/avatares/201508/nanahoshi-894906-070320221043.gif",
                  "https://uploads.spiritfanfiction.com/usuarios/avatares/201508/cecilrssrs-885194-250220221645.png"];
var usersAdms = ["@_Heisenberg", "@Nanahoshi", "@Panxinha"];
var cargosAdms = ["ADM jojofag, ficwriter, designer",
                  "ADM Power Ranger, ficwriter, beta",
                  "ADM mãe de pássaro, ficwriter, avaliadora, helper"];
var perfisAdms = ["https://www.spiritfanfiction.com/perfil/pixeltyrell",
                  "https://www.spiritfanfiction.com/perfil/nanahoshi",
                  "https://www.spiritfanfiction.com/perfil/cecilrssrs"];

var elementoExibirAdms = document.getElementById("exibirAdms");

function ListarAdms() {
    elementoExibirAdms.innerHTML = "";
    for (var i = 0; i < usersAdms.length; i++) {
        elementoExibirAdms.innerHTML =
            elementoExibirAdms.innerHTML +
            '<figure><a href="' + perfisAdms[i] + '"><img class="img-adms" src="' + avatarAdms[i] + '"></a><figcaption>' + usersAdms[i] + '<br>' + cargosAdms[i] + '</figcaption></figure>';
    }
}

ListarAdms();

/*var usuarios = [];

exibeJogadorNaTela(jogadores);

function exibeUsuarioNaTela(usuarios) {
    var elemento = "";
    for(var i = 0; i < jogadores.length; i++){
        elemento += "<tr>";
        elemento += "<td><img src=" + usuarios[i].avatar + "></td>";
        elemento += "<td>" + usuarios[i].nome + "</td>";
        elemento += "<td>" + usuarios[i].vitórias + "</td>";
        elemento += "<td>" + usuarios[i].empates + "</td>";
        elemento += "<td>" + usuarios[i].derrotas + "</td>";
        elemento += "<td>" + usuarios[i].pontos + "</td>";
        elemento += "</tr>";
    }

    var tabelaUsuarios = document.getElementById("tabelaUsuarios");
    tabelaUsuarios.innerHTML = elemento;
}

function novoUsuario (avatarURL, nomeUsuario) {
    return (
        usuario = { avatar: avatarURL, 
                    nome: nomeUsuario,
                    cargos: null,
        }
    )
}

function adicionarJogador() {
    var nomeJogador = document.getElementById("nomeJogador").value;
    var avatarURL = document.getElementById("avatarUrl").value;

    if(avatarURL === ""){
        avatarURL = "https://bsbr.com.br/wp-content/uploads/2017/10/Icon-user.png"
    }
    
    if (nomeJogador != "" && nomeJogador != "undefined") {
        jogadores.push(novoJogador(avatarURL, nomeJogador));
        exibeJogadorNaTela(jogadores);
    } else {
        alert("Digite seu nome.");
    }
    document.getElementById("avatarUrl").value = "";
    document.getElementById("nomeJogador").value = "";
}

function zerarPlacar(i) {
    for(var i = 0; i < jogadores.length; i++){
        jogadores[i].vitórias = 0;
        jogadores[i].empates = 0;
        jogadores[i].derrotas = 0;
        jogadores[i].pontos = 0;
    }
    exibeJogadorNaTela(jogadores);
}

function removerJogador(i) {
    jogadores.splice(i, 1);
    exibeJogadorNaTela(jogadores);
}*/