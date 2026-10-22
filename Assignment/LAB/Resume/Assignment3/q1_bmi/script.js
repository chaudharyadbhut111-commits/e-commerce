function calculateBMI() {
  var height = document.getElementById("height").value;
  var weight = document.getElementById("weight").value;
  var result = document.getElementById("result");

  if (height <= 0 || weight <= 0 || height == "" || weight == "") {
    result.innerText = "Please enter valid height and weight";
    result.style.color = "red";
    return;
  }

  var heightInMeters = height / 100;
  var bmi = weight / (heightInMeters * heightInMeters);
  var category = "";

  if (bmi < 18.5) {
    category = "Underweight";
    result.style.color = "orange";
  } else if (bmi < 25) {
    category = "Normal";
    result.style.color = "green";
  } else {
    category = "Overweight";
    result.style.color = "red";
  }

  result.innerText = "BMI: " + bmi.toFixed(2) + " (" + category + ")";
}
