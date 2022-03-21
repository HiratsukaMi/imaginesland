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