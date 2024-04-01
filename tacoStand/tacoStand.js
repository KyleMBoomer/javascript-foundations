function createIngredient(ingredient = 'unknown', price= 0.00) {
    return {
        name:ingredient,
        price: price
    }
}

function createTaco(name = 'custom', ingredients = []) {
    return {
        name: name,
        ingredients: ingredients
    }
}

function addIngredientToTaco(taco, ingredient) {
taco.ingredients.push(ingredient)
return taco
}

function calculatePrice(taco) {
    var price = 0
    for (var i = 0; i < taco.ingredients.length; i++) {
        price += taco.ingredients[i].price 
    }
    return price
}

module.exports = {
    createIngredient,
    createTaco,
    addIngredientToTaco,
    calculatePrice
}
