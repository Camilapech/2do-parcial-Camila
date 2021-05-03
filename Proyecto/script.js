const clickbutton = document.querySelectorAll('.button')
const tbody = document.querySelector('.tbody')
let carrito = []

clickbutton.forEach(btn => {
    btn.addEventListener('click',addToCarritoItem)
})

function addToCarritoItem(e){
    const button = e.target
    const item = button.closest('.card')
    const itemTitle = item.querySelector('.card-title').textContent;
    const itemPrice = item.querySelector('.precio').textContent
    const itemImg = item.querySelector('.card-img-top').src 

    const newCarrito = {
        title: itemTitle,
        precio: itemPrice,
        img: itemImg,
        cantidad: 1
    }

    addItemCarrito(newCarrito)
}

function addItemCarrito(newItem){

    const ImputElemento = tbody.getElementsByClassName('input_elemento')
    for(let i = 0; i < carrito.length ; i++){
    if(carrito[i].title ===newItem.title.trim()){
        carrito[i].cantidad ++;
        const inputValue = ImputElemento[i]
        inputValue.value++;
        CarritoTotal()
//esto nos sirve para que se sumen de la misma maner en la cantidad
    
        return null;
    }
    }

    carrito.push(newItem)

    renderCarrito()

    
}

function renderCarrito(){
    tbody.innerHTML = ''
    carrito.map(item => {
        const tr = document.createElement('tr')
        tr.classList.add('ItemCarrito')
        const Content = `
        
        <th scope="row">1</th>
        <td class="table__productos">
          <img
            src=${item.img}
            alt="">
          <h6 class="title">${item.title}</h6>
        </td>
        <td class="table__precio">${item.precio} </td>
        <td class="table__cantidad">
          <input type="number" min="1" value=${item.cantidad} class="input_elemento">
          <button class="delete btn btn-outline-warning">x</button>
        </td>
      `
      tr.innerHTML = Content
      tbody.append(tr)

      tr.querySelector(".delete").addEventListener('click', removeItemCarrito)
    
      tr.querySelector(".input_elemento").addEventListener('change',sumaCantidad)
    })
    CarritoTotal()

}

function CarritoTotal(){
    let Total = 0;
    const itemCartTotal = document.querySelector('.itemCartTotal')
    carrito.forEach((item) => {
        const precio = Number(item.precio.replace("$", ''))
        //con esto se cambia el simbolo del dolar por el resultado 
        Total = Total + precio*item.cantidad
        //este total guarda el valor 
    
    })
    itemCartTotal.innerHTML = `Total $${Total}`
    //este es el total que se va imprimir
    addLocalStorage()
}

function removeItemCarrito(e){
const buttonDelete = e.target
const tr = buttonDelete.closest(".ItemCarrito")
const title = tr.querySelector('.title').textContent
for(let i=0; i<carrito.length ; i++){
    if(carrito[i].title.trim()=== title.trim()){
        carrito.splice(i, 1)
        //con esto se elimina un elemento del carrito 

    }

}
tr.remove ()
CarritoTotal()
}

function sumaCantidad(e){
    const sumaInput= e.target
    const tr = sumaInput.closest(".ItemCarrito")
    const title = tr.querySelector('.title').textContent;
    carrito.forEach(item =>{
        if(item.title.trim()=== title){
            sumaInput.value <1 ? (sumaInput.value = 1) : sumaInput.value;
            item.cantidad = sumaInput.value
            CarritoTotal()
        }
    })
}


function addLocalStorage(){
    localStorage.setItem('carrito', JSON.stringify(carrito))
}

window.onload = function(){
    const storage = JSON.parse(localStorage.getItem('carrito'));
    //con esto se guardan cuando regarges
    if(storage){
        carrito = storage
        renderCarrito()
    }
}