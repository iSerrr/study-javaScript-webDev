function t1() {
  let s = "";
  for (let i = 0; i <= 50; i++) {
    s += i + " ";
  }
  document.querySelector("#tx1").innerHTML = s;
}
function t2() {
  let res = "";
  for (let i = 2; i <= 122; i += 2) {
    res += String(i) + " ";
  }
  document.querySelector("#tx2").innerHTML = res;
}
function t3() {
  let res = "";
  for (let i = 28; i >= 7; i--) {
    res += String(i) + " ";
  }
  document.querySelector("#tx3").innerHTML = res;
}
//? Напишите однострочное решение, которое вычисляет сумму квадратных корней для всех чётных чисел целочисленного массива.
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function summkwad(arr) {
    return arr.reduce((ak, item) => item % 2 === 0 ? ak += item ** (1 / 2) : ak += 0, 0);
}

console.log(summkwad(arr));
