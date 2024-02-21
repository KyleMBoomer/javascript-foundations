function createEvent(title, month, day) {
    var event = {
        title: title,
        month: month,
        day : day
    }
    if (event.day >= 1 && event.day < 31) {
        return event
    } else {
        return `Error: ${event.day} is not a valid day`
    }
}

function createCalendar(owner, events) {
    console.log('owner', owner)
    console.log('events', events)
    var calendar = {
        owner: owner,
        events: events
    }
 return calendar 
}

module.exports = {createEvent, createCalendar};