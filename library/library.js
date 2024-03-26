function issueCard(name, age) {
    if (age < 12) {
return {
    name: name,
    age: age,
    numBooksCheckedOut: 0,
    isChild: true
    }
  } else {
    return {
    name: name,
    age: age,
    numBooksCheckedOut: 0,
    isChild: false
    }
  }
}

function searchByAuthor(array, string) {  
    console.log('collection', array)
    var book = [] 
    for (var i = 0; i < array.length; i++ ) {
        if (array[i].author === string) {
            book.push(array[i])
        } 
    } 
    if (book.length) {
    return book 
    }
    return 'No book found for search criteria'
}

module.exports = {  
    issueCard, 
    searchByAuthor,
}