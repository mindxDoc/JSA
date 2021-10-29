// {
//     var a = 10

//     console.log('TRong scope', a)

// }

// console.log('Ngoai scope', a)

//với cách khai báo biến là var, chúng ta có thể truy cập được kể cả trong hay ngoài scope!


// {
//     let a = 10

//     console.log('TRong scope', a)

// }
// console.log('Ngoài scope', a)

//Với cách khai báo let, chúng ta không thể truy cập biến ở bên ngoài scope; lỗi sẽ báo not defined !


//VD1:
// let a = 2

// if (a > 1) {
//     let b = a * 3
//     console.log('b', b)
//     for (let i = a; i <= b; i++) {
//         let j = i + 10
//         console.log('j', j)
//     }

//     let c = a + b
//     console.log('c', c)
// }
// biến nào chỉ tồn tại trong phạm vi của if và biến nào tồn tại trong phạm vi vòng lặp for???

// ------------Const---------------

// const a = 10

// console.log('a', a)

// a = 5 // báo lỗi thông thể gán giá trị cho hằng số
// console.log('a', a) 

// const testArrr = [1, 2, 3,4]

// console.log('test array', testArrr)

// testArrr.push(5);

// console.log('test array after push', testArrr)

//Cho dù là const, chúng ta hoàn toàn có thể tùy chỉnh dữ liệu bên trong array/ object! Tuy nhiên không thể gán lại cho testArr một giá trị khác!



// ------------Arrow function---------------

// let newArrow = (param1, param2) => {
//     // do somethings
// }

//Rút ngắn: 
// let sum = (a,b) => console.log('a + b', a+b)

//Bỏ ngoặc tròn:
// let alertA = a => alert('a'  + a)

// Không có tham số bắt buộc phải có ngoặc tròn:
let helloFnc = () => {
    alert('Hello world ES6')
    console.log('Hello world ES6')
}