function createMaterial(thing, type, price) {
  return {
    name: thing,
    unit: type, 
    costPerUnit: price
  }
}

function calculateMaterialCost(object, number) {
return `${number} ${object.unit}s of ${object.name} costs $${object.costPerUnit * number}.`
}

function createSupplyCloset(thing1) {
  console.log(thing1)
  var myCloset = { supplies: [] }
  if (thing1) {
  for (var i = 0; i < thing1.length; i++) {
  myCloset.supplies.push(thing1[i].name)
  }
}
  return myCloset
}

function addSupply(closet, material) {
var newCloset = closet.supplies
if (closet.supplies.includes(material.name)) {
  return `You already have ${material.name} in your closet!`
} else
newCloset.push(material.name)
return newCloset
}

function createNewProject(array, string) {
if (!string) {
  return {
    materialsNeeded: array,
    status: `not started`
  }
} else
return {
  materialsNeeded: array,
  status: string
  } 
}

function compareMaterials(project, supplies) {
  for (var i = 0; i < project.materialsNeeded.length; i++) {
    for (var j = 0; j < supplies.supplies.length; j++) {
    if (!project.materialsNeeded[i].name.includes(supplies.supplies[j])) {
      return 'Oh no! You need to go shopping before you can start this project!'
      } else {
        return 'Yay! You can start this project!'
      }
    }
  }
}





module.exports = {
  createMaterial,
  calculateMaterialCost,
  createSupplyCloset,
  addSupply,
  createNewProject,
  compareMaterials
}