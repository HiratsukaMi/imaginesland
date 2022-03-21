var avatarAdms = ["img/pixeltyrell.gif",
                  "img/nanahoshi.gif",
                  "img/cecilrssrs.png"];
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