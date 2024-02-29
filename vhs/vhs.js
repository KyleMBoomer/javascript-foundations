function createTape(title, readyToPlay) {
    var tape = {
        title : title,
        readyToPlay: readyToPlay || false
    }
    return tape
}

function reset(tape) {
    tape.readyToPlay = true
    return tape
}

function createCollection(tape1, tape2, tape3) {
var collection = [] || '' 
if (collection === undefined) {
    return 'Your collection is empty.'
} else {
    collection.push(tape1, tape2, tape3)
}
console.log(collection)
return collection

}


module.exports = { createTape, 
    reset, 
    createCollection, 
    // previewCollection
 }