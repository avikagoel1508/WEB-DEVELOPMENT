function OrderFood(cb) {
console.log("Order placed");
setTimeout(() => {
console.log("Order confirmed");
cb(DeliverFood);
}, 1000);

}
function CookFood(cbb) {
    var item="soup";
console.log("Cooking starts");
setTimeout(() => {
console.log("Cooking complete");

let cookedItem = "Cooked " + item;
cbb(cookedItem);
}, 2000);


}
function DeliverFood(cookedItem) {
    
console.log("Delivery started");
setTimeout(() => {
console.log("Delivered");
let deliveryStatus = cookedItem + " - Delivered at your door";
}, 1500);
}
OrderFood(CookFood);