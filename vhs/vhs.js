function createTape(title, readyToPlay = false) {
    var tape = {
        title: title,
        readyToPlay: readyToPlay 
    }
    return tape
}

function reset(tape) {
    tape.readyToPlay = true
    return tape
}

function createCollection(...args) {
    var collection = []
    for (var i = 0; i < args.length; i++) {
        if (args[i]) {
            collection.push(args[i])
        }
    }
  if (collection.length) {
    return collection
  } 
  return 'Your collection is empty.'
}

function previewCollection(collection) {
    var allTitles = []
    for (var i = 0; i < collection.length; i++) {
        allTitles.push(collection[i].title)
    }
return allTitles
}



module.exports = {
    createTape,
    reset,
    createCollection,
    previewCollection
}