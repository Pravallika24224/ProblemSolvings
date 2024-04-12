// Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.

function wait(n) {
  return new Promise((resolve) => {
    resolve("this is resolved")
  })
}

function main() {
  setTimeout(() => {
    wait().then((res) => {
      console.log(res, "what is response")
    })
  }, 2000)
}
main()

/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */
function sleep(n) {
  let a =0
  for(let i = 0; i< n; i++ ){
    a++
  }
  wait().then(res => {
    console.log(res, "this is sleep response")
  })
}

sleep(100000)