const display = document.getElementById('display')
const check = document.getElementById('check')

const arr = []

const numm = (item) => {
  const startt = document.getElementById('start')
  const endd = document.getElementById('end')
  console.log(endd)
  for (let i = startt.value; i <= endd.value; i++) {
    arr.push(i)
  }
  console.log(arr)
  display.innerHTML = `this is the result ${arr}`
}
check.addEventListener('click', numm)
