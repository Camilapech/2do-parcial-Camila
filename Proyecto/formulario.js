var inputs = document.getElementsByName('formulario-input');
for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('keyup', function(){
        if(this.nodeValue.length>=2) {
            this.nextElementSibling.classList.add('fijar');
        } else {
            this.nextElementSibling.classList.remove('fijar');
        }
    });
}
//interacción con el formulario, visualización 

var getData = function (){
    var name = document.getElementById("name").value;
    var correo = document.getElementById("correo").value;
    var tel = document.getElementById("tel").value;
    if(name == "") {
        document.getElementById("name").focus();
    }else {
        if (correo == "") {
            document.getElementById("correo").focus();
        } else {
            if (tel == "") {
                document.getElementById("tel").focus();
            } else {
                console.log(name+correo+tel)
                document.getElementById("name").value = "";
                document.getElementById("correo").value = "";
                document.getElementById("tel").value = "";
            }
        }
    }
}
//obtención de datos y escrito en console para ver los mismos




