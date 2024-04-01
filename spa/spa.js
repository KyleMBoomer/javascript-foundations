function createCustomer(name, bill, bookings = []) {
  return {
    name: name, 
    bill: bill, 
    bookings: bookings
  }
}

function greeting(customer) {
  if (customer.bookings.length) {
    return `${customer.name}! Welcome back to Happy Spa`
  } else {
    return `${customer.name}! Welcome to Happy Spa`
  }
}

function createService(service, price) {
if (service) {
  return {
  name: service, 
  cost: price
  } 
} else {
  return `Please provide service name and cost.`
  }
}

function bookServices(customer, service) {
  customer.bookings.push(service.name)
  customer.bill += service.cost
  return customer
}

function applyGiftCard(services, giftCard) {
  var affordableServices = []
for (var i = 0; i < services.length; i++) {
  if (giftCard >= services[i].price) {
    affordableServices.push(services[i].name) 
    }
  }
  return affordableServices
}

module.exports = { 
  createCustomer, 
  greeting, 
  createService,
  bookServices, 
  applyGiftCard 
}
