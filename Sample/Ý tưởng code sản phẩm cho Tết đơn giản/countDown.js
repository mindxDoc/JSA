  let newYear = new Date('Feb 12, 2021 00:00:00').getTime()
  console.log(newYear)
//update every 1 second
let countDown = setInterval(() => {
    let now = new Date().getTime()
    // console.log(now)
    let distance = newYear- now
    
    //convert distance to d, h, m, s
    let days = Math.floor(distance/(1000 * 60 * 60 * 24)) 
    // console.log(days)
    let hours = Math.floor((distance%(1000 * 60 * 60 * 24))/ (1000 * 60 * 60))
    // console.log(hours)
    let minutes = Math.floor((distance%(1000* 60 *60 ))/ (1000 * 60))
    let seconds = Math.floor((distance% (1000 * 60))/1000)
    let cdClock = document.getElementById('countDownClock')
    cdClock.innerHTML = days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's ' 

    //if new year -> celebrate
    if(distance < 0){
        clearInterval(countDown)
        cdClock.innerHTML = 'Happy New Year!'
    }
}, 1000)
