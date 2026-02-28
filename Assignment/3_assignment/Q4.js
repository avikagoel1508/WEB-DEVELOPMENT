function PlaceOrder(cb, productId) {
console.log("Placing order...");
setTimeout(() => {
let order = { id: productId, status: "placed" };
console.log(order)
 cb(ShipOrder, order)
}, 1000);
}
function ProcessPayment(cbb, order) {
console.log("Processing payment...");
setTimeout(() => {
order.status = "paid";

order.transactionId = "TXN" + Date.now();
console.log(order.status)
console.log(order.transactionId)

cbb(order)
}, 2000);
}
function ShipOrder(order) {
console.log("Shipping order...");
setTimeout(() => {
order.status = "shipped";
order.trackingId = "TRACK" + Math.random().toString(36).substr(2, 9);
console.log(order.status)
console.log(order.trackingId)
}, 1500);
}
PlaceOrder(ProcessPayment, 101)