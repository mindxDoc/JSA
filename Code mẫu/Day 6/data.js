let products = [
    {
        name: 'Pho',
        title: 'Day la mon an co truyen cua Ha Noi va Viet Nam',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis repudiandae eaque consectetur voluptates amet rem cum commodi distinctio iure? Animi nulla repellat hic? Voluptatum totam iusto eaque deleniti officiis nemo?',
        img: './Imagine/item-picture1.webp'
    },
    {
        name: 'Bun rieu',
        title: 'Day la mon an tuyet voi va rat thich hop de di an voi nguoi yeu',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis repudiandae eaque consectetur voluptates amet rem cum commodi distinctio iure? Animi nulla repellat hic? Voluptatum totam iusto eaque deleniti officiis nemo?',
        img: './Imagine/item-picture1.webp'
    },
    {
        name: 'Banh da cua',
        title: 'Day la mot mon sieu ngon cua HaiPhong',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis repudiandae eaque consectetur voluptates amet rem cum commodi distinctio iure? Animi nulla repellat hic? Voluptatum totam iusto eaque deleniti officiis nemo?',
        img: './Imagine/item-picture1.webp'
    },
    {
        name: 'Bun bo Hue',
        title: 'Mon ngon cua Hue',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis repudiandae eaque consectetur voluptates amet rem cum commodi distinctio iure? Animi nulla repellat hic? Voluptatum totam iusto eaque deleniti officiis nemo?',
        img: './Imagine/item-picture1.webp'
    },
    {
        name: 'Banh bot loc',
        title: 'Mon ngon dac san cua Hue',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis repudiandae eaque consectetur voluptates amet rem cum commodi distinctio iure? Animi nulla repellat hic? Voluptatum totam iusto eaque deleniti officiis nemo?',
        img: './Imagine/item-picture1.webp'
    },
    {
        name: 'Bun oc ',
        title: 'Mot mon ngon va dinh cao vao mua dong',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis repudiandae eaque consectetur voluptates amet rem cum commodi distinctio iure? Animi nulla repellat hic? Voluptatum totam iusto eaque deleniti officiis nemo?',
        img: './Imagine/item-picture1.webp'
    },
]

// -------------- local Storage done -------------- 
// Chạy đoạn code này trước để khởi tạo Local Storage 


// let productsCart = []
// let productsCartString = JSON.stringify(productsCart)
// localStorage.setItem('productsCart', productsCartString)

// let productsString = JSON.stringify(products)
// console.log(productsString)

// localStorage.setItem('products',productsString)

// let productsData = localStorage.getItem('products')
// console.log(JSON.parse(productsData))
// -------------- -------------- --------------------

let items = document.querySelector('.items')
for (product of products){
    items.innerHTML+= `
    <div class="item">
    <div class="product-view">
        <img class="img-icon" src=${product.img} alt="">
        <button type="input" value= '${product.name}' >add to list</button>
    </div>
    <div class="content">
        <h3>${product.name}</h3>
        <p> 
            ${product.title}
        </p> 
    </div>

    `
}



