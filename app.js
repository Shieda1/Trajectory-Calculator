// https://calculator.swiftutors.com/trajectory-calculator.html

// calculations doesnot work

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const horizontalRangeRadio = document.getElementById('horizontalRangeRadio');
const timeofFlightRadio = document.getElementById('timeofFlightRadio');

const g = 9.80665;
let angleofInclination = v1;
let initialVelocity = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

btn.addEventListener('click', function() {
  
  if(horizontalRangeRadio.checked)
    result.textContent = `Angle of Inclination = ${computeAngleofInclination().toFixed(2)} Degrees`;

  else if(timeofFlightRadio.checked)
    result.textContent = `Initial Velocity = ${computeInitialVelocity().toFixed(2)} m/s`;
})

// calculation

function computeAngleofInclination() {
  return (Math.pow(Number(initialVelocity.value), 2) * Math.sin(2 * Number(angleofInclination.value))) / g;
}

function computeInitialVelocity() {
  return ((Number(initialVelocity.value) * 2) * Math.sin(Number(angleofInclination.value))) / g;
}