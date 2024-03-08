function createMeal(name, specialRequests, tableNumber){
  var meal = {
    name: name,
    specialRequests: specialRequests,
    tableNumber: tableNumber,
  }
  console.log(meal)
  return meal;
}

function getMade(food){

}

module.exports = { 
  createMeal, 
  getMade, 
  // announceMeal,
  // createOrder, 
  // cookMeal, 
  // listOrders, 
  // listSpecialRequests
};
