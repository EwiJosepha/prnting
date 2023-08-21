
const display = document.getElementById("display")
const check = document.getElementById("check")

let arr = []

const numm = () => {
  const startt = document.getElementById("start")
  const endd = document.getElementById("end")
  console.log(endd)
  for (i = startt.value; i <= endd.value; i++) {
    arr.push(i)
  }
  console.log(arr)
  display.innerHTML = `this is the result ${arr}`
}
check.addEventListener("click", numm);








