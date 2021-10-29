// setTimeout(() => {
//     console.log('Wait me 3s')
// }, 3000)
// console.log('Hurry up!')
//call back

let fetchFnc = async () => {
    
    let response = await fetch('https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple')
    let data = await response.json()
    console.log('data', data)
    console.log('hello')
    // hiện tại mới chỉ có một promise chứ chưa có data!
}
