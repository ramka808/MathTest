let button = document.getElementById("button");

button.addEventListener("click", checkTest);

function checkTest() {
  let result = 0;

  let a1 = document.getElementById("q1").value;
  let a2 = document.getElementById("q2").value;
  let a3 = document.getElementById("q3").value;
  let a4 = document.getElementById("q4").value;
  let a5 = document.getElementById("q5").value;

  if (a1 == 100) {
    result++
  }

  if (a2 == 10000) {
    result++
  }

  if (a3 == 2) {
    result++;
  }

  if (a4 == 1){
    result++
  }

  if (a5 == 9){
    result++
  }

  alert(result)
}
