function insert(num) {
    var numero = document.getElementById('display').innerHTML
    document.getElementById('display').innerHTML = numero + num
}

function clean() {
    document.getElementById('display').innerHTML = ' '
}

function calcular() {
    var result = document.getElementById('display').innerHTML

    if (result) {
        document.getElementById('display').innerHTML = eval(result)
    }

}
