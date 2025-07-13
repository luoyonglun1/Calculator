  const input1 = document.getElementById("number1");
  const input2 = document.getElementById("number2");
  const button = document.getElementById("calculateBtn");
  const resultDisplay = document.getElementById("result");

  function showResult() {
  const num1 = +document.getElementById("number1").value;
  const num2 = +document.getElementById("number2").value;
  const sum = num1 + num2;
  document.getElementById("result").textContent = "Result: " + sum;
  }

  document.getElementById("calculateBtn").onclick = showResult;
