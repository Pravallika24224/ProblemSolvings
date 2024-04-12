// Can you make it so that it updates every second, and shows time in the following formats -
// HH:MM::SS (Eg. 13:45:23)
// HH:MM::SS AM/PM (Eg 01:45:23 PM)

function changeTimeFormat() {
  const date = new Date()
  let getHours = date.getHours()
  let getMinutes =  date.getMinutes()
  let getSeconds =  date.getSeconds()
  let newFormat = getHours >= 12 ? 'PM' : 'AM'
  getHours = getHours % 12
  getHours = getHours ? getHours : 12
  getHours = getHours < 10 ? '0' + getHours : getHours
  getMinutes = getMinutes < 10 ? '0' + getMinutes : getMinutes
  getSeconds = getSeconds < 10 ? '0' + getSeconds : getSeconds
  const time = `${getHours}:${getMinutes}:${getSeconds} ${newFormat}`
  setTimeout(() => {
    changeTimeFormat()
  }, 1000)
  console.log(time)
}

changeTimeFormat()

function changeTimeFormat2() {
  let date = new Date();
  let n = date.toLocaleString([], {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
  });
  setTimeout(() => {
    changeTimeFormat2()
  }, 1000)

  console.log(n);
}

changeTimeFormat2();