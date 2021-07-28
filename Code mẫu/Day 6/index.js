let item = document.querySelector('.items')
let cart = document.querySelector('.container-right')
let cartParse = JSON.parse(localStorage.getItem('productsCart'))

console.log('cartParse',cartParse)

for(food of cartParse){
    cart.innerHTML += `<p>${food}</p>`
}
item.addEventListener('click', function (event){


    if(event.srcElement.tagName === 'BUTTON'){
        // alert(event.srcElement.value)
        let item = event.srcElement.value
        console.log('item', item)
        cartParse.push(`${item}`)
        localStorage.setItem('productsCart', JSON.stringify(cartParse))
        cart.innerHTML += `<p>${item}</p>`
    }
})

