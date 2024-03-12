function createFavoriteFood(food) {
    return {
        name: food.dish,
        ingredients: food.ingredients,
        isSpicy: food.isSpicy,
        timesOrdered: food.timesOrdered || 0
    }
}

function commentOnSpiciness(food) {
    if (food.isSpicy) {
        return `Wow, this ${food.name} is so spicy!`
    } else {
        return `Phew, this ${food.name} is not very spicy.`
    }
}

function orderFood(food) {
    food.timesOrdered++
    return food
}

function createShoppingList(foods) {
    var list = []
    for (var i = 0; i < foods.length; i++) {
        list.push(...foods[i].ingredients)
        // for (var j = 0; j < foods[i].ingredients.length; j++) {
        //     list.push(foods[i].ingredients[j])
        // }
    }

    return list 
}


module.exports = {
    createFavoriteFood,
    commentOnSpiciness,
    orderFood,
    createShoppingList

};