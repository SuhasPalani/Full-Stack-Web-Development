function bmiMessage(weight, height) {
  let bmiValue = weight / (height * height);
  let message = "";

  if (bmiValue < 18.5) {
      message = "Your BMI is " + bmiValue.toFixed(1) + ", so you are underweight.";
  } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
      message = "Your BMI is " + bmiValue.toFixed(1) + ", so you have a normal weight.";
  } else {
      message = "Your BMI is " + bmiValue.toFixed(1) + ", so you are overweight.";
  }

  return message;
}

// Example usage:
var result = bmiMessage(65, 1.8);
console.log(result);
