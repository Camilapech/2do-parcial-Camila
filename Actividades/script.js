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
    var postre = {
        'titulo' : formulario.get('formTitle'),
        'imagen' : formulario.get('formImage'),
        'descripcion' : formulario.get('formDescripcion')
    } 
    if (!postres) {
        var listadodepostres = [
            postre
        ]

        localStorage.setItem('postres', JSON.stringify(listadodepostres))
    } else {
        var listadodepostres = JSON.parse(postres)
        listadodepostres.push(postre)
        localStorage.setItem('postres', JSON.stringify(listadodepostres))
    }

    crearFormulario.reset()
    mostrarFormulario()
} )

// sumar(num1, num2)