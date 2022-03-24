var iconsContato = ["https://icon-library.com/images/fanfiction-icon/fanfiction-icon-17.jpg",
                  "https://cdn-icons-png.flaticon.com/512/2111/2111715.png",
                  "https://www.apkmirror.com/wp-content/uploads/2019/11/5dcdc2af5a75c.png",
                  "https://img.icons8.com/color/480/linktree.png"];
var nomesContato = ["Spirit", "Wattpad", "Discord", "Linktree"];
var linksContato = ["https://www.spiritfanfiction.com/perfil/ficwritersis",
                  "https://www.wattpad.com/user/_Imaginesland_",
                  "https://discord.gg/qEjfHvexCm",
                  "https://linktr.ee/imaginesland"];

var elementoExibirContatos = document.getElementById("exibirContatos");

function ListarContatos() {
    elementoExibirContatos.innerHTML = "";
    for (var i = 0; i < nomesContato.length; i++) {
        elementoExibirContatos.innerHTML =
            elementoExibirContatos.innerHTML +
            '<figure><a href="' + linksContato[i] + '"><img class="img-contatos" src="' + iconsContato[i] + '"></a><figcaption>' + nomesContato[i] + '</figcaption></figure>';
    }
}

ListarContatos();