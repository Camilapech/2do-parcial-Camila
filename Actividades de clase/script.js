var postres = localStorage.getItem('postres')

if(!postres) {
    localStorage.setItem('peliculas', [])
}

function crearcards(){
    var cards = document.querySelector('#cards .row')
    cards.innerHTML = ''

    if (postres) {
        var listadodePostres = JSON.parse(postres)
        for (var i = 0; i < listadodePostres.length; i++) {
            var postre = listadodePostres [i]
            var htmlCard = `
            <div class="card" style="width: 18rem;">
                <img src="${postre.imagen}" class="card-img-top" alt="Portada de ${postre.titulo}">
                    <div class="card-body">
                        <h5 class="card-title">${postre.titulo}</h5>
                        <p class="card-text">${postre.descripcion}</p>
                        <a href="#" class="btn btn-primary">Editar</a>
                    </div>
                </div>`
            cards.innerHTML += htmlCard

        }
    }
 }
crearcards()

var verFormulario = false

function mostrarFormulario() {
    var formulario = document.getElementById("crearFormulario")
    var cards = document.getElementById("cards")
    var crearBtn = document.getElementById("crearBtn")

    if (!verFormulario) {
        formulario.style.display = "block"
        cards.style.display = 'none'
        verFormulario = true
        crearBtn.innerText = 'Cancelar' 

    } else {
        formulario.style.display = 'none'
        cards.style.display = 'block'
        verFormulario = false
        crearBtn.innerText = 'Crear'
    }

}

var crearFormulario = document.getElementById("crearFormulario")

crearFormulario.addEventListener('submit', function(e) {

    e.preventDefault()
    
    var formulario = new FormData(crearFormulario)
    var postre = {
        titulo : formulario.get('formTitle'),
        imagen : formulario.get('formImage'),
        descripcion : formulario.get('formDescription')
    } 

    console.log(postres)

    if (!postres) {
        var listadodepostres = [
            postre
        ]

        localStorage.setItem('postres', JSON.stringify(listadodepostres))
    } else {
        var listadodepostres = JSON.parse(postres)
        listadodepostres.push(postres)
        localStorage.setItem('postres', JSON.stringify(listadodepostres))
    }

    crearFormulario.reset()
    mostrarFormulario()
    crearcards()
} )

