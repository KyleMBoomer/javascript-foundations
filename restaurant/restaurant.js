function createMeal(meal, directions, tableNumber, complete = false) {
  return {
    name: meal,
    specialRequests: directions,
    tableNumber: tableNumber,
    complete: complete
  }
}

function getMade(meal) {
  meal.complete = true
  return meal
}

function announceMeal(meal) {
  if (meal.complete === true) {
    return `Order up - ${meal.name} for table ${meal.tableNumber}!`
  }
  return `This ${meal.name} is not completed yet`
}

function createOrder(order) {
  return {
    tableNumber: order.name,
    meals: order.meals,
    completedMeals: []
  }
}

function cookMeal(order, meal) {
  console.log('order', order)
  console.log('meal', meal)
  for (var i = 0; i < order.meals.length; i++) {
    if (order.meals[i].name === meal.name && order.tableNumber === meal.tableNumber) {
      order.completedMeals.push(order.meals[i].name)
    }
  }
  return order
}

function listOrders(order) {
  var orderNames = []
  for (var i = 0; i < order.meals.length; i++) {
    orderNames.push(order.meals[i].name)
  }
  return orderNames
}

function listSpecialRequests(order) {
  console.log('order', order)
  var specialRequests = []
  for (var i = 0; i < order.meals.length; i++) {
    for (var j = 0; j < order.meals[i].specialRequests.length; j++) {
     specialRequests.push(order.meals[i].specialRequests[j])
    }
 }
  return specialRequests
}

module.exports = { 
  createMeal, 
  getMade, 
  announceMeal,
  createOrder, 
  cookMeal, 
  listOrders, 
  listSpecialRequests
};
