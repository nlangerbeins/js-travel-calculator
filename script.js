budgetTotal.addEventListener('keyup', function () {
  document.querySelector('#budgetTotalTwo').textContent = budgetTotal;
  calculate();
});

airlineTickets.addEventListener('keyup', calculate);
peopleNumberTravel.addEventListener('keyup', calculate);
baggageFees.addEventListener('keyup', calculate);
petChildcare.addEventListener('keyup', calculate);
insurance.addEventListener('keyup', calculate);
nightsNumber.addEventListener('keyup', calculate);
roomCost.addEventListener('keyup', calculate);
peopleNumberFood.addEventListener('keyup', calculate);
mealsNumber.addEventListener('keyup', calculate);
daysNumber.addEventListener('keyup', calculate);
mealCost.addEventListener('keyup', calculate);
peopleNumberActivity.addEventListener('keyup', calculate);
toursCost.addEventListener('keyup', calculate);
entertainmentCost.addEventListener('keyup', calculate);

function calculate() {
  const budgetTotal = document.querySelector('#budgetTotal').value;

  const peopleNumberTravel = document.querySelector(
    '#peopleNumberTravel'
  ).value;
  const airlineTickets = document.querySelector('#airlineTickets').value;
  const baggageFees = document.querySelector('#baggageFees').value;
  const petChildcare = document.querySelector('#petChildcare').value;
  const insurance = document.querySelector('#insurance').value;

  const nightsNumber = document.querySelector('#nightsNumber').value;
  const roomCost = document.querySelector('#roomCost').value;

  const peopleNumberFood = document.querySelector('#peopleNumberFood').value;
  const mealsNumber = document.querySelector('#mealsNumber').value;
  const daysNumber = document.querySelector('#daysNumber').value;
  const mealCost = document.querySelector('#mealCost').value;

  const peopleNumberActivity = document.querySelector(
    '#peopleNumberActivity'
  ).value;
  const toursCost = document.querySelector('#toursCost').value;
  const entertainmentCost = document.querySelector('#entertainmentCost').value;

  let travelExpenses =
    (+airlineTickets + +baggageFees + +insurance) * peopleNumberTravel +
    +petChildcare;
  let lodging = nightsNumber * roomCost;
  let foodExpenses = peopleNumberFood * mealsNumber * daysNumber * mealCost;
  let extraExpenses = (+toursCost + +entertainmentCost) * peopleNumberActivity;
  let costExpected = travelExpenses + lodging + foodExpenses + extraExpenses;
  let budgetDifference = budgetTotal - costExpected;

  document.querySelector('#budgetTotalTwo').textContent = budgetTotal;
  document.querySelector('#budgetExpected').textContent = costExpected;
  if (budgetDifference > 0) {
    document.querySelector('#budgetDifference').textContent =
      '+' + budgetDifference;
  } else {
    document.querySelector('#budgetDifference').textContent = budgetDifference;
  }
}

const buttonReset = document.querySelector('#resetButton');
buttonReset.addEventListener('click', () => {
  location.reload();
});
