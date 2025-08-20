let data = {}
let hasil

let cart = document.querySelector("#cart")
let displaytotal = document.querySelector("#total")

function addData(collectList) {
    if(collectList.nama in data) {
        data[collectList.nama].total++
    } 
    else {
    data[collectList.nama] = {
        price: collectList.price,
        total: 1
    }

} 
    calculateTotal()
    renderCart()
    displayTotal()
}

function buangBarang(barangUntukDibuang) {
    delete data[barangUntukDibuang]
    
    calculateTotal()
    renderCart()
    displayTotal()
}

function displayTotal() {
    clearElemen(displaytotal)
    let p = document.createElement("p")
    p.classList.add("bold")
    p.innerHTML = `RM${hasil}`
    displaytotal.appendChild(p)
}

function calculateTotal() {
    hasil = 0

    for(let key in data) {
        hasil += data[key].price * data[key].total
    }
}

function renderCart() {
    clearElemen(cart)
    for(let key in data) {
        let div_list = document.createElement("div")
        let div_button = document.createElement("div")
        let i = document.createElement("i")
        let button = document.createElement("button")

        button.classList.add("buang")
        button.setAttribute("onclick", `buangBarang('${key}')`)
        i.classList.add("fa-solid")
        i.classList.add("fa-trash")
        div_list.classList.add("kedua-padding")

        button.appendChild(i)
        div_button.appendChild(button)
        i.insertAdjacentHTML("afterend", "<span> Buang</span>")

    div_list.innerHTML = `${key} (${data[key].total}x)`

    cart.appendChild(div_list)
    cart.appendChild(div_button)
    }
}

function clearElemen(elemen) {
    while(elemen.firstChild) {
        elemen.removeChild(elemen.firstChild)
    }
}