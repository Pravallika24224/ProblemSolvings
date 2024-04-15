// create counter in Javascript It should go up as time goes by in intervals of 1 second

// using setTimeOut
function counter () {
  const date = new Date()
  const hours = date.getHours()
  const minutes = date.getMinutes()
  const seconds = date.getSeconds()
  const time = `${hours}:${minutes}:${seconds} `
  setTimeout(() => {
    counter()
  }, 1000)
  console.log(time)
}
counter()

// Using setInteval
function counter2(){
  const date = new Date()
  const hours = date.getHours()
  const minutes = date.getMinutes()
  const seconds = date.getSeconds()
  const time = `${hours}:${minutes}:${seconds} `
  console.log(time)
}
counter2()
setInterval(counter2, 1000)