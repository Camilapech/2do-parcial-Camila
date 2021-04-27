var postres = localStorage.getItem('postres')

if(!postres) {
    localStorage.setItem('peliculas', [])
}

function sumar () {
    var n1 = Number ( prompt("Ingresa un numero") )
    var n2 = Number ( prompt("Ingresa otro numero") )
    if (n1 === 2 && n2 === 2) {
        alert("Pez")
    } else {
        alert(n1 + n2)
    }
}

function crearcards(){
    var cards = document.querySelector('#cards .row')
    cards.innerHTML = ''

    if (postres) {
        var listadodepostres = JSON.parse( postres )

        for(var i = 0; i < listadodepostres.length; i ++) {
            var postre = listadodepostres[i]
            var htmlCard = `
            <div id="card" class="card" style="width: 18rem;">
                    <img src="${postre.imagen}" alt="Portada de ${postre.titulo}" >
                    <div class="card-body">
                        <h5 class="card-title" >${postre.titulo}</h5>
                        <p class="card-text" >${postre.descripcion}</p>
                        <a href="#" class="btn btn-primary">Editar/a>
                    </div>
                </div>`

                cards.innerHTML += htmlCard

            

        }
    }
 }
crearcards()

var verFormulario = false

function mostrarFormulario() {
    var formulario = document.getElementById('crearFormulario')
    var cards = document.getElementById('cards')
    var crearBtn = document.getElementById('crearBtn')

    if (!verFormulario) {
        formulario.style.display = 'block'
        cards.style.display = 'none'
        verFormulario = true
        crearBtn.innerText = 'Cancelar' 
    } else {
        formulario.style.display = 'none'
        cards.style.display = 'block'
        verFormulario = false
        crearBtn.innerText = 'Crear'
    }
    // Instrucciones para desaparecer a #cards

    // Cambiar el texto del boton crear por la palabra Cancelar
    // Si oprimo una vez el boton crear, muestra el formulario y desaparecen
    // las cards, si lo oprimo nuevamente, muestra las cards y desaparece
    // el formulario
}

var crearFormulario = document.getElementById('crearFormulario')
crearFormulario.addEventListener('submit', function(e) {
    e.preventDefault()
    
    var formulario = new FormData(crearFormulario)
    var postres = {
        'titulo' : formulario.get('formTitle'),
        'imagen' : formulario.get('formImage'),
        'descripcion' : formulario.get('formDescripcion')
    } 
    if (!postres) {
        var listadodepostres = [
            postres
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

