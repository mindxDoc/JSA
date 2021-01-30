let fetchFnc = () => {
    
    let response = fetch('https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple')
    
    console.log('response', response)
    console.log('hello')
    // hiện tại mới chỉ có một promise chứ chưa có data!
}
